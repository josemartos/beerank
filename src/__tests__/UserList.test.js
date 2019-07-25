import { readFileSync } from "fs";
import path from "path";
import mockAxios from "axios";
import React from "react";
import { render, cleanup, act } from "@testing-library/react";
import UserList from "../components/UserList";

const users = JSON.parse(
  readFileSync(
    path.join(__dirname, "/../../__fixtures__/users.json")
  ).toString()
);

beforeAll(() => {
  mockAxios.get.mockImplementationOnce(() => ({
    then: callback =>
      act(() => {
        callback({ data: users });
      })
  }));
});
afterEach(cleanup);

test("User list renders all users", async () => {
  const { getByTestId } = render(<UserList />);
  const userList = getByTestId("user-list");

  expect(userList.children.length).toEqual(users.length);
  expect(mockAxios.get).toBeCalled();
});
