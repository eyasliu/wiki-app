import {Tag} from 'antd';
import style from './style.scss';

export default class List extends Component {
	constructor(props){
		super();
	}
	onClose(){

	}
	render(){
		return (
			<div className={style.list}>
				<Tag closable><span title="点击编辑">标签一</span></Tag>
				<Tag closable><span title="点击编辑">标签二</span></Tag>
				<Tag closable><span title="点击编辑">标签三</span></Tag>
			  <Tag closable>标签四</Tag>
			</div>
		)
	}
}