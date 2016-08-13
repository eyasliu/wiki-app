import { Table } from 'antd';
import Filter from './Filter';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render: (text) => <a href="#">{text}</a>,
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'operation',
  render: (text, record) => (
    <span>
      <a href="#">操作一{record.name}</a>
      <span className="ant-divider"></span>
      <a href="#">操作二</a>
      <span className="ant-divider"></span>
      <a href="#" className="ant-dropdown-link">
        更多
      </a>
    </span>
  ),
}];


const data = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号',
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号',
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号',
}];

export default class List extends Component{
	constructor(props){
		super();
	}

	render(){
		return (
			<div>
				<Filter></Filter>
				<Table columns={columns} dataSource={data} />
			</div>
		)
	}
}