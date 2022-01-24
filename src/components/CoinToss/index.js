// Write your code here

import {Component} from 'react'
import './index.css'

const HEAD_IMAGE_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAIL_IMAGE_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEAD_IMAGE_URL,
    headCount: 0,
    tailCount: 0,
  }

  onTossCoin = () => {
    const {headCount, tailCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    console.log(toss)
    let tossImage = ''
    let latestHeadCount = headCount
    let latestTailCount = tailCount

    if (toss === 0) {
      tossImage = HEAD_IMAGE_URL
      latestHeadCount += 1
    } else {
      tossImage = TAIL_IMAGE_URL
      latestTailCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headCount: latestHeadCount,
      tailCount: latestTailCount,
    })
  }

  render() {
    const {headCount, tailCount, tossResultImage} = this.state
    const totalCount = headCount + tailCount

    return (
      <div className="app-container">
        <div className="app-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>

          <img
            alt="toss result"
            className="head-image "
            src={tossResultImage}
          />
          <button
            className="toss-button"
            type="button"
            onClick={this.onTossCoin}
          >
            Toss Coin
          </button>
          <div className="results-card">
            <p className="result">Total: {totalCount}</p>
            <p className="result">Heads: {headCount}</p>
            <p className="result">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
