import style from './item.scss';

export default () => (
  <div className={cx(style.item, 'list-item')}>
    <div className={style.inner}>
      <div className={style.thumb}>
        <a href="#" className={style.itemLink}>
          <img src="http://www.awwwards.com/media/cache/thumb_sotm/awards/submissions/2016/08/57a0472da0d63.jpeg" alt=""/>
        </a>
        <a href="#" className={style.link}>link</a>
      </div>
      <div className="stage">
        <a href="#"><h1>Three Sixty Property Group</h1></a>
        <div>By Eyasliu from China with 7.38</div>
        <div>August 09.2016</div>
      </div>
    </div>
  </div>
)
