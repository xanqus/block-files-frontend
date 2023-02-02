import axios from "axios";
import React, { useEffect, useState } from "react";
import ExtensionKeywordBlock from "./components/ExtensionKeywordBlock";
import Layout from "./layout/Layout";

function App() {
  const [loading, setLoading] = useState(true);
  const [extensionKeyword, setExtensionKeyword] = useState("");
  const [extensionKeywordList, setExtensionKeywordList] = useState("");

  const toggleExtensionKeyword = async (keyword) => {
    await axios({
      url: "http://localhost:8287/block-file-extension/toggle",
      method: "POST",
      data: {
        extensionKeyword: keyword,
      },
    });
    const updatedExtensionKeywordList = await axios({
      url: "http://localhost:8287/block-file-extension",
      method: "GET",
    });
    setExtensionKeywordList(updatedExtensionKeywordList.data);
  };
  const onChangeExtensionKeywordInput = (e) => {
    setExtensionKeyword(e.target.value);
  };
  const getExtensionKeywords = async () => {
    const extensionKeywords = await axios({
      url: "http://localhost:8287/block-file-extension",
      method: "GET",
    });
    setExtensionKeywordList(extensionKeywords.data);
    setLoading(false);
  };

  useEffect(() => {
    getExtensionKeywords();
  }, []);

  const sendExtensionKeyword = async () => {
    try {
      console.log("hi");
      await axios({
        url: "http://localhost:8287/block-file-extension",
        method: "POST",
        data: {
          extensionKeyword,
        },
      });
    } catch (e) {
      console.log("error: " + e);
      alert(e.response.data.message);
    }
    setExtensionKeyword("");
    getExtensionKeywords();
  };

  const handleKeyDown = (e) => {
    if (e.code === "Enter") sendExtensionKeyword();
  };

  const deleteAll = async () => {
    await axios({
      url: "http://localhost:8287/block-file-extension/all",
      method: "DELETE",
    });
    getExtensionKeywords();
  };

  if (loading) return <div>loading...</div>;
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
              <input
                type="checkbox"
                checked={
                  extensionKeywordList.filter(
                    (e) => e.extensionKeyword === "bat"
                  ).length > 0
                }
                onChange={() => {
                  toggleExtensionKeyword("bat");
                }}
              />{" "}
              bat
            </div>
            <div>
              <input
                type="checkbox"
                checked={
                  extensionKeywordList.filter(
                    (e) => e.extensionKeyword === "cmd"
                  ).length > 0
                }
                onChange={() => {
                  toggleExtensionKeyword("cmd");
                }}
              />{" "}
              cmd
            </div>
            <div>
              <input
                type="checkbox"
                checked={
                  extensionKeywordList.filter(
                    (e) => e.extensionKeyword === "com"
                  ).length > 0
                }
                onChange={() => {
                  toggleExtensionKeyword("com");
                }}
              />{" "}
              com
            </div>
            <div>
              <input
                type="checkbox"
                checked={
                  extensionKeywordList.filter(
                    (e) => e.extensionKeyword === "cpl"
                  ).length > 0
                }
                onChange={() => {
                  toggleExtensionKeyword("cpl");
                }}
              />{" "}
              cpl
            </div>
            <div>
              <input
                type="checkbox"
                checked={
                  extensionKeywordList.filter(
                    (e) => e.extensionKeyword === "exe"
                  ).length > 0
                }
                onChange={() => {
                  toggleExtensionKeyword("exe");
                }}
              />{" "}
              exe
            </div>
            <div>
              <input
                type="checkbox"
                checked={
                  extensionKeywordList.filter(
                    (e) => e.extensionKeyword === "scr"
                  ).length > 0
                }
                onChange={() => {
                  toggleExtensionKeyword("scr");
                }}
              />{" "}
              scr
            </div>
            <div>
              <input
                type="checkbox"
                checked={
                  extensionKeywordList.filter(
                    (e) => e.extensionKeyword === "js"
                  ).length > 0
                }
                onChange={() => {
                  toggleExtensionKeyword("js");
                }}
              />{" "}
              js
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
                onKeyDown={handleKeyDown}
              />
              <div
                className="flex justify-center items-center text-white w-16 bg-gray-600/50 cursor-pointer rounded-md"
                onClick={sendExtensionKeyword}
              >
                +추가
              </div>
              <div
                className="flex justify-center items-center text-white w-20 bg-red-600/80 cursor-pointer rounded-md"
                onClick={deleteAll}
              >
                전체삭제
              </div>
            </div>
            <div>
              <div className="border border-gray-500/50 w-96 min-h-[15rem]">
                <div className="pl-4">
                  {
                    extensionKeywordList.filter((e) => e.type === "custom")
                      .length
                  }
                  /200
                </div>
                <div className="flex gap-2 flex-wrap justify-start pl-4 pt-4">
                  {extensionKeywordList
                    .filter((e) => e.type === "custom")
                    .map((ele, index) => (
                      <ExtensionKeywordBlock
                        extensionKeywordData={ele}
                        setExtensionKeywordList={setExtensionKeywordList}
                        key={index}
                      />
                    ))}
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
