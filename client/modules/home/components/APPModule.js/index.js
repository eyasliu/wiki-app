import Index from '../Index';
import Navbar from '../Navbar';

export default class APPModule extends React.Component{
	constructor(props){}

	render(){
		return (
			<div>
				<Navbar />
				<Index />
			</div>
		)
	}
}