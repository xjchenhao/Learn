<ul>
    {{#each list}}
        <li{{#andFalse overdueFlag useFlag}} class="on"{{/andFalse}}>
            <div class="card-con">
                &yen;<span>{{redPacketAmount}}</span>
            </div>
            <div class="info-con">
                <div class="tit">{{redPacketType}}红包</div>
                <div class="cont-inner">{{dateFormat validDate 'yyyy-MM-dd'}}到期</div>
            </div>
            <div class="state-con{{#if useFlag}} end{{else}}{{#if overdueFlag}} expired{{/if}}{{/if}}"></div>
        </li>
    {{/each}}
</ul>