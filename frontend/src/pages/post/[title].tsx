import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

// 한글 제목일때 생각해서 바꾸기 => id 변수 생성?

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query;
  const res = await axios.get(`http://localhost:3000/api/post/${query.title}`, {
    withCredentials: true,
  });

  return { props: { data: res.data } };
};

export default function Detail({ data }: any) {
  const router = useRouter();
  const title = data[0].title;
  const main = data[0].post;

  const deleteData = async () => {
    try {
      const res = await axios.delete("/api/post/delete", { data });
      console.log("삭제 완료", res.data);
      router.push("/");
      alert("게시글이 삭제 되었습니다.");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <p>제목 : {title}</p>
        <p>내용 : {main}</p>
        <button onClick={deleteData}>삭제</button>
      </div>
    </>
  );
}
