import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Add extends Component{
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
				<Form horizontal onSubmit={::this.handleSubmit}>
	        <FormItem
	          {...formItemLayout}
	          label="名称"
	        >
	          <Input type="text" placeholder="" {...getFieldProps('name', { initialValue: this.props.name||'' })} />
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="描述"
	        >
	          <Input type="textarea" {...getFieldProps('descript', { initialValue: '' })} placeholder="" />
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="是否显示"
	        >
	          <Checkbox checked={true} {...getFieldProps('show')}></Checkbox>
	        </FormItem>
	        <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
	          <Button type="primary" htmlType="submit">确定</Button>
	        </FormItem>
	      </Form>
			</div>
		)
	}
}

export default Form.create()(Add)