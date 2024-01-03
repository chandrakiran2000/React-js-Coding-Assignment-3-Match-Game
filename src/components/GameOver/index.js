import './index.css'

const GameOver = props => {
  const {score, handleResetBtn} = props
  const handleBtn = () => {
    handleResetBtn()
  }

  return (
    <div className="game-over">
      <div className="game-card">
        <img
          className="trophy-img"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <p className="your-score-text">YOUR SCORE</p>
        <h2 className="score-count">{score}</h2>
        <button className="play-again-btn" onClick={handleBtn} type="button">
          <img
            className="play-again-img"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default GameOver
