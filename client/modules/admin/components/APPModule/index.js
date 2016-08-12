import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import style from './style.scss';

export default class APPModule extends React.Component{
	constructor(props){
		super()
	}

	render(){
		return (
			<div>
				<Navbar />
				<Sidebar />
				<div className={style.content}>
					{this.props.children}
				</div>
			</div>
		)
	}
}