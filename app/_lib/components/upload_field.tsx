"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { DocIcon, DelIcon, Shipment } from "@/app/_lib/components/svg";
import { UploadableProgress } from "./upload_progress";

interface IDropzoneProps {
  accept: File;
  reject: boolean;
}

const fileSuffix = (filename: string) => {
  const re = /.+\.docx/g;
  return re.test(filename);
};

const FileValidator = (file: File): boolean => {
  if (!fileSuffix(file.name)) {
    return false;
  }
  if (file.name.length > 32) {
    return false;
  }
  return true;
};

const DocxLabel: React.FC<{ file: File }> = (x: { file: File }) => {
  const { file } = x;
  const name = file.name;
  const size = file.size / 1024 / 1024;

  return (
    <div
      style={{
        width: "384px",
        height: "32px",
        display: "flex",
        marginTop: "8px",
        marginBottom: "2px",
        paddingTop: "8px",
        paddingBottom: "2px",
        alignItems: "center",
        borderRadius: "8px",
        justifyContent: "left",
        border: "2px solid #005f87",
      }}
    >
      <DocIcon />
      <div
        style={{
          marginLeft: "8px",
        }}
      >
        <p>
          {`${size.toString().substring(0, 4)}MB`}, {name}
        </p>
      </div>
    </div>
  );
};

export const Dropzone: React.FC = () => {
  const [files, setFiles] = useState<IDropzoneProps[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const rejectOrNot = FileValidator(file);
        const newAccept: IDropzoneProps = { accept: file, reject: rejectOrNot };
        if (newAccept.reject && files.length < 5) {
          setFiles([newAccept, ...files]);
        }
      });
    },
    [files],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDrop,
    maxSize: 1024 * 1024 * 1024,
    multiple: true,
    noClick: true,
    noKeyboard: true,
    noDragEventsBubbling: true,
  });

  return (
    <div {...getRootProps()} style={{ justifySelf: "center" }}>
      <input type="file" multiple={true} {...getInputProps()} />
      <div
        style={{
          width: "100%",
          position: "absolute",
          justifySelf: "left",
        }}
      >
        {files.map((file) => (
          <div
            key={file.accept.name}
            style={{
              alignItems: "center",
            }}
          >
            <DocxLabel key={file.accept.name} file={file.accept} />
            <div
              onClick={() => {
                files.splice(files.indexOf(file), 1);
                setFiles([...files]);
              }}
            >
              <DelIcon />
            </div>
          </div>
        ))}
      </div>
      <Shipment />
    </div>
  );
};
