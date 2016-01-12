<ul class="list">
{{#each productList}}
<li>
    <a href="product.html?borrowId={{borrowId}}" data-ajax="false">
        <div class="tit">{{name}}</div>
        <div class="cont">
            <span class="tits">预期年化</span>
            <span class="conts">{{normalApr}}%{{#if extraAwardApr}}<small> + {{extraAwardApr}}%</small>{{/if}}</span>
            {{#equal brType 3}}
                <div class="info"><span>{{tenderTimes}}人</span>已投<i class="divider"></i><span>随存随取</span><i class="divider"></i><span>{{lowestAccount}}元</span>起投</div>
            {{else}}
                <div class="info"><span>{{tenderTimes}}人</span>已投<span><i class="divider"></i>{{#if isday}}{{timeLimitDay}}天{{else}}{{timeLimit}}月{{/if}}</span>期限<i class="divider"></i><span>{{lowestAccount}}元</span>起投</div>
            {{/equal}}
        </div>
        <div class="icon-con">
            {{helper-icon}}
        </div>
        <div class="mark">{{helper-proMark}}</div>
    </a>
</li>
{{/each}}
</ul>