import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/reducers/rootReducer";
import { useCallback } from "react";
import { countUp, countDown } from "@/store/reducers/counter";
// 필요 라이브러리 설치하기 (redux 등)
// 환경변수 설정하기
// 메인 화면은 심플한 페이지네임이랑 애니메이션으로 구성하고

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
      <div className="home">
        <div>리듀서 테스트</div>
        <div>밸류 : {value}</div>
        <button onClick={upEvent}>업</button>
        <button onClick={downEvent}>다운</button>
      </div>
      ;
    </>
  );
}
