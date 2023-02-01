import React from "react";

const ExtensionKeywordBlock = ({ extensionKeywordData }) => {
  const deleteBlockFileExtension = () => {};
  return (
    <div className="flex justify-center items-center border border-gray-500/50 h-6 rounded-md px-2">
      {extensionKeywordData.extensionKeyword}
      <span
        className="pl-2 text-xs cursor-pointer"
        onClick={deleteBlockFileExtension}
      >
        ❌
      </span>
    </div>
  );
};

export default ExtensionKeywordBlock;
