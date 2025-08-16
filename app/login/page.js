"use client";

import { login } from "./action";
import { useFormState } from "react-dom";

export default function Page() {
  const initState = {
    message: "",
  };

  const [state, formAction] = useFormState(login, initState);
  return (
    <form action={formAction}>
      <div>
        email
        <input className="bg-sky-50 border" type="text" name="email"></input>
      </div>
      <div>
        password
        <input
          className="bg-sky-50 border"
          type="password"
          name="password"
        ></input>
      </div>
      <div>
        Message: {state.message}
      </div>
      <button>Login</button>
    </form>
  );
}
