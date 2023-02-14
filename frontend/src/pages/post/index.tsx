// 글 등록 페이지
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Post() {
  const [write, setWrite] = useState<string>("");
  const [post, setPost] = useState<object>({ post: "" });

  const posting = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWrite(e.target.value);
    setPost({ post: write });
  };
  const registerPost = async () => {
    try {
      const res = await axios.post("/api/posting", post, {
        withCredentials: true,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>등록</div>
      <textarea
        placeholder="게시글을 입력하세요"
        value={write}
        onChange={posting}
      />
      <button onClick={registerPost}>등록</button>
    </>
  );
}
