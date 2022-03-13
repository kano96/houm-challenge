import appReducer, { initialState, setFilters } from "./app";

describe("appReducer", () => {
  it("should set page", () => {
    const newState = appReducer(
      initialState,
      setFilters({
        ...initialState.filters,
        page: 2,
      })
    );

    const expected = {
      ...initialState,
      filters: {
        ...initialState.filters,
        page: 2,
      },
    };

    expect(newState).toEqual(expected);
  });

  it("should set status filter", () => {
    expect(
      appReducer(
        initialState,
        setFilters({
          ...initialState.filters,
          status: "dead",
        })
      )
    ).toEqual({
      ...initialState,
      filters: {
        ...initialState.filters,
        status: "dead",
      },
    });
  });
});
