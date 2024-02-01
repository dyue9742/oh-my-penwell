import { Dropzone } from "./upload_field";

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
        width: "512px",
        height: "512px",
        display: "grid",
        alignContent: "space-around",
      }}
    >
      <div style={{ fontSize: "8px", opacity: 0.8, justifySelf: "center" }}>
        Please drop your docx files here (atmost 5).
      </div>
      <Dropzone />
      <div style={{ justifySelf: "center" }}>
        <button style={{}} onClick={cancel}>
          Cancel
        </button>
        <button style={{}} onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};
