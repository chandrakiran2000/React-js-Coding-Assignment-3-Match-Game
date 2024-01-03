import {Component} from 'react'
import MatchTabItem from '../MatchTabItem'
import MatchFruits from '../MatchFruits'
import GameOver from '../GameOver'
import './index.css'

class MatchGame extends Component {
  state = {
    isGamePlaying: true,
    activeTabId: 'FRUIT',
    times: 60,
    score: 0,
    ids: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
  }

  componentDidMount() {
    console.log('called')
    this.timerId = setInterval(this.handleTimer, 1000)
  }

  startTimer = () => {
    this.timerId = setInterval(this.handleTimer, 1000)
  }

  handleTimer = () => {
    const {times} = this.state

    if (times === 0) {
      this.setState(prevState => ({
        isGamePlaying: !prevState.isGamePlaying,
      }))
      clearInterval(this.timerId)
    } else {
      this.setState(prevState => ({
        times: prevState.times - 1,
      }))
    }
  }

  handleTabItem = tabId => {
    //  console.log(tabId)
    this.setState({activeTabId: tabId})
  }

  handleThumbnailImgUrl = id => {
    const {ids} = this.state

    const {imagesList} = this.props
    const filterImgList = imagesList.filter(each => each.id !== ids)
    //  console.log(filterImgList)
    const newImgUrlList =
      filterImgList[Math.floor(Math.random() * filterImgList.length)]
    const first = newImgUrlList
    //  console.log(first.id)
    //  this.setState({ids: first.id})

    if (ids === id) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        ids: first.id,
        imageUrl: first.imageUrl,
      }))
    } else {
      this.setState(prevState => ({
        isGamePlaying: !prevState.isGamePlaying,
      }))
      clearInterval(this.timerId)
    }
  }

  handleResetBtn = () => {
    this.setState(prevState => ({
      isGamePlaying: !prevState.isGamePlaying,
      score: 0,
      times: 60,
      ids: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
      activeTabId: 'FRUIT',
    }))
    this.startTimer()
  }

  render() {
    const {isGamePlaying, activeTabId, times, score, imageUrl} = this.state
    const {tabsList, imagesList} = this.props
    const filterTheData = imagesList.filter(
      each => each.category === activeTabId,
    )
    return (
      <div className="bg-card">
        <div className="logo-timer-card">
          <div className="logo-card">
            <img
              className="logo-img"
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
            />
          </div>
          <ul className="timer-score-card">
            <li className="score-card">
              <p className="score-text">score:</p>
              <h1 className="score-count">{score}</h1>
            </li>
            <li className="timer-card">
              <img
                className="timer-img"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p className="timer-count">{times} sec</p>
            </li>
          </ul>
        </div>
        <div className="match-game-win-card">
          {isGamePlaying ? (
            <div className="game-card">
              <div className="question-img-card">
                <img className="question-img" src={imageUrl} alt="match" />
              </div>
              <ul className="tabs-item-card">
                {tabsList.map(each => (
                  <MatchTabItem
                    each={each}
                    activeTabIds={each.tabId === activeTabId}
                    handleTabItem={this.handleTabItem}
                    key={each.tabId}
                  />
                ))}
              </ul>
              <ul className="thumbnail-img-item-card">
                {filterTheData.map(each => (
                  <MatchFruits
                    each={each}
                    handleThumbnailImgUrl={this.handleThumbnailImgUrl}
                    key={each.id}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <GameOver score={score} handleResetBtn={this.handleResetBtn} />
          )}
        </div>
      </div>
    )
  }
}

export default MatchGame
