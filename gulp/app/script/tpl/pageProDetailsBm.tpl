{{#with product}}
    <article class="viewport">
        <div class="top-card">
            <div class="main">
                <div class="pro-name">{{name}}</div>
                <div class="rate">
                    <div class="tit">预期年化</div>
                    <div class="cont">{{apr}}
                        <small>%</small>
                    </div>
                </div>
                <div class="rule"><b>随取随存</b><span class="divide"></span><b>1元</b>起投<span
                        class="divide"></span><b>{{tenderTimes}}</b>人已投
                </div>
            </div>
            <div class="qbb-progress">
                <div class="progress">
                    <em><i></i></em>
                    <span></span>
                    <span></span>
                </div>
                <div class="info">
                    <span>今天投资</span>
                    <span>第2天开始计息</span>
                    <span>第3天收益进余额</span>
                </div>
            </div>
        </div>
        <div class="income-con nolink">
            <div class="income">
                <div class="tit">计算预期收益</div>
                <div class="cont">
                    <div class="import">
                        <div class="row"><input class="amount ui-input-text" id="amount" type="text"
                                                placeholder="投入10000" pattern="[0-9]*"/><input
                                class="days ui-input-text" id="days" type="text" placeholder="放365天"
                                pattern="[0-9]*"/></div>
                        <div class="row">收益：<b id="clacProfit">0</b>&nbsp;元</div>
                    </div>
                    <div class="info top-line">
                        <p>同期银行利息<span id="bankIncome">0</span>元，是银行利息的<b id="multiple">{{helper-pkBank}}</b>倍</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="info-con">
            <div class="box">
                <a href="proMoreinfoQbb.html">
                    <div class="tit">产品介绍</div>
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
            <div class="box nolink">
                <div class="tit">投资说明</div>
                <div class="cont">
                    <p>每日投资限额：10000元<br/>总的投资限额：20000元<br/>每日转出限额：10000元<br/>投资钱宝宝不能使用红包</p>
                </div>
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