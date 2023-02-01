import React from "react";

const ExtensionKeywordBlock = ({ extensionKeyword }) => {
  console.log(extensionKeyword);
  return (
    <div className="flex justify-center items-center border border-gray-500/50 w-16 h-6 rounded-md">
      sh<span className="pl-2 text-xs">❌</span>
    </div>
  );
};

export default ExtensionKeywordBlock;
