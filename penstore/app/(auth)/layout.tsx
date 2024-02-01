"use client";

import { UpdateMinute } from "@/app/_lib/component/update_minute";
import { ReactElement, Component } from "react";

interface IUnsignedProps {
  children: ReactElement;
}

class UnsignedLayout extends Component {
  state = {
    c: <div></div>,
    w: typeof window !== "undefined" ? window.innerWidth / 2 - 256 : 0,
    h: typeof window !== "undefined" ? window.innerHeight / 100 : 0,
  };

  constructor(props: IUnsignedProps) {
    super(props);
    const { children } = props;
    this.state.c = children;
    console.log(this.state.c, this.state.w, this.state.h);
  }

  resizeUpdater() {
    this.state.w = window.innerWidth;
    this.state.h = window.innerHeight;
  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeUpdater);
  }

  componentWillUmount() {
    window.removeEventListener("resize", this.resizeUpdater);
  }

  render() {
    return (
      <div
        style={{
          top: `${this.state.h}`,
          left: `${this.state.w}`,
          color: "#d2d2d2",
          width: "512px",
          height: "256px",
          display: "grid",
          position: "absolute",
          backgroundColor: "#2a2a2a",
        }}
      >
        <div
          style={{
            border: "8px solid #1d1d1d",
            padding: "8px",
            position: "relative",
          }}
        >
          <div style={{ height: "128px" }}>{this.state.c}</div>
          <div
            style={{
              fontFamily: "Monofett",
              userSelect: "none",
              marginTop: "32px",
              fontSize: "32px",
              bottom: "32px",
              position: "absolute",
            }}
          >
            <UpdateMinute />
          </div>
        </div>
      </div>
    );
  }
}

//const UnsignedLayout: React.FC<IUnsignedProps> = ({ children }) => {
//
//	const _w = (typeof window !== "undefined") ? window.innerWidth / 2 - 256 : 0;
//	const _h = (typeof window !== "undefined") ? window.innerHeight / 100 : 0;
//	console.log(`_w: ${_w}, _h: ${_h}`)
//	const [winSize, setWinSize] = useState<IWinSize>({w: _w, h: _h})
//
//	useEffect(() => {
//    function resizeUpdater() {
//      console.log("resizeUpdater is calling...");
//      const w = window.innerWidth / 2 - 256;
//      const h = window.innerHeight / 100;
//
//			console.log(w, h)
//      setWinSize({ w: w, h: h });
//    }
//
//    window.addEventListener("resize", resizeUpdater);
//
//    return () => {
//      window.removeEventListener("resize", resizeUpdater);
//    };
//	}, [winSize])
//
//  return (
//    <div
//      style={{
//        top: `${winSize.h}`,
//        left: `${winSize.w}`,
//        color: "#d2d2d2",
//        width: "512px",
//        height: "256px",
//        display: "grid",
//        position: "absolute",
//        backgroundColor: "#2a2a2a",
//      }}
//    >
//      <div
//        style={{
//          border: "8px solid #1d1d1d",
//          padding: "8px",
//					position: "relative",
//        }}
//      >
//        <div style={{ height: "128px" }}>{children}</div>
//        <div
//          style={{
//            fontFamily: "Monofett",
//						userSelect: "none",
//            marginTop: "32px",
//            fontSize: "32px",
//            bottom: "32px",
//            position: "absolute",
//          }}
//        >
//          <UpdateMinute />
//        </div>
//      </div>
//    </div>
//  );
//};

export default UnsignedLayout;
