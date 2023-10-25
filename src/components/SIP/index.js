import {Component} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import './index.css'

class SIP extends Component {
  state = {
    onButtonClicked: false,
  }

  onInvestmentClicked = () =>
    this.setState(prevState => ({onButtonClicked: !prevState.onButtonClicked}))

  render() {
    const {onButtonClicked} = this.state
    return (
      <div>
        <div className="financial-ideas-container">
          <div className="financial-ideas-sub-container">
            <button
              type="button"
              className="invest-option"
              onClick={this.onInvestmentClicked}
            >
              {onButtonClicked ? (
                <AiOutlineMinus className="investment-icon" />
              ) : (
                <AiOutlinePlus className="investment-icon" />
              )}

              <h1 className="investment-name">SIP</h1>
            </button>
            {onButtonClicked ? (
              <>
                <p className="investment-content">
                  A Systematic Investment Plan (SIP) is an investment tool which
                  allows the investor to invest a fixed amount at regular
                  intervals in a Mutual Fund scheme. SIP works by investing a
                  fixed amount at a defined frequency. With this an investor
                  does not need to time the market and can invest in a
                  hassle-free manner.
                </p>
                <b className="end-of-content">
                  We can use this SIP in Equity and Mutual funds.
                </b>
              </>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default SIP
