<article class="viewport{{#equal tenderdetail.borrowStatus 8}} finished{{else}} unfinish{{/equal}}">
    <header class="header-bar">
        <h2 class="tit left-col">产品名称</h2>
        <a class="right-col" href="/product.html?borrowId={{tenderdetail.borrowId}}">
            {{tenderdetail.borrowName}}
            <i class="icon icon-arrow-right"></i>
        </a>
    </header>
    <main class="cont">
        <ul class="ui-list-single">
            <li>
                <div class="column-left">投资金额（元）</div>
                <div class="column-right">{{tenderdetail.account}}</div>
            </li>
            <li>
                <div class="column-left">待收收益（元）</div>
                <div class="column-right"><span class="font-color-red">{{toFixed tenderdetail.interest 2}}</span></div>
            </li>
            {{#if tenderdetail.extraAward}}
            <li>
                <div class="column-left">加息收益（元）</div>
                <div class="column-right"><span class="font-color-red">{{tenderdetail.extraAward}}</span></div>
            </li>
            {{/if}}
            <li>
                <div class="column-left">回款时间</div>
                <div class="column-right">{{dateFormat tenderdetail.repaymentTime 'yyyy-MM-dd'}}</div>
            </li>
            <li>
                <div class="column-left">到期自动还款至</div>
                <div class="column-right">{{tenderdetail.backPlace}}</div>
            </li>
            <li>
                <div class="column-left">付款方式</div>
                <div class="column-right">{{tenderdetail.buyType}}</div>
            </li>
            <li>
                <div class="column-left">订单编号</div>
                <div class="column-right">{{tenderdetail.orderNo}}</div>
            </li>
            <li>
                <div class="column-left">投资时间</div>
                <div class="column-right">{{dateFormat tenderdetail.addtime 'yyyy-MM-dd HH:mm'}}</div>
            </li>
            {{#equal tenderdetail.style 3}}
            <li>
                <div class="column-left">还款计划</div>
                <div class="column-right"><a href="myTenderRepayment.html?tenderId={{tenderdetail.tenderId}}" class="font-color-blue" data-ajax="false">查看</a></div>
            </li>
            {{/equal}}
            <li>
                <div class="column-left">相关协议</div>
                <div class="column-right"><a href="{{protocolForHtml}}" class="font-color-blue" data-ajax="false">查看</a></div>
            </li>
        </ul>
    </main>
</article>
{{#equal tenderdetail.borrowStatus 8}}
    <footer class="footer-bar finished">
        <div class="status">
            <i class="icon icon-tick-solid"></i>
            已还款
        </div>
    </footer>
{{else}}
    <footer class="footer-bar unfinish">
        <div class="status">
            <i class="icon icon-clock-solid"></i>
            还款中
        </div>
    </footer>
{{/equal}}
