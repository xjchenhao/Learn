<ul class="ui-list-double">
    {{#each list}}
        <li>
            <a href="myTenderRecordDetail.html?tenderId={{tenderId}}" data-ajax="false">
            <div class="column-left">
                <div class="tits">{{borrowName}}</div>
                <div class="conts">回款至{{backPlace}}</div>
            </div>
            <div class="column-right">
                <div class="tits">本息<span class="font-color-red">{{#equal captial 0}}{{captial}}{{else}}{{sum captial interest}}{{/equal}}</span>元</div>
                <div class="conts">{{dateFormat this.repaymenTime 'yyyy-MM-dd'}}</div>
            </div>
            </a>
        </li>
    {{/each}}
</ul>