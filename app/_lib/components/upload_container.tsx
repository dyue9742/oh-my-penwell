import * as React from "react";
import { Dropzone } from "@/app/_lib/components/upload_field";
import { PaperButtonStyle } from "@/app/_lib/utils/paper_color_style";

interface IReadyUploadProps {
  submit: () => void;
  cancel: () => void;
}

export const ReadyUpload: React.FC<IReadyUploadProps> = ({
  submit,
  cancel,
}) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(236, 236, 236, 0.3)",
        backdropFilter: "blur(12px)",
        border: "4px solid #005f87",
        color: "#005f87",
        width: "512px",
        height: "512px",
        display: "grid",
        alignContent: "space-around",
        borderRadius: "0 16px 0 16px",
      }}
    >
      <div style={{ fontSize: "8px", justifySelf: "center", opacity: 0.8 }}>
        Please drop your documents here.
      </div>
      <Dropzone />
      <div
        style={{
          justifySelf: "center",
        }}
      >
        <button style={PaperButtonStyle} onClick={cancel}>
          Cancel
        </button>
        <button style={PaperButtonStyle} onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};
