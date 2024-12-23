import { useCallback } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { ResponsiveImage } from "./responsive-image";
import Icons from "./icons";

type ImageUploadProps = {
  onChange: (file: File | null) => void;
  value?: string | File | undefined;
};

export default function ImageUpload({ onChange, value }: ImageUploadProps) {
  const imageUrl =
    value instanceof File ? URL.createObjectURL(value) : value || "";

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      if (acceptedFiles.length > 0) {
        onChange(acceptedFiles[0]);
      }
    },
    [onChange]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif", "webp"],
    },
    maxFiles: 1,
  });
  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-primary"
    >
      <input {...getInputProps()} />
      {value ? (
        <div className="relative aspect-video">
          <ResponsiveImage
            src={imageUrl}
            alt="Workout image"
            className="rounded-lg"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <Icons.upload className="size-8" />
          {isDragActive ? (
            <p>Drop the image here</p>
          ) : (
            <p>Drag & drop an image here, or click to select</p>
          )}
        </div>
      )}
    </div>
  );
}
