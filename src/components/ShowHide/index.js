// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}
  onClickFirstName = () => {
    this.setState(prevSate => ({firstName: !prevSate.firstName}))
  }
  onClickLastName = () => {
    this.setState(prevSate => ({lastName: !prevSate.lastName}))
  }

  render() {
    const {lastName, firstName} = this.state
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="show-hide-container">
          <div className="show-hide-sub-container">
            <button className="showhide-btn" onClick={this.onClickFirstName}>
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="show-hide-sub-container">
            <button className="showhide-btn" onClick={this.onClickLastName}>
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
