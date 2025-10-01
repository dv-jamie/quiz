import { STATUS } from "../App"

function HomePage({ setStatus }) {
    return (
      <>
        <img className="home-img" src="https://cnqnq6x1162u.objectstorage.ap-seoul-1.oci.customer-oci.com/p/4d_DJXYmI0ejd8avuhAILIIpyZqnmHvpQPxB3i9g9MKd65-abwpaD-tq-jraNd1k/n/cnqnq6x1162u/b/machugi-image/o/10a55649-c501-450b-a958-3a6576e79f10.jpeg" alt="메인 이미지" />
        
        <div className="title-wrap">
            <h1 className="home-title">애니 주인공 맞추기</h1>
            <p className="home-sub-title">유명 애니메이션의 주인공 이름을 맞춰보세요</p>
        </div>

        <button className="go-quiz-button" onClick={() => setStatus(STATUS.quiz)}>퀴즈 풀기</button>
      </>
    )
}
  
export default HomePage