import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon } from 'antd';
import * as actions from 'admin/actions/books'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

@connect(
	null,
	dispatch => bindActionGroups({act: actions}, dispatch)
)
@Form.create()
export default class Add extends Component{
	constructor(props){
		super();
	}
	handleSubmit(e) {
		var data = this.props.form.getFieldsValue()
		if(this.props.data.id){
			data.id = this.props.data.id
		}
		console.log(data);
    this.props.act.updateOrCreate(data)
    e.preventDefault();
  }
	render(){
		const { getFieldProps } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
    const {data} = this.props;
    
		return (
			<div>
				<Form horizontal onSubmit={::this.handleSubmit}>
	        <FormItem
	          {...formItemLayout}
	          label="名称"
	        >
	          <Input type="text" placeholder="" {...getFieldProps('name', { initialValue: data.name||'' })} />
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="描述"
	        >
	          <Input type="textarea" {...getFieldProps('descript', { initialValue: data.descript })} placeholder="" />
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="是否显示"
	        >
	          <Checkbox defaultChecked={data.status == 1} {...getFieldProps('status', { initialValue: (data.status == 1) })}></Checkbox>
	        </FormItem>
	        <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
	          <Button type="primary" htmlType="submit">确定</Button>
	        </FormItem>
	      </Form>
			</div>
		)
	}
}

