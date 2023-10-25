import {Component} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import './index.css'

class Insurance extends Component {
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

              <h1 className="investment-name">Insurance</h1>
            </button>
            {onButtonClicked ? (
              <>
                <p className="investment-content">
                  Insurance Investments means investments by an Insurance
                  Subsidiary or any Subsidiary of an Insurance Subsidiary for
                  investment portfolio in the ordinary course of business (other
                  than any of its Investments in Subsidiaries engaged in its
                  lines of business) consistent with the policies and procedures
                  approved by the board of directors or the investment committee
                  (or other applicable committee) of such Insurance Subsidiaryor
                  any Subsidiary of an Insurance Subsidiary or otherwise
                  consistent with Investment guidelines specifically approved by
                  the applicable Department for such Insurance Subsidiary.
                  <br />
                  “Insurance Subsidiary” means each Subsidiary of the Borrower
                  identified as an Insurance Subsidiary (including Subsidiaries
                  of such Subsidiary) on Schedule 5.14 and each other Subsidiary
                  (including Subsidiaries of such Subsidiary) from time to time
                  in the insurance business as certified by the Borrower in
                  writing to the Administrative Agent. “Interest Payment Date”
                  means, (a) as to any Loan other than a Base Rate Loan, the
                  last day of each Interest Period applicable to such Loan and
                  the Maturity Date; provided, however, that if any Interest
                  Period for a Term SOFR Loan exceeds three months, the
                  respective dates that fall every three months after the
                  beginning of such Interest Period shall also be Interest
                  Payment Dates; and (b) as to any Base Rate Loan (including a
                  Swing Line Loan), the last Business Day of each March, June,
                  September and December and the Maturity Date.“Interest Period”
                  means as to each Term SOFR Loan, the period commencing on the
                  date such Term SOFR Loan is disbursed or converted to or
                  continued as a Term SOFR Loan and ending on the date one,
                  three or six months thereafter, as selected by the Borrower in
                  its Revolving Loan Notice, or such other period as agreed by
                  the Borrower and all applicable Lenders and the Administrative
                  Agent; provided that: (i) any Interest Period that would
                  otherwise end on a day that is not a Business Day shall be
                  extended to the next succeeding Business Day unless, in the
                  case of a Term SOFR Loan, such Business Day falls in another
                  calendar month, in which case such Interest Period shall end
                  on the next preceding Business Day; (ii) any Interest Period
                  pertaining to a Term SOFR Loan that begins on the last
                  Business Day of a calendar month (or on a day for which there
                  is no numerically corresponding day in the calendar month at
                  the end of such Interest Period) shall end on the last
                  Business Day of the calendar month.
                </p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default Insurance
