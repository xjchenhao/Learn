<article class="viewport">
    <div class="my-info{{#unless realNameStatus}} approve{{/unless}}">
        <ul class="info-box">
            {{#if phone}}
                <li><span>账户</span>{{secrecyPhone phone}}</li>
            {{/if}}
            {{#if realNameStatus}}
                <li><span>姓名</span>{{realName}}</li>
                <li><span>身份证</span>{{cardID}}</li>
            {{else}}
                <li class="font-color-gray-neutral"><span>姓名</span>--</li>
                <li class="font-color-gray-neutral"><span>身份证</span>--</li>
            {{/if}}
        </ul>
        {{#unless realNameStatus}}
            <a class="go-approve" href="realName.html" data-ajax="false">去认证</a>
        {{/unless}}
    </div>
    <div class="operate">
    {{#if realNameStatus}}
        <a href="editLoginPassword.html" data-ajax="false">修改登录密码<i class="icon-arrow-right"></i></a>
        <a href="editTransPassword.html" data-ajax="false">修改交易密码<i class="icon-arrow-right"></i></a>
        {{#if payPwdStatus}}
            <a href="forgetTransPassword.html" data-ajax="false">忘记交易密码<i class="icon-arrow-right"></i></a>
        {{else}}
            <a href="forgetTransPassword.html" data-ajax="false">设置交易密码<i class="icon-arrow-right"></i></a>
        {{/if}}
    {{else}}
        <a href="editLoginPassword.html" data-ajax="false">修改登录密码<i class="icon-arrow-right"></i></a>
        <a href="realName.html" data-ajax="false">设置交易密码<i class="icon-arrow-right"></i></a>
    {{/if}}
    </div>
    <a id="safetyQuit" class="quit" href="javascript:;">退出</a>
</article>