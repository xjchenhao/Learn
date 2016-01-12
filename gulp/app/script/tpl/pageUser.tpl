<article class="viewport">
    <div class="account-overview-con">
        <div class="invest-ing">
            <a href="tendering.html" data-ajax="false">
                <div class="tit">在投资金(元)</div>
                    <div class="cont">{{#if tenderTotal}}{{tenderTotal}}{{else}}0.00{{/if}}</div>
                <i class="icon icon-arrow-right"></i>
            </a>
        </div>
        <div class="income">
            <div class="yesterday">
                <div class="tit">昨日收益(元)</div>
                <div class="cont">{{tenderYesInterest}}</div>
            </div>
            <div class="accumulated">
                <div class="tit">累计收益(元)</div>
                <div class="cont">{{accumulatedIncome}}</div>
            </div>
        </div>
    </div>
    <div class="record-con">
        <div class="invest">
            <div class="tit">投资记录（元）</div>
            <div class="cont">
                <a href="getHistoryTender.html" data-ajax="false">
                    {{#if tenderAccount}}
                    <div class="time">{{dateFormat tenderTime 'MM/dd'}}</div>
                    <div class="amount">{{tenderAccount}}</div>
                    {{else}}
                    <div class="no-data">暂无投资</div>
                    {{/if}}
                </a>
            </div>
            <i class="icon"></i>
        </div>
        <div class="repayment">
            <div class="tit">回款记录（元）</div>
            <div class="cont">
                    <a href="returnRecord.html" data-ajax="false">
                        {{#if repayAccount}}
                        <div class="time">{{dateFormat repayTime 'MM/dd'}}</div>
                        <div class="amount">{{repayAccount}}</div>
                        {{else}}
                        <div class="no-data">暂无回款</div>
                        {{/if}}
                    </a>
            </div>
            <i class="icon"></i>
        </div>
    </div>
    <div class="list-con">
        <ul class="ui-list-more">
            <li>
                <a href="accountBalance.html" data-ajax="false">
                    <div class="tit">账户余额</div>
                    <div class="cont font-color-gray-dark">{{balance}}元</div>
                    <i class="list-icon icon icon-wing"></i>
                    <i class="more-icon icon icon-arrow-right"></i>
                </a>
            </li>
            <li>
                <a href="redPacket.html" data-ajax="false">
                    <div class="tit">红包及奖励</div>
                    <div class="cont">邀请送红包<img class="envelope" src="../../image/redPacket/ui-list-envelope.png" /></div>
                    <i class="list-icon icon icon-envelope"></i>
                    <i class="more-icon icon icon-arrow-right"></i>
                </a>
            </li>
            <li>
                {{#if bankCardStatus}}
                <a href="myBankCard.html" data-ajax="false">
                    <div class="tit">我的银行卡</div>
                    <div class="cont"><i class="icon icon-tick-solid"></i>已绑定</div>
                    <i class="list-icon icon icon-bankCard"></i>
                    <i class="more-icon icon icon-arrow-right"></i>
                </a>
                {{else}}
                <a href="addBankCard.html" data-ajax="false">
                    <div class="tit">我的银行卡</div>
                    <div class="cont">未绑定</div>
                    <i class="list-icon icon icon-bankCard"></i>
                    <i class="more-icon icon icon-arrow-right"></i>
                </a>
                {{/if}}
            </li>
        </ul>
    </div>
</article>