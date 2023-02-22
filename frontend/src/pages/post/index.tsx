// 글 등록 페이지
import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { status } = useSession();

  const main = useRef(null);
  const title = useRef(null);

  const registerPost = async () => {
    try {
      const res = await axios.post(
        "/api/post",
        {
          title: title.current.value,
          post: main.current.value,
        },
        {
          withCredentials: true,
        }
      );

      console.log("response:", res.data);

      title.current.value = null;
      main.current.value = null;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/");
    }
  }, []);

  return (
    <>
      <div>제목</div>
      <textarea placeholder="제목을 입력하세요" ref={title} />
      <div>본문</div>
      <textarea placeholder="게시글을 입력하세요" ref={main} />
      <button onClick={registerPost}>등록</button>
    </>
  );
}
