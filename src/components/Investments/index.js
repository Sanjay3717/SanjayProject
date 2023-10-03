import {Component} from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import Header from '../Header'

import './index.css'

const fdBarChartData = [
  {
    bank: 'SBI',
    minimum: 3,
    maximum: 6.5,
    tenure: '7 days to 10 years',
  },
  {
    bank: 'Canara bank',
    minimum: 4,
    maximum: 6.7,
    tenure: '7 days to 10 years',
  },
  {
    bank: 'HDFC',
    minimum: 3,
    maximum: 7,
    tenure: '7 days to 10 years',
  },
  {
    bank: 'ICICI Bank',
    minimum: 3,
    maximum: 6.9,
    tenure: '7 days to 10 years',
  },
  {
    bank: 'Axis Bank',
    minimum: 3.5,
    maximum: 7,
    tenure: '7 days to 10 years',
  },
  {
    bank: 'IDFC First Bank',
    minimum: 3.5,
    maximum: 7,
    tenure: '7 days to 10 years',
  },
]

class Investments extends Component {
  state = {
    onButtonClicked: false,
  }

  onInvestmentClicked = () =>
    this.setState(prevState => ({onButtonClicked: !prevState.onButtonClicked}))

  render() {
    const {onButtonClicked} = this.state
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

              <h1 className="investment-name">Fixed Deposit</h1>
            </button>
            {onButtonClicked ? (
              <>
                <p className="investment-content">
                  Fixed Deposit is ideal investment tool fpr risk-averse
                  investors. An FD bears no effect of the market movements while
                  offering secured returns on your deposit. Even investors with
                  high risk appetites choose to invest in FD to stabilize their
                  portfolios.
                </p>

                <ul className="investment-content">
                  <li>Online process to open, maintain, and renew policy</li>
                  <li>
                    Profits payable on monthly, quarterly, half-yearly, or
                    yearly basis
                  </li>
                  <li>Offers overdraft facility against FDs</li>
                  <li> Market fluctuations do not affect fixed deposit</li>
                  <li> Offers guaranteed returns during the tenure</li>
                  <li> Tenures options: from 7 days to up to 10 years</li>
                  <li>
                    Additional rates of 0.25-0.75% p.a. to senior citizens
                  </li>
                </ul>
                <ResponsiveContainer width="100%" height={500}>
                  <BarChart
                    data={fdBarChartData}
                    margin={{
                      top: 5,
                    }}
                  >
                    <XAxis
                      dataKey="bank"
                      tick={{
                        stroke: 'gray',
                        strokeWidth: 1,
                      }}
                    />
                    <YAxis
                      tick={{
                        stroke: 'gray',
                        strokeWidth: 0,
                      }}
                    />
                    <Legend
                      wrapperStyle={{
                        padding: 30,
                      }}
                    />
                    <Bar
                      dataKey="minimum"
                      name="Mimimum returns (%)"
                      fill="#fd7f0e"
                      barSize="20%"
                    />
                    <Bar
                      dataKey="maximum"
                      name="Maximum returns (%)"
                      fill="#1f77b4"
                      barSize="20%"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default Investments
