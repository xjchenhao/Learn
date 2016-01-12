<article class="viewport">
    {{#if this}}
        <a href="myCenter.html" data-ajax="false">
            <div class="business-card-con">
                <div class="main">
                    {{#if realName}}
                        <div class="tit">{{realName}}</div>
                    {{else}}
                        <div class="tit">{{secrecyPhone phone}}</div>
                    {{/if}}
                    {{#if realNameStatus}}
                        <div class="cont"><i class="icon icon-tick-solid"></i>已实名认证</div>
                    {{else}}
                        <div class="cont">未实名认证</div>
                    {{/if}}
                </div>
                <div class="user-portrait">
                    <img src="../../image/user-portrait/colorful.png" alt=""/>
                </div>
                <i class="icon icon-arrow-right"></i>
            </div>
        </a>
    {{else}}
        <a href="login.html" id="loginBtn" data-ajax="false">
            <div class="business-card-con">
                <div class="main">
                    <div class="tit">马上登录</div>
                    <div class="cont">投资优质理财产品</div>
                </div>
                <div class="user-portrait">
                    <img src="../../image/user-portrait/gray.png" alt=""/>
                </div>
                <i class="icon icon-arrow-right"></i>
            </div>
        </a>
    {{/if}}
    <div class="list-con">
        {{!--<ul class="ui-list-more">--}}
            {{!--<li>--}}
                {{!--<a href="lookforward.html" data-ajax="false">--}}
                    {{!--<div class="tit">活动中心</div>--}}
                    {{!--<i class="list-icon icon icon-gift"></i>--}}
                    {{!--<i class="more-icon icon icon-arrow-right"></i>--}}
                {{!--</a>--}}
            {{!--</li>--}}
            {{!--<li>--}}
                {{!--<a href="lookforward.html" data-ajax="false">--}}
                    {{!--<div class="tit">消息中心</div>--}}
                    {{!--<i class="list-icon icon icon-envelop"></i>--}}
                    {{!--<i class="more-icon icon icon-arrow-right"></i>--}}
                {{!--</a>--}}
            {{!--</li>--}}
        {{!--</ul>--}}
        <ul class="ui-list-more">
            <li>
                <a href="proEnsure.html" data-ajax="false">
                    <div class="tit">安全保障</div>
                    <i class="list-icon icon icon-shield"></i>
                    <i class="more-icon icon icon-arrow-right"></i>
                </a>
            </li>
            <li>
                <a href="http://www.qian360.com/api/common/help.html">
                    <div class="tit">帮助中心</div>
                    <i class="list-icon icon icon-query"></i>
                    <i class="more-icon icon icon-arrow-right"></i>
                </a>
            </li>
        </ul>
    </div>
    <div class="contact-con">
        <p class="tel"><i class="icon icon-tel"></i>400-0455-360</p>

        <p class="time">服务时间 9:00 -18:00</p>
    </div>
</article>