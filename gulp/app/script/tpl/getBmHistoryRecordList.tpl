<ul class="ui-list-single">
    {{#each list}}
        <li>
            <div class="column-left">
                <div class="tits">投资金额<span class="font-color-red">{{money}}</span>元</div>
            </div>
            <div class="column-right">
                <div class="tits">{{dateFormat this.date 'yyyy-MM-dd HH:mm'}}</div>
            </div>
        </li>
    {{/each}}
</ul>