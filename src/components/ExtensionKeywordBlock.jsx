import axios from "axios";
import React from "react";

const ExtensionKeywordBlock = ({
  extensionKeywordData,
  setExtensionKeywordList,
}) => {
  const deleteBlockFileExtension = async () => {
    await axios({
      url: `https://api.pre-test.cono.oa.gg/block-file-extension/${extensionKeywordData.id}`,
      method: "DELETE",
    });
    const updatedExtensionKeywordList = await axios({
      url: "https://api.pre-test.cono.oa.gg/block-file-extension",
      method: "GET",
    });
    setExtensionKeywordList(updatedExtensionKeywordList.data);
  };
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
