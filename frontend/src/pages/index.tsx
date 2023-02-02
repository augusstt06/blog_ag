import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/reducers/rootReducer";
import { useCallback } from "react";
import { countUp, countDown } from "@/store/reducers/counter";
// 필요 라이브러리 설치하기 (redux 등)
// 환경변수 설정하기

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.counterReducer);

  const upEvent = useCallback(() => {
    dispatch(countUp());
  }, []);

  const downEvent = useCallback(() => {
    dispatch(countDown());
  }, []);
  return (
    <>
      <div>
        <div>리듀서 테스트</div>
        <div>밸류 : {value}</div>
        <button onClick={upEvent}>업</button>
        <button onClick={downEvent}>다운</button>
      </div>
      ;
    </>
  );
}
