import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get(`http://localhost:3000/api/post`, {
    withCredentials: true,
  });
  return { props: { data: res.data } };
};

export default function PostList({ data }: any) {
  console.log("서버사이드props", data);
  return <>글 목록</>;
}
