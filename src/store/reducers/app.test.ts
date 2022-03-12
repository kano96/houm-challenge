import appReducer, { initialState, setStatusFilter, setPage } from "./app";

describe("appReducer", () => {
  it("should set page", () => {
    const newState = appReducer(initialState, setPage(1));

    const expected = {
      ...initialState,
      page: 1,
    };

    expect(newState).toEqual(expected);
  });

  it("should set status filter", () => {
    expect(appReducer(initialState, setStatusFilter("dead"))).toEqual({
      ...initialState,
      filters: {
        ...initialState.filters,
        status: "dead",
      },
    });
  });
});
