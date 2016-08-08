import Navbar from '../Navbar';
import Splash from '../Splash';
import Main from '../Main';

export default class APPModule extends React.Component{
  render(){
    return (
      <div>
        <Navbar />
        <Splash />
        <Main />
      </div>
    )
  }
}