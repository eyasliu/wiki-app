import { Table } from 'antd';
import Filter from './Filter';
import {getList, remove} from 'admin/actions/books';

@connect(
  state => ({list:state.admin.books.list}),
  dispatch => bindActionGroups({act: {getList, remove}}, dispatch)
)
export default class List extends Component{
	constructor(props){
		super();
    console.log(props)
    props.act.getList();
	}

  columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => <Link to={"/admin/books/edit/" + record.id}>{text}</Link>
  }, {
    title: '描述',
    dataIndex: 'descript',
    key: 'descript',
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <span>
        <a href="#"> 查看 </a>
        <span className="ant-divider"></span>
        <Link to={"/admin/books/edit/" + record.id}>编辑</Link>
        <span className="ant-divider"></span>
        <a href="#" onClick={e => {
          this.props.act.remove(record.id)
          e.preventDefault();
        }}> 删除 </a>
      </span>
    ),
  }]

	render(){
		return (
			<div>
				<Filter></Filter>
				<Table columns={this.columns} dataSource={this.props.list} />
			</div>
		)
	}
}