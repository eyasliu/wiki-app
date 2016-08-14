import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon } from 'antd';
import Draggable from 'react-draggable'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

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
      wrapperCol: { span: 14 },
    };
		return (
			<div>
				<Draggable
	        axis="x"
	        handle=".handle"
	        defaultPosition={{x: 0, y: 0}}
	        position={null}
	        grid={[25, 25]}
	        zIndex={100}>
	        <div>
	          <div className="handle">Drag from here</div>
	          <div>This readme is really dragging on...</div>
	        </div>
	      </Draggable>
			</div>
		)
	}
}

export default Form.create()(Content)