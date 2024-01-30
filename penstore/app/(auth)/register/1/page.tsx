const Signup = () => {
  return (
    <>
      <div style={{ height: "128px" }}>
        <div
          style={{ display: "flex", flexDirection: "row", paddingTop: "8px" }}
        >
          <input id="email" placeholder="email..." autoFocus={true} />
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", paddingTop: "8px" }}
        >
          <input id="f_name" placeholder="first name..." autoFocus={false} />
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", paddingTop: "8px" }}
        >
          <input id="l_name" placeholder="last name..." autoFocus={false} />
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", paddingTop: "8px" }}
        >
          <input id="username" placeholder="username..." autoFocus={false} />
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", paddingTop: "8px" }}
        >
          <input id="pass1" placeholder="password..." autoFocus={false} />
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", paddingTop: "8px" }}
        >
          <input
            id="pass2"
            placeholder="confirm password..."
            autoFocus={false}
          />
        </div>
      </div>
      <div style={{ marginTop: "32px" }}>
        <button type="submit">Sign up!</button>
      </div>
    </>
  );
};
