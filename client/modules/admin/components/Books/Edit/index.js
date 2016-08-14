import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon, Tabs } from 'antd';
import Base from './Base';
import ListItem from './ListItems';
import Content from './Content'

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

export default class Add extends Component{
	constructor(props){
		super();
	}

	callback(key) {
	  // console.log(key);
	}

	render(){
		return (
			<div>
				<Tabs defaultActiveKey="1" onChange={this.callback}>
			    <TabPane tab="基本信息" key="1">
			    	<Base></Base>
			    </TabPane>
			    <TabPane tab="内容" key="2">
			    	<div>
				    	<ListItem></ListItem>
			    		<Content></Content>
			    	</div>
			    </TabPane>
			  </Tabs>
			</div>
		)
	}
}
