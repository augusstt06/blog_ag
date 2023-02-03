// 글 등록 페이지
import React, { useState } from "react";

export default function Post() {
  const [post, setPost] = useState<string>("");
  const posting = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.target.value);
  };
  console.log(post);
  return (
    <>
      <div>등록</div>
      <textarea
        placeholder="게시글을 입력하세요"
        value={post}
        onChange={posting}
      />
    </>
  );
}
