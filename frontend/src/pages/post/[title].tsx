import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

// 한글 제목일때 생각해서 바꾸기 => id 변수 생성?

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query;
  const res = await axios.get(`http://localhost:3000/api/post/${query.title}`, {
    withCredentials: true,
  });

  return { props: { data: res.data } };
};

export default function Detail({ data }: any) {
  const { data: session, status } = useSession();

  const router = useRouter();
  const title = data[0].title;
  const main = data[0].post;

  const email = process.env.NEXT_PUBLIC_EMAIL;

  const deleteData = async () => {
    try {
      const res = await axios.delete("/api/post/delete", { data });
      console.log("삭제 완료");
      router.push("/");
      alert("게시글이 삭제 되었습니다.");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <section className="py-5">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2>{title}</h2>
              <br />
              <p className="mb-0">{main}</p>
            </div>
            {status === "authenticated" && session.user.email === email ? (
              <button onClick={deleteData}>삭쥉</button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
