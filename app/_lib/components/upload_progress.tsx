"use client";

import React, { useEffect, useState } from "react";

interface IUploadableProgressProps {
  file: File;
  onDelete: (file: File) => void;
  onUpload: (file: File, url: string) => void;
}

export const UploadableProgress: React.FC<IUploadableProgressProps> = ({
  file,
}: IUploadableProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    async function upload() {
      const url = await uploadFile(file, setProgress);
    }

    upload();
  });
  return <div></div>;
};

function uploadFile(file: File, onProgress: (percentage: number) => void) {}
