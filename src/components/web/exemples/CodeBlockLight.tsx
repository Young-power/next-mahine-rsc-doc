"use client";

import { useState } from "react";
import { Copy, Check, Download } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";


type Props = {
  code: string;
  filename: string;
}
export default function CodeBlockLight({
  code,
  filename,
}: Props) {



  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const download = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Download completed")
  };

  return (
    <div className="relative rounded-lg border border-zinc-200 bg-white dark:bg-muted-foreground">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        pauseOnHover={false}
        draggable={false}
      />
      <div className="absolute right-2 top-2 flex gap-2">
        <button
          onClick={copy}
          className="rounded-md p-2 hover:bg-zinc-100"
        >
          {copied ? (
            <Check className="h-7 w-7 text-green-600" />
          ) : (
            <Copy className="h-5 w-5 text-black" />
          )}
        </button>

        <button
          onClick={download}
          className="rounded-md p-2 hover:bg-zinc-100"
        >
          <Download className="h-5 w-5 text-black " />
        </button>
      </div>

      <pre className="overflow-x-auto bg-zinc-50 p-4 text-sm lg:text-md text-zinc-900 ">
        <code className="">{code}</code>
      </pre>
    </div>
  );
}
