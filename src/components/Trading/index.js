import {Component} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import './index.css'

class Trading extends Component {
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

              <h1 className="investment-name">Trading</h1>
            </button>
            {onButtonClicked ? (
              <>
                <p className="investment-content">
                  Trading is the buying and selling of securities, such as
                  stocks, bonds, currencies and commodities, as opposed to
                  investing, which suggests a buy-and-hold strategy. Trading
                  success depends on a trader's ability to be profitable over
                  time.
                  <b>
                    Without proper learning and skills this is highly risky.
                  </b>
                </p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default Trading
