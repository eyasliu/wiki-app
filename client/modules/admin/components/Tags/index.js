import { Row, Col } from 'antd';
import List from './List';
import Edit from './Edit';

export default class Tags extends Component {
	constructor(props){
		super();
	}
	onClose(){

	}
	render(){
		return (
			<div>
				<Row gutter={12}>
					<Col span={15}>
						<List></List>
					</Col>
					<Col span={9}>
						<Edit></Edit>
					</Col>
				</Row>
			</div>
		)
	}
}