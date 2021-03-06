import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon } from 'antd';
// import Draggable from 'react-draggable'
import {DragSource, DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import style from './style.scss';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

// const Item = props => (
// 	<Draggable
// 	  axis="x"
// 	  handle={'.' + style.dragarea}
// 	  defaultPosition={{x: 0, y: 0}}
// 	  position={null}
// 	  grid={[45, 45]}
// 	  zIndex={100}>
// 	  <div className={style.dragitem}>
// 		  <div className={style.dragarea}><i className="fa fa-arrows"></i></div>
// 		  <div className={style.title}>
// 		  	<span>
// 		  		这就是传说中的标题
// 		  	</span>
// 		  	<i className="fa fa-edit"></i>
// 		  	<i className="fa fa-eye"></i>
// 		  </div>
// 		</div>
// 	</Draggable>

// )

const cardSource = {
  beginDrag(props) {
    return {
      text: props.text
    };
  }
};


@DragSource('Item', cardSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
class Item extends Component{
	constructor(props){
		super()
	}

	static propTypes = {
		// text: PropTypes.string.isRequired,
		connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
	}

	render(){
		const { isDragging, connectDragSource, text } = this.props;
		return connectDragSource(
			<div style={{ opacity: isDragging ? 0.5 : 1 }}>
        <div className={style.dragitem}>
				  <div className={style.dragarea}><i className="fa fa-arrows"></i></div>
				  <div className={style.title}>
				  	<span>
				  		这就是传说中的标题
				  	</span>
				  	<i className="fa fa-edit"></i>
				  	<i className="fa fa-eye"></i>
				  </div>
				</div>
      </div>
		)
	}
}

@DragDropContext(HTML5Backend)
class Content extends Component{
	constructor(props){
		super();
	}
	handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  }
	render(){
		const { getFieldProps } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
		return (
			<div>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
			</div>
		)
	}
}

export default Form.create()(Content)