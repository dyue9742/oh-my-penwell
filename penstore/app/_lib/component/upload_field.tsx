"use client";

import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { DeleteIcon, ShipmentIcon } from "./svg";

interface IDropzoneProps {
  accept: File;
  reject: boolean;
}

const fileSuffix = (filename: string) => {
  const re = /.+\.docx/g;
  return re.test(filename);
};

const fileValidator = (file: File): boolean => {
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
    <div>
      <p>
        {`${size.toString().substring(0, 4)}MB`}, {name}
      </p>
    </div>
  );
};

export const Dropzone: React.FC = () => {
  const [files, setFiles] = useState<IDropzoneProps[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const rejectOrNot = fileValidator(file);
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
    noClick: true,
    noKeyboard: true,
    noDragEventsBubbling: true,
  });

  return (
    <div {...getRootProps()} style={{ justifySelf: "center" }}>
      <input type="file" {...getInputProps()} />
      <div>
        {files.map((file) => (
          <div key={file.accept.name} style={{ alignItems: "center" }}>
            <DocxLabel key={file.accept.name} file={file.accept} />
            <div
              onClick={() => {
                files.splice(files.indexOf(file), 1);
                setFiles([...files]);
              }}
            >
              <DeleteIcon />
            </div>
          </div>
        ))}
      </div>
      <ShipmentIcon />
    </div>
  );
};
