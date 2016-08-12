import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

export default class APPModule extends React.Component{
	constructor(props){
		super()
	}

	render(){
		return (
			<div>
				<Navbar />
				<Sidebar />
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
}