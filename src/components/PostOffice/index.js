import {Component} from 'react'

import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: 'slick-dots',
}

class PostOffice extends Component {
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

              <h1 className="investment-name">Post Office</h1>
            </button>
            {onButtonClicked ? (
              <>
                <p className="investment-content">
                  Post office is one of the oldest organizations in India which
                  started way back during the British era in Oct 1854, initially
                  focusing only on delivering mail (post) and later started
                  providing an array of other financial services i.e., Banking,
                  Insurance & Investments. The biggest advantage of these
                  schemes is their sovereign guarantee i.e., it is backed by the
                  government. Some of the post office savings schemes also offer
                  tax-savings benefits U/S 80C of the Income Tax Act. Below are
                  list of such schemes with their applicable Interest rates{' '}
                  <br />
                  <b>
                    Below are list of such schemes with their applicable
                    Interest rates
                  </b>
                </p>
                <div className="slider-container">
                  <Slider {...settings}>
                    <div>
                      <h3>Scheme : Post Office Savings Account</h3>
                      <h4>Interest Rate : 4%</h4>
                      <h4>Minimum Investment (Rs) : 500</h4>
                      <h4>Maximum Investment : No Limit</h4>
                      <h4>Eligibility : Individuals including Minors</h4>
                      <h4>
                        Tax Implications : Exempted Interest up to ₹10,000
                      </h4>
                    </div>
                    <div>
                      <h3>
                        Scheme : National Savings Recurring Deposit Account
                      </h3>
                      <h4>Interest Rate :5.80%</h4>
                      <h4>
                        Minimum Investment (Rs) : 100 per month in multiples of
                        10
                      </h4>
                      <h4>Maximum Investment : No Limit</h4>
                      <h4>Eligibility : Individuals including Minors</h4>
                      <h4>Tax Implications : NA</h4>
                    </div>
                    <div>
                      <h3>Scheme : National Savings Time Deposit Account</h3>
                      <h4>Interest Rate :5.5% – 6.7%</h4>
                      <h4>
                        Minimum Investment (Rs) : 1,000 and multiples of 100
                      </h4>
                      <h4>Maximum Investment : No Limit</h4>
                      <h4>Eligibility : Individuals including minors</h4>
                      <h4>
                        Tax Implications : Section 80C deduction on deposits for
                        5 Years
                      </h4>
                    </div>
                    <div>
                      <h3>Scheme : Senior Citizen Savings Scheme Account</h3>
                      <h4>Interest Rate :8.2% p.a. (Compounded Annually)</h4>
                      <h4>Minimum Investment (Rs) : 1,000</h4>
                      <h4>Maximum Investment : Max Rs 15 lakh</h4>
                      <h4>
                        Eligibility : Persons more than 60 years of age and
                        above 50 years of age who have taken VRS or
                        superannuation.
                      </h4>
                      <h4>
                        Tax Implications : There are tax benefits on scheme
                        deposits as per Sec 80 C TDS is deducted if the interest
                        earned is more than Rs 50,000 Interest taxable if more
                        than Rs 50,000
                      </h4>
                    </div>
                    <div>
                      <h3>Scheme : Kisan Vikas Patra Account</h3>
                      <h4>Interest Rate :7.5% p.a. (Compounded Annually)</h4>
                      <h4>Minimum Investment (Rs) : 1,000</h4>
                      <h4>Maximum Investment : No Limit</h4>
                      <h4>Eligibility : Individual and minors</h4>
                      <h4>
                        Tax Implications : The interest is taxed, but the amount
                        received upon maturity is tax-free
                      </h4>
                    </div>
                    <div>
                      <h3>Scheme : Sukanya Samriddhi Account</h3>
                      <h4>Interest Rate :8.0% p.a. (Compounded Annually)</h4>
                      <h4>Minimum Investment (Rs) : 250</h4>
                      <h4>
                        Maximum Investment : Max 1.5 lakh per financial year
                      </h4>
                      <h4>
                        Eligibility : Girl child below the age of 10 is
                        eligible. To be opened in the name of the girl child by
                        the guardian
                      </h4>
                      <h4>Tax Implications : NA</h4>
                    </div>
                  </Slider>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default PostOffice
