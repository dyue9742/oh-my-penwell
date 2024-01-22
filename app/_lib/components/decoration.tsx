export const Decoration = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#005f87",
          color: "#ececec",
          top: 0,
          right: 0,
          width: "128px",
          height: "128px",
          position: "absolute",
          fontSize: "64px",
          fontFamily: "Josefin Sans",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <p style={{ paddingRight: "8px" }}>pw</p>
      </div>
      <div
        style={{
          background: "#0087af",
          top: 128,
          right: 0,
          width: "128px",
          height: "128px",
          position: "absolute",
        }}
      ></div>
      <div
        style={{
          background: "#00fefe",
          top: 256,
          right: 0,
          width: "128px",
          height: "64px",
          position: "absolute",
        }}
      ></div>
    </div>
  );
};
