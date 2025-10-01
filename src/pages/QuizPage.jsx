import { useEffect, useState } from "react"
import { STATUS } from "../App"
import questions from "../questions.json"

function QuizPage({ setStatus, setScore }) {
    const [index, setIndex] = useState(0) // 현재 문제 인덱스 -> 초기값: 0
    const [inputValue, setInputValue] = useState("") // 사용자 입력값
    const [isAnswerMode, setIsAnserMode] = useState(false) // 문제/정답 모드

    // 퀴즈페이지 로딩 시에 최초 1번만 실행
    useEffect(() => {
        // 점수를 0으로 초기화
        setScore(0)
    }, [])

    const checkAnswer = () => {
        // 정답일 경우(사용자 입력값 === 데이터베이스에 있는 값)
        if (inputValue === questions[index].answer) {
            // 기존 점수 + 1
            setScore(prev => prev + 1)
        }
        
        setIsAnserMode(true) // 정답 모드로 전환
        setInputValue("")
    }

    const goNextQuiz = () => {
        if (index >= questions.length - 1) {
            // 문제 끝났을 때는 resultPage로 출력
            setStatus(STATUS.result)
        } else {
            // 문제 진행중일 때는 index + 1
            setIndex(index + 1)
        }

        setIsAnserMode(false) // 문제 모드 전환
    }

    return (
      <>
        {/* 조건식 ? (참일 때) : (거짓일 때) */}
        {  isAnswerMode ? (
            // 정답 모드
            <>
                <img className="question-img" src={questions[index].imgSrc} alt="문제 이미지" />
                <h2 className="quiz-title"><span>정답: </span>{questions[index].answer}</h2>

                <div className="quiz-input-wrap">
                    <button className="solid-button" onClick={goNextQuiz}>다음 문제</button>
                </div>
            </>
        ) : (
            // 문제 모드
            <>
                <img className="question-img" src={questions[index].imgSrc} alt="문제 이미지" />
                <h2 className="quiz-title">{questions[index].question}</h2>

                <div className="quiz-input-wrap">
                    <input className="quiz-input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button className="solid-button" onClick={checkAnswer}>확인</button>
                </div>
            </>
        )
        }
      </>
    )
  }
  
  export default QuizPage