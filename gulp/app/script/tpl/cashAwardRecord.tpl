<ul class="ui-list-double">
    {{#each list}}
        <li>
            <div class="column-left">
                <div class="tits">{{title}}</div>
                <div class="conts">{{addr}}</div>
            </div>
            <div class="column-right">
                <div class="tits">奖励<span class="font-color-red">{{money}}</span>元</div>
                <div class="conts">{{dateFormat addtime 'yyyy-MM-dd'}}</div>
            </div>
        </li>
    {{/each}}
</ul>