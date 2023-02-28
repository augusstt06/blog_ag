import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/reducers/rootReducer";
import Image from "next/image";
import kuku from "../asset/kuku.jpg";

// 환경변수 설정하기
// 메인 화면은 심플한 페이지네임이랑 애니메이션으로 구성하고

export default function Home() {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.counterReducer);

  return (
    <>
      <header className="py-5 bg-image-full">
        <div className="text-center my-5">
          <Image
            className="img-fluid rounded-circle mb-4"
            src={kuku}
            alt="쿠크 안뇽"
            width="150"
            height="150"
          />
          <h1 className="text-white fs-3 fw-bolder">Full Width Pics</h1>
          <p className="text-white-50 mb-0">Landing Page Template</p>
        </div>
      </header>

      <section className="py-5">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2>Full Width Backgrounds</h2>
              <p className="lead">
                A single, lightweight helper className allows you to add
                engaging, full width background images to sections of your page.
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
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
      <style jsx>
        {`
          header {
            background-image: url("https://source.unsplash.com/wfh8dDlNFOk/1600x900");
          }
        `}
      </style>
    </>
  );
}
