import React from "react";
import axios from "axios";
import Link from "next/link";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get(`http://localhost:3000/api/post`, {
    withCredentials: true,
  });
  return { props: { data: res.data } };
};

export default function PostList({ data }: any) {
  return (
    <section className="page-section" id="services">
      <div className="container px-4 px-lg-5">
        {data.map((postings: any) => (
          <div key={postings.id}>
            <Link href={`/post/${postings.title}`}>
              ㅈㅔ목 : {postings.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
