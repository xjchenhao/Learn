<ul class="ui-list-double">
    {{#each list}}
        <li>
            <a href="myTenderRecordDetail.html?tenderId={{tenderId}}" data-ajax="false">
                <div class="column-left">
                    <div class="tits">{{borrowName}} <i class="icon {{#equal borrowStatus 8}}icon-tick-hollow{{else}}icon-clock{{/equal}}"></i></div>
                    <div class="conts">投资金额 {{account}}元</div>
                </div>
                <div class="column-right">
                    <div class="tits">收益<span class="font-color-red">{{interest}}</span>元</div>
                    <div class="conts">{{dateFormat this.addtime 'yyyy-MM-dd HH:mm'}}</div>
                </div>
            </a>
        </li>
    {{/each}}
</ul>