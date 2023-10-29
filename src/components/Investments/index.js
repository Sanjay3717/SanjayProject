import {Component} from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import Header from '../Header'
import FixedDeposit from '../FixedDeposit'
import PostOffice from '../PostOffice'
import Equity from '../Equity'
import Trading from '../Trading'
import MutualFunds from '../MutualFunds'
import Gold from '../Gold'
import RealEstate from '../RealEstate'
import Insurance from '../Insurance'
import SGB from '../SGB'
import SIP from '../SIP'
import FinancialAdvisors from '../FinancialAdvisors'

class Investments extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                Click here for important notification
              </button>
            }
          >
            {close => (
              <>
                <div>
                  <p>
                    Investments are subjected to market risk. Please make your
                    own research or please take advice from your financial
                    advisor before investing. WeSell is not responsible for any
                    of your financial losses or gains.
                  </p>
                </div>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  Close
                </button>
              </>
            )}
          </Popup>
        </div>
        <FixedDeposit />
        <PostOffice />
        <Equity />
        <Trading />
        <MutualFunds />
        <Gold />
        <RealEstate />
        <Insurance />
        <SGB />
        <SIP />
        <FinancialAdvisors />
      </div>
    )
  }
}

export default Investments
