import { readFileSync } from "fs";
import path from "path";
jest.mock("../utils/Api");
import mockApi from "../utils/Api";
import React from "react";
import { render, cleanup, act } from "@testing-library/react";
import BeerList from "../components/BeerList";

const beers = JSON.parse(
  readFileSync(path.join(__dirname, "/fixtures/beers.json")).toString()
);

beforeAll(() => {
  mockApi.get.mockImplementationOnce(() => ({
    then: callback =>
      act(() => {
        callback({ data: beers });
      })
  }));
});
afterEach(cleanup);

test("Beer list renders all beers", async () => {
  const { getByTestId } = render(<BeerList />);
  const beerList = getByTestId("beer-list");

  expect(beerList.children.length).toEqual(beers.length);
  expect(mockApi.get).toBeCalled();
});
