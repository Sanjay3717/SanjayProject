import {Component} from 'react'
import './index.css'

const advisors = [
  {
    name: 'Anand Srinivasan',
    channel: 'Money Pechu',
    youtubeLink: 'https://www.youtube.com/@MoneyPechu',
    profilePic:
      'https://res.cloudinary.com/dzy3vcadj/image/upload/v1698566409/Anand_w4pnpz.jpg',
  },
  {
    name: 'Sharan',
    channel: 'Finance with Sharan',
    youtubeLink: 'https://www.youtube.com/@financewithsharan',
    profilePic:
      'https://res.cloudinary.com/dzy3vcadj/image/upload/v1698566493/Sharan_ms00vh.jpg',
  },
  {
    name: 'Harish',
    channel: 'Finance with Harish',
    youtubeLink: 'https://www.youtube.com/@financewithharish',
    profilePic:
      'https://res.cloudinary.com/dzy3vcadj/image/upload/v1698591386/Harish_hwix0n.jpg',
  },
  {
    name: 'Venkateswaran',
    channel: 'Finance with Harish',
    youtubeLink: 'https://www.youtube.com/@corporatechronicletamil',
    profilePic:
      'https://res.cloudinary.com/dzy3vcadj/image/upload/v1698592134/Venkateswaran_hmrzo7.jpg',
  },
  {
    name: 'Aravind Suriya',
    channel: 'Aravind Kasu',
    youtubeLink: 'https://www.youtube.com/@aravindkaasu',
    profilePic:
      'https://res.cloudinary.com/dzy3vcadj/image/upload/v1698592496/Aravind_lxxsre.jpg',
  },
  {
    name: 'Mano Venkatesh',
    channel: 'Podapunny.Finance',
    youtubeLink: 'https://www.youtube.com/@podapunny.finance3669',
    profilePic:
      'https://res.cloudinary.com/dzy3vcadj/image/upload/v1698593203/Mano_ajobv1.jpg',
  },
]

class FinancialAdvisors extends Component {
  render() {
    return (
      <div>
        <h1 className="advisor-main-title">Popular Investment advisors</h1>
        <ul className="advisor-list">
          {advisors.map(each => (
            <a href={each.youtubeLink} rel="noreferrer" target="_blank">
              <button className="advisor-details">
                <img src={each.profilePic} className="advisor-profile-pic" />
                <li className="advisor-name">{each.name}</li>
              </button>
            </a>
          ))}
        </ul>
      </div>
    )
  }
}
export default FinancialAdvisors
