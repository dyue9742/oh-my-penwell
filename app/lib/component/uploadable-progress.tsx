import React, { useEffect, useState } from "react";

interface UploadableProgressProps {
  file: File;
  onDelete: (file: File) => void;
  onUpload: (file: File, url: string) => void;
}

export const UploadableProgress: React.FC<UploadableProgressProps> = ({
  file,
}: UploadableProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    async function upload() {
      const url = await uploadFile(file, setProgress);
    }

    upload();
  });
  return <div></div>;
};

function uploadFile(file: File, onProgress: (percentage: number) => void) {
  const url = "";
  const key = "";

  return new Promise<string>((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.onload = () => {
      const response = JSON.parse(xhr.responseText);
      res(response.secure_url);
    };
    xhr.onerror = (evt) => rej(evt);
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100;
        onProgress(Math.round(percentage));
      }
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", key);

    xhr.send(formData);
  });
}
