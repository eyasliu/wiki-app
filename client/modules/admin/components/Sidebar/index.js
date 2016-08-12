import { Menu, Icon } from 'antd';
import style from './style.scss';

const SubMenu = Menu.SubMenu;


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
    console.log('click ', e);
    this.setState({
      current: e.key,
      openKeys: e.keyPath.slice(1),
    });
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
      	<Menu.Item key="dashboard"><span><Icon type="tablet" /><span>Dashboard</span></span></Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
          <Menu.Item key="1">选项1</Menu.Item>
          <Menu.Item key="2">选项2</Menu.Item>
          <Menu.Item key="3">选项3</Menu.Item>
          <Menu.Item key="4">选项4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
          <Menu.Item key="5">选项5</Menu.Item>
          <Menu.Item key="6">选项6</Menu.Item>
          <SubMenu key="sub3" title="三级导航">
            <Menu.Item key="7">选项7</Menu.Item>
            <Menu.Item key="8">选项8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
          <Menu.Item key="9">选项9</Menu.Item>
          <Menu.Item key="10">选项10</Menu.Item>
          <Menu.Item key="11">选项11</Menu.Item>
          <Menu.Item key="12">选项12</Menu.Item>
        </SubMenu>
      </Menu>
		</div>
	</div>
)
	}
}