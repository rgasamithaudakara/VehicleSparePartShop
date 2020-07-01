import React, { Component } from 'react'
import styles from './stylesheets/header.module.sass'
import UserHeader from './components/UserHeader'
import Menu from './components/Menu'
import Search from './components/Search'
import jumpTo,{go} from '../../modules/Navigation'
import Auth from '../../modules/Auth'
import device, { size } from '../../modules/mediaQuery'
import MediaQuery from 'react-responsive'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      isToggle: false
    }
  }
  handleChange = (v) => {
    this.setState({
      input: v
    })
  }
  handleSuggest = (v) => {
    this.setState({
      input: v
    })
  }
  handleToggle = () => {
    this.setState(prevState => {
      return {
        isToggle: !prevState.isToggle
      }
    })
  }
  closeToggle = () => {
    this.setState({
      isToggle: false
    })
  }
  render() {
    const { user_token,
      departments,
      search,
      getProductsByCategory,
      getAllProducts } = this.props
    let visibility = "hide"
    if (this.state.isToggle) {
      visibility = "show"
    }
    return (
      <div className="row">
        {/* larger than 768px */}
        <MediaQuery query={device.min.tablet}>
          {/* top user header */}
          <div className={styles.user_header}>
            <UserHeader
              user_token={user_token}
            />
          </div>
        
        </MediaQuery>
      </div >
    )
  }
}



