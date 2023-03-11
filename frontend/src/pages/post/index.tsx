// 글 등록 페이지
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import TextEditor from "@/components/textEditor";

// 작성하는 게시글의 미리보기 가독성 좋게 CSS 조정하기
export default function Post() {
  const router = useRouter();
  const { status } = useSession();

  const main = useRef(null);
  const title = useRef(null);

  // 작성글을 html로 하여금 미리 볼수 있게 하는 변수
  const [content, setContent] = useState("");

  const viewContainerRef = useRef<HTMLDivElement>(null);
  const registerPost = async () => {
    try {
      const res = await axios.post(
        "/api/post",
        {
          title: title.current.value,
          post: content,
        },
        {
          withCredentials: true,
        }
      );

      console.log("response:", res.data);

      title.current.value = null;
      setContent("");
      router.push("/post/list");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/");
    }
    if (viewContainerRef.current) {
      viewContainerRef.current.innerHTML = `<h3>작성 글미리보기</h3>`;
      viewContainerRef.current.innerHTML += content;
    }
  }, [content]);

  console.log("글 내용", content);

  return (
    <>
      <div className="row gx-4 gx-lg-5 justify-content-around">
        <div className="mt-5">
          <div className="mb-2">
            <textarea placeholder="제목을 입력하세요" ref={title} />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 text-center">
          <TextEditor content={content} setContent={setContent} />
        </div>
        <div className="col-lg-3 col-md-6 text-center" ref={viewContainerRef} />
        <button onClick={registerPost}>등록</button>
      </div>
    </>
  );
}
