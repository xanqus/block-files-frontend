import axios from "axios";
import React, { useState } from "react";
import Layout from "./layout/Layout";

function App() {
  const [extensionKeyword, setExtensionKeyword] = useState("");

  const onChangeExtensionKeywordInput = (e) => {
    setExtensionKeyword(e.target.value);
  };

  const sendExtensionKeyword = async () => {
    const data = await axios({
      url: "http://localhost:8287/block-file-extension",
      method: "POST",
      data: {
        extensionKeyword,
      },
    });
    setExtensionKeyword("");
    console.log("data: ", data);
  };
  return (
    <Layout>
      <hr className="h-1 bg-black border-0" />
      <div className="contents">
        <div>
          파일확장자에 따라 특정 형식의 파일을 첨부하거나 전송하지 못하도록 제한
        </div>
        <div className="flex mt-8">
          <div className="w-48">고정 확장자</div>
          <div className="flex gap-4">
            <div>
              <input type="checkbox" /> bat
            </div>
            <div>
              <input type="checkbox" /> cmd
            </div>
            <div>
              <input type="checkbox" /> com
            </div>
            <div>
              <input type="checkbox" /> cpl
            </div>
            <div>
              <input type="checkbox" /> exe
            </div>
            <div>
              <input type="checkbox" /> scr
            </div>
            <div>
              <input type="checkbox" /> js
            </div>
          </div>
        </div>
        <div className="flex mt-8">
          <div className="w-48">커스텀 확장자</div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <input
                className="border-2 border-gray-500/50 rounded-md"
                type="text"
                value={extensionKeyword}
                onChange={onChangeExtensionKeywordInput}
              />
              <div
                className="flex justify-center items-center text-white w-16 bg-gray-600/50 cursor-pointer rounded-md"
                onClick={sendExtensionKeyword}
              >
                +추가
              </div>
            </div>
            <div>
              <div className="border border-gray-500/50 w-96 min-h-[15rem]">
                <div className="pl-4">1/200</div>
                <div className="flex gap-2 flex-wrap justify-start pl-4 pt-4">
                  <div className="flex justify-center items-center border border-gray-500/50 w-16 h-6 rounded-md">
                    sh<span className="pl-2 text-xs">❌</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
