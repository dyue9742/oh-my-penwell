import { ReactNode } from "react";
import { Horizon } from "../_lib/component/navigate";

interface ISignedProps {
  children: ReactNode;
}

const SignedLayout: React.FC<ISignedProps> = ({ children }) => {
  return (
    <main style={{ margin: 0, padding: 0 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
				<Horizon />
        <div>{children}</div>
      </div>
      <footer>
        <p>PenWell,WriteWell</p>
        <p>2023 - 2024</p>
      </footer>
    </main>
  );
};

export default SignedLayout;
