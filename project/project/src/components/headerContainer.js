import {connect} from 'react-redux'
import Header from './Header'
import {getDepartments} from './departmentAction'
import {getProductsByCategory,getAllProducts,search} from './productAction'


const mapStoreToProps=state=>({
  user_token:state.token.user_token,
  departments:state.department.departments,
})

const mapDispatchToProps=dispatch=>({
  getDepartments:dispatch(getDepartments()),
  search:(t)=>dispatch(search(t)),
  getProductsByCategory:(c)=>dispatch(getProductsByCategory(c)),
  getAllProducts:()=>dispatch(getAllProducts())
})

export default connect(mapStoreToProps,mapDispatchToProps)(Header)