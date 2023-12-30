import * as React from "react";
import { useCallback, useState } from "react";
import { Shipment } from "@/app/lib/util/svg-colc";
import { FileError, FileRejection, useDropzone } from "react-dropzone";
import { UploadableProgress } from "./uploadable-progress";
import { ItemCard } from "./itemcard";

interface DropzoneProps {
  file: File;
  errors: FileError[];
}

export const Dropzone: React.FC = () => {
  const [files, setFiles] = useState<DropzoneProps[]>([]);

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    const mappedAccepted = acceptedFiles.map((file) => ({ file, errors: [] }));

  }, [files]);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div {...getRootProps()} style={{ justifySelf: "center" }}>
      <input type="file" multiple={true} {...getInputProps()} />
      {files.length > 0 ? (
        acceptedFiles.map((file) => (
          <div
            key={file.name}
            style={{
              width: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                position: "absolute",
              }}
            >
              <ItemCard
                file={file}
                onClick={() => {
                  setFiles((current) =>
                    current.filter((fw) => fw.file !== file),
                  );
                }}
              />
            </div>
            <Shipment />
          </div>
        ))
      ) : (
        <Shipment />
      )}
    </div>
  );
};
