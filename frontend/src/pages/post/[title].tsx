import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";

// 한글 제목일때 생각해서 바꾸기
export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query;
  const res = await axios.get(`http://localhost:3000/api/post/${query.title}`, {
    withCredentials: true,
  });

  return { props: { data: res.data } };
};

export default function Detail({ data }: any) {
  console.log(data);
  return (
    <>
      <div>상세</div>
    </>
  );
}
