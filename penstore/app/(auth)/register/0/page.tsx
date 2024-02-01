"use client";

import { LockIcon, UserIcon } from "@/app/_lib/component/svg";
import { createRef, useEffect, useState } from "react";
import { AxiosInstance } from "axios";
import Link from "next/link";
import "@/app/global.css";

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
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div>
        <div
          style={{
            paddingTop: "8px",
            width: "256px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <UserIcon />
          <input
            ref={email}
            autoFocus={true}
            style={{ marginLeft: "16px", fontFamily: "M PLUS Code Latin" }}
          />
        </div>
        <div
          style={{
            paddingTop: "8px",
            width: "256px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <LockIcon />
          <input
            ref={passw}
            style={{ marginLeft: "16px", fontFamily: "M PLUS Code Latin" }}
          />
        </div>
      </div>
      <div
        style={{
          fontFamily: "M PLUS Code Latin",
          display: "flex",
          marginTop: "32px",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "left",
        }}
      >
        <div style={{ bottom: 0 }}>
          <button
            className="btn-basic"
            type="submit"
            style={{ fontSize: "16px", color: "#d2d2d2" }}
            onClick={(submit) => !submit}
          >
            Sign in!
          </button>
        </div>
        <div style={{ fontSize: "16px", marginLeft: "16px" }}>
          <Link href="/register/1">Sign up!</Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
