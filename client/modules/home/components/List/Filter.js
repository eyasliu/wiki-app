export default () => (
  <div className="filter">
      <div className="filter-menu pure-menu pure-menu-horizontal">
          <ul className="pure-menu-list">
              <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                <a href="#" className="pure-menu-link">排序</a>
                <ul className="pure-menu-children">
                  <li className="pure-menu-item"><a href="#" className="pure-menu-link">发布时间</a></li>
                  <li className="pure-menu-item"><a href="#" className="pure-menu-link">字母顺序</a></li>
                  <li className="pure-menu-item"><a href="#" className="pure-menu-link">热度</a></li>
                </ul>
              </li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">领域</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">类型</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">时间</a></li>
          </ul>
          <ul className="pure-menu-list pull-right">
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">列表</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">卡片</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">相册</a></li>
          </ul>
      </div>
  </div>
)