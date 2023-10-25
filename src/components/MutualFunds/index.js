import {Component} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import './index.css'

class MutualFunds extends Component {
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

              <h1 className="investment-name">Mutual Funds</h1>
            </button>
            {onButtonClicked ? (
              <>
                <p className="investment-content">
                  Mutual funds are investment tools managed by fund managers,
                  which pool people's money and invest in stocks and bonds of
                  different companies to yield returns. You can earn generous
                  returns even when starting with a smaller initial deposit
                  amount.
                  <br /> <br />
                  There are mainly two different types of Mutual Funds,
                  <ol>
                    <li>Active Funds</li>
                    <li>Passive Funds</li>
                  </ol>
                  <b>Active Funds:</b> <br />
                  In an Active Fund, the Fund Manager is ‘Active’ in deciding
                  whether to Buy, Hold, or Sell the underlying securities and in
                  stock selection. Active funds adopt different strategies and
                  styles to create and manage the portfolio.
                  <ul>
                    <li>
                      The investment strategy and style are described upfront in
                      the Scheme Information document (offer document)
                    </li>
                    <li>
                      Active funds expect to generate better returns (alpha)
                      than the benchmark index.
                    </li>
                    <li>
                      The risk and return in the fund will depend upon the
                      strategy adopted.
                    </li>
                    <li>
                      Active funds implement strategies to ‘select’ the stocks
                      for the portfolio
                    </li>
                  </ul>
                  <b>Passive Funds:</b> <br />
                  Passive Funds hold a portfolio that replicates a stated Index
                  or Benchmark eg, Index Funds, ETF's
                  <br />
                  In a Passive Fund, the fund manager has a passive role, as the
                  stock selection / Buy, Hold, Sell decision is driven by the
                  Benchmark Index and the fund manager / dealer merely needs to
                  replicate the same with minimal tracking error.
                  <br /> <br />
                  <b>
                    <u>
                      We recommend to go with Passive funds, beacuse fund
                      manager can be able to invest only in index companies, so
                      that risk will be very low and returns will be as per the
                      market. If you want to go with passive funds, then risk
                      will be high and rewards will be high. There may be some
                      cases where companies in which the fund manager has
                      invested may go bankrupted. This is not the case in
                      passive funds. We will be getting consistent returns with
                      low risk.
                    </u>
                  </b>
                  <br /> <br />
                  Below are the top Mutual funds in last ten years, <br />
                  <table border="1">
                    <tr>
                      <th>Fund Name</th>
                      <th>Returns</th>
                    </tr>
                    <tr>
                      <td>Motilal Oswal</td>
                      <td>13.08%</td>
                    </tr>
                    <tr>
                      <td>Nippon India Large Cap</td>
                      <td>11.59%</td>
                    </tr>
                    <tr>
                      <td>HDFC Banking & PSU Debt Fund</td>
                      <td>7.61%</td>
                    </tr>
                    <tr>
                      <td>Aditya Birla Sun Life Corporate Bond</td>
                      <td>8.09%</td>
                    </tr>
                  </table>
                </p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default MutualFunds
