<article class="viewport">
    <div class="main">
        {{#equal status 0}}
            <div class="state-con faillure">
                <div class="info">投资失败</div>
            </div>
            <div class="product-con">
                <div class="tit"></div>
                <div class="cont">
                    <div class="row">
                        钱宝宝剩余：<span>{{bmBalance}}</span> 元
                    </div>
                    <div class="row">
                        账户最新余额：<span>{{balance}}</span> 元
                    </div>
                </div>
            </div>
            <div class="error-con">
                <div class="tit">可能原因</div>
                <div class="cont">
                    当前系统繁忙，请稍后再试
                </div>
            </div>
        {{else}}
            <div class="state-con success-qbb">
                <div class="info">转出成功</div>
            </div>
            <div class="product-con">
                <div class="tit"></div>
                <div class="cont">
                    <div class="row">
                        钱宝宝剩余：<span>{{bmBalance}}</span> 元
                    </div>
                    <div class="row">
                        账户最新余额：<span>{{balance}}</span> 元
                    </div>
                </div>
            </div>
        {{/equal}}
        <div class="operation-con">
            <a class="btn ui-btn red" href="index.html#&pageUser" data-ajax="false">我知道了</a>
        </div>
    </div>
</article>
<footer class="footer-bar">
    如有疑问请致电钱庄客服400-0455-360
</footer>