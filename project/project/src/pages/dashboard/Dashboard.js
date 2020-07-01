import React, { Component } from 'react'
import HeaderContainer from '../../components/header/headerContainer'
import Product from './components/Product'
import LoadingAnimation from '../../components/loadingAnimation'
import Filter from './components/Filter'
import styles from './stylesheets/dashboard.module.sass'


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (!this.props.products) {
      this.props.getAllProducts()
    }
  }
  render() {
    const { products, applyFilters } = this.props
    return (
      <div className={styles.outbox}>
        {/* Header */}
        <HeaderContainer />
        
      </div>

    )
  }
}





