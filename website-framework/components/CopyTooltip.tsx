"use client";
import { useState } from "react";
import Image from "next/image"

export default function CopyButton() {
  const [copied, setCopied] = useState(false);
  const textToCopy = "adelfaruque1@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000); // reset tooltip after 1.5s
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="inline-block relative mx-2 -mt-1 group text-sm">
	{/* Button */}	
      <button
        onClick={handleCopy}
        className='px-2 py-1 font-medium text-white bg-indigo-900 rounded hover:bg-indigo-700 active:bg-indigo-900'>
        <Image src='copy.svg' alt="copy to clipboard" height={25} width={25} />
      </button>

      {/* Tooltip */}
      <span className="px-2 py-1 ml-2 rounded bg-gray-700 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {copied ? "Copied!" : "Copy to clipboard"}
      </span>
    </div>
  );
}
