import { Menu, Icon } from 'antd';
import style from './style.scss';

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

export default class Sidebar extends Component{
	constructor(){
		super();
		this.state = {
			current: '1',
      openKeys: [],
      height: document.body.clientHeight - 50
		}
  	window.addEventListener('resize', ::this.resize)
	}
	resize(){
		this.setState({
			height: document.body.clientHeight - 50
		})
	}
	handleClick(e) {
    // console.log('click ', e);
    this.setState({
      current: e.key,
      openKeys: e.keyPath.slice(1),
    });

    e.item.props.href && RouterHistory.push(e.item.props.href)
  }
  onToggle(info) {
    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
    });
  }
  componentDidMount(){
  }
	render(){
		return (
	<div className={style.sidebar}>
		<div className={style.inner}>
			<Menu onClick={::this.handleClick}
        style={{ width: 240, height: this.state.height }}
        openKeys={this.state.openKeys}
        onOpen={::this.onToggle}
        onClose={::this.onToggle}
        selectedKeys={[this.state.current]}
        mode="inline"
      >
      	<Item key="dashboard" href="/admin/dashboard"><span><Icon type="tablet" /><span>Dashboard</span></span></Item>
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>文档</span></span>}>
          <Item key="1" href="/admin/books">列表</Item>
          <Item key="2" href="/admin/books/add">新建</Item>
          <Item key="3">标签管理</Item>
          <Item key="4">设置</Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
          <Item key="5">选项5</Item>
          <Item key="6">选项6</Item>
          <SubMenu key="sub3" title="三级导航">
            <Item key="7">选项7</Item>
            <Item key="8">选项8</Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
          <Item key="9">选项9</Item>
          <Item key="10">选项10</Item>
          <Item key="11">选项11</Item>
          <Item key="12">选项12</Item>
        </SubMenu>
      </Menu>
		</div>
	</div>
)
	}
}