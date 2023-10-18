import {Component} from 'react'
import {Chrono} from 'react-chrono'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import './index.css'

const equityReturns = [
  {
    title: '2012',
    cardTitle: 'Year : 2012',
    cardSubtitle: 'Awesome, huge returns',
    cardDetailedText: 'Returns : 27.70%',
  },
  {
    title: '2013',
    cardTitle: 'Year : 2013',
    cardSubtitle: 'Satisfied, with average returns',
    cardDetailedText: 'Returns : 6.76%',
  },
  {
    title: '2014',
    cardTitle: 'Year : 2014',
    cardSubtitle: 'Wow, unexpected huge returns',
    cardDetailedText: 'Returns : -31.39%',
  },
  {
    title: '2015',
    cardTitle: 'Year : 2015',
    cardSubtitle: 'Negative returns, but in profit with previous returns',
    cardDetailedText: 'Returns : -4.06%',
  },
  {
    title: '2016',
    cardTitle: 'Year : 2016',
    cardSubtitle:
      'Recovered something from previous year loss. Yet to get some more,',
    cardDetailedText: 'Returns : 3.01%',
  },
  {
    title: '2017',
    cardTitle: 'Year : 2017',
    cardSubtitle: 'Huge returns, paid for my patience',
    cardDetailedText: 'Returns : 28.65%',
  },
  {
    title: '2018',
    cardTitle: 'Year : 2018',
    cardSubtitle: 'Decent returns',
    cardDetailedText: 'Returns : 3.15%',
  },
  {
    title: '2019',
    cardTitle: 'Year : 2019',
    cardSubtitle: 'Nice returns beating inflation',
    cardDetailedText: 'Returns : 12.02%',
  },
  {
    title: '2020',
    cardTitle: 'Year : 2020',
    cardSubtitle: 'Nice returns beating inflation',
    cardDetailedText: 'Returns : -14.90%',
  },
  {
    title: '2021',
    cardTitle: 'Year : 2021',
    cardSubtitle: 'Great returns for my capital',
    cardDetailedText: 'Returns : 24.12%',
  },
  {
    title: '2022',
    cardTitle: 'Year : 2022',
    cardSubtitle: 'Not negative, but positive returns',
    cardDetailedText: 'Returns : 4.32%',
  },
]

class Equity extends Component {
  state = {
    onButtonClicked: false,
  }

  onInvestmentClicked = () =>
    this.setState(prevState => ({onButtonClicked: !prevState.onButtonClicked}))

  render() {
    const {onButtonClicked} = this.state

    return (
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

            <h1 className="investment-name">Equity</h1>
          </button>
          {onButtonClicked ? (
            <div>
              <p className="investment-content">
                Equity represent a share of ownership in a company or an entity.
                Stocks are one of the best investment avenues for long-term
                investors to earn generous returns. However, since these
                market-linked instruments, there is always the risk of capital
                loss.
              </p>
              <h1 className="investment-content">Features of Direct Equity:</h1>
              <ul>
                <li>
                  In legal terms, the investor is buying the ownership of a
                  company in proportion to the stocks.
                </li>
                <li>
                  To invest in a direct equity fund, the investors need a Demat
                  account
                </li>
                <li>
                  Investing in the direct equity of a growing company has a
                  greater long-term reward.
                </li>
                <li>
                  Consider factors like picking the right stock and deciding the
                  right timing of your entry and exit in the market
                </li>
                <li>Analyze risks and returns</li>
              </ul>
              <div className="chrono-container">
                <Chrono items={equityReturns} />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}
export default Equity
