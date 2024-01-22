import {
  PaperButtonStyle32,
  TinyPaperButtonStyle,
} from "@/app/_lib/utils/paper_color_style";
import { LockIcon, Profile } from "@/app/_lib/components/svg";

const SignUp = () => {
  return (
    <>
      <div style={{ height: "128px" }}>
        <div
          style={{ display: "flex", flexDirection: "row", paddingTop: "8px" }}
        >
          <div style={TinyPaperButtonStyle}>
            <Profile />
          </div>
          <input id="email" autoFocus={true} />
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", paddingTop: "8px" }}
        >
          <div style={TinyPaperButtonStyle}>
            <LockIcon />
          </div>
          <input id="passw" type="password" autoFocus={false} />
        </div>
      </div>
      <div style={{ marginTop: "32px" }}>
        <button type="submit" style={PaperButtonStyle32}>
          Sign Up!
        </button>
      </div>
    </>
  );
};

export default SignUp;
