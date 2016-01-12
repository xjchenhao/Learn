<article class="viewport ui-form">
    <main class="main">
        <div class="tit">本次您最多可转出 <span class="red">{{bmTotal}}</span> 元</div>
        <div class="cont">
            <div class="row">
                <input id="money" class="ui-input-text" pattern="[0-9]*" type="text" placeholder="请输入转出金额" data-activate-check="true"/>
            </div>
            <div class="row">
                <input id="password" class="ui-input-text" type="password" placeholder="请输入交易密码" data-activate-check="true"/>
            </div>
            <div class="row find">
                <a class="forget" id="forgetBtn" href="forgetTransPassword.html" data-ajax="false">忘记密码?</a>
            </div>
        </div>
        <div class="tit">转出至：您的账户余额</div>
        <div class="operate">
            <a href="javascript:;" class="j-submit btn ui-btn red disabled" data-activate-submit="true">确认转出</a>
        </div>
    </main>
</article>