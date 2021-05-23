import { Component } from 'react'
import FullName from './Component/Profile/FullName'
import ProfilePhoto from './Component/Profile/ProfilePhoto'
import Address from './Component/Profile/Address'
import './style.css'
class App extends Component{
  
  
  render(){
  return(
    <div className="container" >
     <ProfilePhoto/>
     <FullName/>
     <Address/>
    </div>

  )
  }
}
export default App
