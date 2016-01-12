<ul class="ui-list-double">
    {{#each tenderList}}
        <li>
            <div class="column-left">
                <div class="tits">{{phone}}</div>
                <div class="conts">{{dateFormat this.addTime 'yyyy-MM-dd HH:mm:ss'}}</div>
            </div>
            <div class="column-right">
                <div class="tits">{{account}}</div>
            </div>
        </li>
    {{/each}}
</ul>