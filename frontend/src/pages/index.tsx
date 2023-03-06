import { useState, useEffect } from "react";
import Image from "next/image";
import kuku from "../asset/kuku.jpg";
import { FaReact } from "react-icons/fa";
import { RiVuejsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

// Hydration Err : mount 변수 생성 후, useEffect훅으로 하여금 최초 렌더링시 mount 변수를 true로 바꾸어 컴포넌트의 return에 조건부 렌더링을 실시한다.

export async function getStaticProps() {
  const backgroundUrl = "https://source.unsplash.com/wfh8dDlNFOk/1600x900";

  return {
    props: { backgroundUrl: backgroundUrl },
  };
}
export default function Home({ backgroundUrl }: any) {
  const [mount, setMounted] = useState(false);

  const language_stack = [
    {
      image: <DiJavascript1 size={80} />,
      name: "Java Script",
      introduction: (
        <p>
          웹 페이지에서 복잡한 기능을 구현할 수 있도록 하는
          <br /> <em>객체(object) 기반</em>의 스크립트 언어
        </p>
      ),
    },
    {
      image: <SiTypescript size={80} />,
      name: "Type Script",
      introduction: (
        <p>
          자바스크립트(JavaScript)를 기반으로
          <br />
          <em>정적 타입 문법</em>을 추가한 프로그래밍 언어
        </p>
      ),
    },
    {
      image: <FaPython size={80} />,
      name: "Python",
      introduction: (
        <p>
          소프트웨어 개발, 데이터 과학, 기계 학습에
          <br /> 널리 사용되는 프로그래밍 언어
        </p>
      ),
    },
  ];
  const framework_stack = [
    {
      image: <FaReact size={80} />,
      name: "React",
      introduction: (
        <p>
          웹 페이지 개발을 위해 <br />
          컴포넌트를 기반으로 한 <em>SPA 라이브러리</em>
        </p>
      ),
    },
    {
      image: <SiNextdotjs size={80} />,
      name: "Next Js",
      introduction: (
        <p>
          React를 기반으로 한 <em>SSR 프레임워크</em>
        </p>
      ),
    },
    {
      image: <RiVuejsFill size={80} />,
      name: "Vue",
      introduction: (
        <p>
          웹 페이지 개발을 위한
          <br /> <em>SPA 프레임워크</em>
        </p>
      ),
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);
  return mount ? (
    <>
      <header className="py-5 bg-image-full">
        {/* <div className="text-center my-5"> */}
        <div className="text-center">
          <Image
            className="img-fluid rounded-circle mb-4"
            src={kuku}
            alt="쿠크 안뇽"
            width={100}
            height={100}
          />
          <h1 className="text-white fs-3 fw-bolder">
            <p>augusstt06&apos;s Blog</p>
          </h1>
          <p className="text-white-50 mb-0">개발과 취미생활</p>
        </div>
      </header>
      {/* -------태크 스택 소개 ------*/}

      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h1 className="text-center mt-0">
            <em>Tech Stacks</em>
          </h1>

          <hr className="divider" />
          <h3 className="text-center mt-0">
            <em>FrameWork</em>
          </h3>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            {framework_stack.map((data) => (
              <div className="col-lg-3 col-md-6 text-center" key={data.name}>
                <div className="mt-5">
                  <div className="mb-2">
                    <i className="bi-gem fs-1 text-primary"></i>
                  </div>
                  <a>{data.image}</a>
                  <h3 className="h4 mb-2">{data.name}</h3>
                  <p className="text-muted mb-0">{data.introduction}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-center mt-0">
            <em>Language</em>
          </h3>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            {language_stack.map((data) => (
              <div className="col-lg-3 col-md-6 text-center" key={data.name}>
                <div className="mt-5">
                  <div className="mb-2">
                    <i className="bi-gem fs-1 text-primary"></i>
                  </div>
                  {data.image}
                  <h3 className="h4 mb-2">{data.name}</h3>
                  <p className="text-muted mb-0">{data.introduction}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ------------------------- */}

      {/* 자기 소개 및 간단한 제작 동기*/}
      <section className="py-5">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2>To become a Front-End developer</h2>
              <p className="lead">
                안녕하세요 프론트엔드 개발 공부를 하고있는 대학생입니다.
                <br />
              </p>
              <p className="mb-0">
                The universe is almost 14 billion years old, and, wow! Life had
                no problem starting here on Earth! I think it would be
                inexcusably egocentric of us to suggest that alone in the
                universe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-5 bg-image-full">
        {/* <div style="height: 20rem"></div> */}
        <div></div>
      </div>

      <section className="py-5">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2>Engaging Background Images</h2>
              <p className="lead">
                The background images used in this template are sourced from
                Unsplash and are open source and free to use.
              </p>
              <p className="mb-0">
                I can tell you how many people say they were turned off from
                science because of a science teacher that completely sucked out
                all the inspiration and enthusiasm they had for the course.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; March 2023
          </p>
        </div>
      </footer>
      <style jsx>
        {`
          header {
            background-image: url(${backgroundUrl});
            height: 40vh;
            margin-bottom: 10px;
          }
        `}
      </style>
    </>
  ) : (
    <>Page Loading...</>
  );
}
