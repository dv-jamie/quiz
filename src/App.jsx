import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'

export const STATUS = {
  home: "HOME",
  quiz: "QUIZ",
  result: "RESULT"
}

function App() {
  const [status, setStatus] = useState(STATUS.home) // 초기값: "HOME"
  const [score, setScore] = useState(0) // 점수 초기값: 0
  
  return (
    <>
      {status === STATUS.home && <HomePage setStatus={setStatus} />}
      {status === STATUS.quiz && <QuizPage setStatus={setStatus} setScore={setScore} />}
      {status === STATUS.result && <ResultPage setStatus={setStatus} score={score} />}
    </>
  )
}

export default App
