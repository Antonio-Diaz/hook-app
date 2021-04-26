import { renderHook, act } from "@testing-library/react-hooks";
import { useFrom } from "../Hooks/useFrom";

describe("Testing useForm", () => {
  const initialForm = {
    name: "Antonio",
    email: "antonio@gmail.com",
  };

  test("must return a default from", () => {
    const { result } = renderHook(() => useFrom(initialForm));
    const [formValues, handleInputChange, reset] = result.current;
    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("must change the values ​​of the form(Only name)", () => {
    const { result } = renderHook(() => useFrom(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Leonardo",
        },
      });
    });

    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, name: "Leonardo" });
  });

  test("must re-establish the form with reset", () => {
    const { result } = renderHook(() => useFrom(initialForm));
    const [, , reset] = result.current;

    act(() => {
      reset();
    });

    const [formValues] = result.current;
    expect(formValues).toEqual({});
  });
});
