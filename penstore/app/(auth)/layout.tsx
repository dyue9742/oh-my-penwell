import { UpdateMinute } from "@/app/_lib/component/update_minute";
import { ReactNode } from "react";

interface IUnsignedProps {
  children: ReactNode;
}

const UnsignedLayout: React.FC<IUnsignedProps> = ({ children }) => {
  return (
    <main>
      <div>
        {children}
        <div style={{ fontFamily: "Monofett", fontSize: "16px" }}>
          <UpdateMinute />
        </div>
      </div>
    </main>
  );
};

export default UnsignedLayout;
