export default () => (
<div className="header">
    <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <a className="pure-menu-heading" href="/">Eyas</a>
        <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link to="/home" className="pure-menu-link">首页</Link></li>
            <li className="pure-menu-item"><Link to="/home/list" className="pure-menu-link">文档</Link></li>
            <li className="pure-menu-item"><Link to="/admin" className="pure-menu-link">管理面板</Link></li>
            <li className="pure-menu-item"><Link to="/home/login" className="pure-menu-link">登录</Link></li>
            <li className="pure-menu-item pure-menu-selected"><Link to="/home/signup" className="pure-menu-link">注册</Link></li>
        </ul>
    </div>
</div>
)
