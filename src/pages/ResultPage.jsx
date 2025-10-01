import { STATUS } from "../App"

function ResultPage({ setStatus, score }) {
    return (
      <>
        <h2 className="result-title"><span>{score}개</span> 맞히셨습니다.</h2>
        <button className="go-home-button" onClick={() => setStatus(STATUS.home)}>홈으로</button>
      </>
    )
  }
  
  export default ResultPage