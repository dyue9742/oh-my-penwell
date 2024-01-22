"use client";

import Link from "next/link";
import { createRef, useEffect, useState } from "react";
import { LockIcon, Profile } from "@/app/_lib/components/svg";
import {
  PaperButtonStyle32,
  TinyPaperButtonStyle,
} from "@/app/_lib/utils/paper_color_style";
import { AxiosInstance } from "axios";

const SignIn = ({ inst }: { inst: AxiosInstance }) => {
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
			}
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
      if (email.current !== null) {
        email.current.value = "";
      }
      if (passw.current !== null) {
        passw.current.value = "";
      }
      setSubmit(false);
    };
  }, [email, passw, submit]);

  return (
    <>
      <div style={{ height: "128px" }}>
        <div
          style={{ display: "flex", flexDirection: "row", paddingTop: "8px" }}
        >
          <div style={TinyPaperButtonStyle}>
            <Profile />
          </div>
          <input ref={email} autoFocus={true} />
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", paddingTop: "8px" }}
        >
          <div style={TinyPaperButtonStyle}>
            <LockIcon />
          </div>
          <input ref={passw} type="password" autoFocus={false} />
        </div>
      </div>
      <div style={{ marginTop: "32px" }}>
        <button
          type="submit"
          style={PaperButtonStyle32}
          onClick={() => {
            setSubmit((submit) => !submit);
          }}
        >
          Sign in!
        </button>
        <Link
          href="/register/1"
          style={{
            paddingLeft: "8px",
            fontSize: "16px",
            fontFamily: "M PLUS Code Latin",
          }}
        >
          Sign Up?
        </Link>
      </div>
    </>
  );
};

export default SignIn;
