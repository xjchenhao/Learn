{{#with product}}
    <article class="viewport">
        <div class="top-card">
            <div class="main">
                <div class="pro-name">{{name}}</div>
                <div class="rate">
                    <div class="tit">预期年化</div>
                    <div class="cont">{{apr}}<small>%{{#if extraApr}} + <span>{{extraApr}}</span>%</small>{{/if}}</div>
                </div>
                <div class="rule">期限{{#if isday}}{{timeLimitDay}}天{{else}}{{timeLimit}}月{{/if}}<span
                        class="divide"></span>{{lowestAccount}}元起投
                </div>
            </div>
            {{#if isAdvanceRepay}}
                <div class="tag"><a href="proRepaymentExplain.html" data-title="提前还款说明">支持提前还款, 点击查看说明</a></div>
            {{/if}}
            <div class="other ing">
                <div class="info clearfix">
                    {{helper-proInfo}}
                </div>
                <div class="progress"><em><i style="width: {{helper-progressbar}}%"></i></em></div>
            </div>
        </div>
        <div class="income-con">
            <div class="explain">
                <ul>
                    {{#equal style 3}}
                        <li>投资日计息，按月付息到期还本<i class="iconfont green">&#xe62e;</i></li>
                    {{else}}
                        <li>投资日计息，一次性到期还款<i class="iconfont green">&#xe62e;</i></li>
                    {{/equal}}
                    {{helper-limit}}
                </ul>
            </div>
            <div class="million">
                <p>每万份收益 <b class="font-color-red" id="clacProfit">0</b> 元</p>

                <p>同期银行利息<span id="bankIncome">0</span>元，是银行利息的 <span id="multiple">{{helper-pkBank}}</span> 倍</p>
                <i class="iconfont red">&#xe62f;</i>
            </div>
        </div>
        <div class="info-con">
            {{#if extraApr}}
                {{#if extraAprUrl}}
                    <div class="box">
                        <a href="{{extraAprUrl}}">
                            <div class="tit">平台奖励</div>
                            <div class="cont">
                                <p>平台奖励 <span class="font-color-red">{{extraApr}}%</span> 收益</p>
                            </div>
                        </a>
                    </div>
                {{else}}
                    <div class="box nolink">
                        <div class="tit">平台奖励</div>
                        <div class="cont">
                            <p>平台奖励 <span class="font-color-red">{{extraApr}}%</span> 收益</p>
                        </div>
                    </div>
                {{/if}}
            {{/if}}

            <div class="box">
                <a href="proReward.html">
                    <div class="tit">额外奖励</div>
                    <div class="cont">
                        <p>新用户首次投资送10元红包</p>
                    </div>
                </a>
            </div>
            <div class="box">
                <a href="proInvestRecord.html">
                    <div class="tit">投资记录</div>
                    <div class="cont">
                        已经有<b>{{regularTenderCount}}</b>笔投资{{#if ../largestTender}}，最高投<b>{{../../largestTender}}</b>元{{/if}}
                    </div>
                </a>
            </div>
            <div class="box">
                <a href="proMoreInfo.html">
                    <div class="tit">了解项目</div>
                    <div class="cont">
                        {{ellipsis content 70}}
                    </div>
                </a>
            </div>
            <div class="box">
                <a href="proEnsure.html">
                    <div class="tit">安全保障</div>
                    <div class="cont">
                        <p>银行级专业团队把控</p>
                        <p>100%抵押质押保障</p>
                        <p>阳光保险领航资金安全</p>
                        <p>千万风险保障计划</p>
                    </div>
                </a>
            </div>
        </div>
        <input type="hidden" value="{{apr}}" id="apr">
        <input type="hidden" value="{{extraApr}}" id="extraApr">
        <input type="hidden" value="{{account}}" id="totalAmount">
        <input type="hidden" value="{{../interest_day}}" id="interest_day">
        <input type="hidden" value="365" id="totalDays">
        <input type="hidden" value="10000" id="totalAmount2">
    </article>
    <article class="float-buy-con">
        {{helper-buyBtn}}
    </article>
{{/with}}