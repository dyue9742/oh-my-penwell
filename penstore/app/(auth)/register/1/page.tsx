import "@/app/global.css";

const Signup = () => {
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
          <input
            autoFocus={true}
            placeholder="Email"
            style={{ fontFamily: "M PLUS Code Latin" }}
          />
          <input
            placeholder="Username"
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
          <input
            placeholder="Password"
            style={{ fontFamily: "M PLUS Code Latin" }}
          />
          <input
            placeholder="Confirm!"
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
          >
            Sign up!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
