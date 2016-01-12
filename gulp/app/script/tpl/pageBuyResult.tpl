<article class="viewport">
    <div class="main">
        {{#if status}}
            <div class="state-con success">
                <div class="info">投资成功</div>
            </div>
            <div class="product-con">
                <div class="tit">{{tenderName}}</div>
                <div class="cont">
                    <div class="row">
                        <div class="tits">投资金额(元)</div>
                        <div class="conts"><span class="font-color-red">{{tenderMoney}}</span></div>
                    </div>
                    <div class="row">
                        <div class="tits">交易状态</div>
                        <div class="conts">交易成功</div>
                    </div>
                </div>
            </div>
            <div class="operation-con">
                <a href="index.html#&pageProList" data-ajax="false">继续投资</a>
                <a href="index.html#&pageUser" data-ajax="false">去我的钱庄</a>
            </div>
        {{else}}
            <div class="state-con faillure">
                <div class="info">投资失败</div>
            </div>
            <div class="error-con">
                <div class="tit"><i class="iconfont">&#xe61c;</i>可能原因</div>
                <div class="cont">
                    <ol>
                        <li>1. 银行卡余额不足，请检查银行卡余额；</li>
                        <li>2. 银行卡支付金额超过最大限额。</li>
                    </ol>
                </div>
            </div>
            <div class="operation-con">
                <a id="revestBtn" href="product.html?borrowId={{borrowId}}#&pageProDetails" data-ajax="false">重新投资</a>
                <a href="index.html#&pageUser" data-ajax="false">去我的钱庄</a>
            </div>
        {{/if}}
    </div>
    <div class="banner m_t_40"><a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.qz.qian&amp;ckey=CK1304356609522" data-ajax="false"><img src="http://h5.test2.qian360.com/image/pro-list-banner/download_3e5b586.jpg" width="100%" alt="马上下载 钱庄理财APP"></a></div>
    <div class="contact-con">如有疑问请致电钱庄客服400-0455-360</div>
    </div>
</article>