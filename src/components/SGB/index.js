import {Component} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import './index.css'

class SGB extends Component {
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

              <h1 className="investment-name">Sovereign gold bonds</h1>
            </button>
            {onButtonClicked ? (
              <>
                <p className="investment-content">
                  Sovereign gold bonds are government securities denominated in
                  grams of gold. Reserve Bank of India issues the bond on behalf
                  of the Government of India as a substitute for holding
                  physical gold. Investors have to pay the issue price in cash,
                  and one can redeem the bonds in cash on maturity <br />
                  <br />
                  Normally there would be 8 years lockin period and investors
                  will be getting 2.5% as divident money from RBI. There are no
                  taxes for Sovereign gold bonds during maturity. If investor
                  needs to come out before maturity then they need to pay taxes.
                  <br />
                  <br />
                  This will be available to invest only twice a year. When the
                  price of gold increases then the value of these bonds will
                  also increase.
                </p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default SGB
