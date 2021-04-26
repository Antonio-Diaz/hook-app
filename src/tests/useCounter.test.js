import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../Hooks/useCounter";
describe("testing on useCounter", () => {
  
    test("must return default values", () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("must have the counter at 100", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  })


  test("must increment counter at 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act( () => {
        increment();
    });

    const { counter } = result.current;
    expect( counter ).toBe(101);
})


  test("must decrement counter at 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act( () => {
        decrement();
    });

    const { counter } = result.current;
    expect( counter ).toBe(99);
})

test("must reset counter at 1", () => {
    const { result } = renderHook(() => useCounter(1));
    const { reset } = result.current;

    act( () => {
        reset();
    });

    const { counter } = result.current;
    expect( counter ).toBe(1);
})
});
