// 글 등록 페이지
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Post() {
  const [write, setWrite] = useState<string>("");
  const [post, setPost] = useState<object>({ post: "" });

  const postingPage = async () => {
    try {
      const res = await axios.get("/post");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    postingPage();
  }, []);
  const posting = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWrite(e.target.value);
    setPost({ post: write });
  };
  // console.log(post, "?");
  // const registerPost = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:3001", post, {
  //       withCredentials: true,
  //     });
  //     console.log(res);
  //     console.log("성공?");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <>
      <div>등록</div>
      <textarea
        placeholder="게시글을 입력하세요"
        value={write}
        onChange={posting}
      />
      {/* <button onClick={registerPost}>등록</button> */}
    </>
  );
}
