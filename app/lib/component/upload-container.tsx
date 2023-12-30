import * as React from "react";
import { Dropzone } from "@/app/lib/component/uploadable-field";
import { PaperButtonStyle48 } from "@/app/lib/util/paper-color";

interface ReadyUploadProps {
  submit: () => void;
  cancel: () => void;
}

export const ReadyUpload: React.FC<ReadyUploadProps> = ({ submit, cancel }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(236, 236, 236, 0.3)",
        backdropFilter: "blur(12px)",
        borderRadius: "0 16px 0 16px",
        border: "4px solid #005f87",
        color: "#005f87",
        width: "512px",
        height: "512px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ fontSize: "14px", justifySelf: "center" }}>
        Please drop your documents here.
      </p>
      <Dropzone />
      <div
        style={{
          width: "100%",
          display: "inline-flex",
          justifyContent: "space-around",
        }}
      >
        <button style={PaperButtonStyle48} onClick={cancel}>
          Cancel
        </button>
        <button style={PaperButtonStyle48} onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};
