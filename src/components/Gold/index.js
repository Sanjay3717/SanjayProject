import {Component} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import './index.css'

class Gold extends Component {
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

              <h1 className="investment-name">Gold</h1>
            </button>
            {onButtonClicked ? (
              <>
                <p className="investment-content">
                  Investing in gold is the primary investment method which is
                  followed from Ancient times. We have seen the gold returns
                  from the day when we started to hear the news. Consider that
                  in 90’s 8 Grams of Gold cost Rs. 3000, now the same 8 grams of
                  gold cost nearly Rs. 45000. If Gold is added to our portfolio,
                  then it will always give us huge positive returns for long
                  term. The only difficulty in gold investment is safety. Need
                  to keep it safe.
                </p>
                <b>
                  It is recommended atleast to have 400 grams of gold for a
                  family. We can use gold to get loans from bank in case of any
                  emergency.
                </b>
              </>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default Gold
