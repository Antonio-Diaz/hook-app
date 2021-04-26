import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../Hooks/useFetch";
describe("Testing on useFetch", () => {
  test("must return default data ", () => {
    const { result } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`, false)
    );
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test("must return data successfully ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );
    await waitForNextUpdate();

    const { data, loading, error } = result.current;
    console.log(result.current);
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(false);
  });

  test("request's errorHandle", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://reqres.in/api2/users?page=2`)
    );
    await waitForNextUpdate();

    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe("data not returned");
  });
});
