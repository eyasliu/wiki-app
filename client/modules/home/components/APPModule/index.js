
import Navbar from '../common/Navbar';

export default class APPModule extends React.Component{
	constructor(props){
		super()
	}

	render(){
		return (
			<div>
				<Navbar />
				{this.props.children}
				
			</div>
		)
	}
}