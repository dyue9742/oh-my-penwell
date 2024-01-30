"use client";

import { AxiosInstance } from "axios";
import Link from "next/link";
import { createRef, useEffect, useState } from "react";

interface SigninProps {
  inst: AxiosInstance;
}

const Signin: React.FC<SigninProps> = ({ inst }) => {
  const email = createRef<HTMLInputElement>();
  const passw = createRef<HTMLInputElement>();
  const [submit, setSubmit] = useState<boolean>(false);

  const controller = new AbortController();

  inst.interceptors.request.use(
    (config) => {
      config.signal = controller.signal;
      config.params = {
        email: email.current?.value,
        passw: passw.current?.value,
      };
      return config;
    },
    (error) => {
      console.log(error);
      return error;
    },
  );

  useEffect(() => {
    const post = async () => {
      try {
        const { data } = await inst.post("/usr");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (submit) {
      post();
    }

    return () => {
      controller.abort();
      if (email.current != null) {
        email.current.value = "";
      }
      if (passw.current != null) {
        passw.current.value = "";
      }
      setSubmit(false);
    };
  }, [email, passw, submit]);

  return (
    <>
      <div>
        <div>
          <div
            style={{ display: "flex", flexDirection: "row", paddingTop: "8px" }}
          >
            Email
            <input ref={email} autoFocus={true} />
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", paddingTop: "8px" }}
          >
            Password
            <input ref={passw} autoFocus={true} />
          </div>
        </div>
        <div style={{ marginTop: "32px" }}>
          <button type="submit" onClick={(submit) => !submit}>
            Sign in!
          </button>
        </div>
        <Link
          href="/register/1"
          style={{
            paddingLeft: "8px",
            fontFamily: "M PLUS Code Latin",
            fontSize: "16px",
          }}
        ></Link>
      </div>
    </>
  );
};

export default Signin;
