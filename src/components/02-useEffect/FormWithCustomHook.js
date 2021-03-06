import React, { useEffect } from "react";
import { useFrom } from "../../Hooks/useFrom";
import "./effects.css";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useFrom({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("email cambio");
  }, [email]);


  const handleSubmit = e => {
      e.preventDefault();
      console.log(formValues);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h1>FormWithCustomHook</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="email@email.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="************"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
          Enviar
      </button>
    </form>
  );
};
