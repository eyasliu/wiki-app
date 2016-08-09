export default () => (
<div className="content-wrapper">
    <div className="content">
        <h2 className="content-head is-center">你身边的文档专家</h2>

        <div className="pure-g">
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

                <h3 className="content-subhead">
                    <i className="fa fa-rocket"></i>
                    基础
                </h3>
                <p>
                    只专注最基础的部分，木有高深内容
                </p>
            </div>
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                    <i className="fa fa-mobile"></i>
                    知识面广
                </h3>
                <p>
                    众多文档涵盖了各个领域知识
                </p>
            </div>
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                    <i className="fa fa-th-large"></i>
                    Modular
                </h3>
                <p>
                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                </p>
            </div>
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                    <i className="fa fa-check-square-o"></i>
                    Plays Nice
                </h3>
                <p>
                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                </p>
            </div>
        </div>
    </div>

    <div className="ribbon l-box-lrg pure-g">
        <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
            <img className="pure-img-responsive" alt="File Icons" width="300" src="http://purecss.io/img/common/file-icons.png" />
        </div>
        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

            <h2 className="content-head content-head-ribbon">Laboris nisi ut aliquip.</h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor.
            </p>
        </div>
    </div>

    <div className="content">
        <h2 className="content-head is-center">加入我们.</h2>

        <div className="pure-g">
            <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
                <form className="pure-form pure-form-stacked">
                    <fieldset>

                        <label htmlFor="name">名字</label>
                        <input id="name" type="text" placeholder="Your Name" />


                        <label htmlFor="email">邮箱</label>
                        <input id="email" type="email" placeholder="Your Email" />

                        <label htmlFor="password">密码</label>
                        <input id="password" type="password" placeholder="Your Password" />

                        <button type="submit" className="pure-button">立即注册</button>
                    </fieldset>
                </form>
            </div>

            <div className="l-box-lrg pure-u-1 pure-u-md-3-5">
                <h4>联系我们</h4>
                <p>
                    你是找不到我的，别想了.
                </p>

                <h4>更多...</h4>
                <p>
                    没有更多的了
                </p>
            </div>
        </div>

    </div>

    <div className="footer l-box is-center">
        没有版权可言
    </div>

</div>
)