import {Component} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import './index.css'

class RealEstate extends Component {
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

              <h1 className="investment-name">Real Estate</h1>
            </button>
            {onButtonClicked ? (
              <>
                <p className="investment-content">
                  Real estate is one of the fastest-growing sectors in India,
                  which holds excellent prospects. Buying a flat or plot is one
                  of the best tools among India's many investment options. As
                  the property rate is likely to increase every six months, the
                  risk is low and real estate works as an asset that offers high
                  returns over a long-term period.
                </p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default RealEstate
