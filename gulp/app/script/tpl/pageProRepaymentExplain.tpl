<article class="viewport {{#if isNewAdvance}}defaultPrepayment{{/if}}">
    <div class="tit">
        <p>本项目默认还款日：{{dateFormat repayTime 'yyyy-MM-dd'}}</p>

        <p>支持提前还款,还款还有额外奖励</p>
        <i class="arrow"></i>
    </div>
    {{#if isNewAdvance}}
        <div class="cont">
            <ol>
                <li>
                    <div class="tits">提前还款</div>
                    <div class="conts">额外奖励1天的投资收益</div>
                </li>
            </ol>
        </div>
    {{else}}
        <div class="cont">
            {{#greaterEqual status 6}}
                <ol>
                    <li>
                        <div class="tits">{{pMonth}}月{{pDay}}日前还款（包含{{pDay}}日）</div>
                        <div class="conts">额外奖励1天的投资收益</div>
                    </li>
                    <li>
                        <div class="tits">{{pMonth}}月{{pDay}}日后还款（包含{{pDay}}日）</div>
                        <div class="conts">奖励1%年化收益</div>
                    </li>
                </ol>
            {{else}}
                <ol>
                    <li>
                        <div class="tits">{{nMonth}}月{{nDay}}日前还款（包含{{nDay}}日）</div>
                        <div class="conts">额外奖励1天的投资收益</div>
                    </li>
                    <li>
                        <div class="tits">{{nMonth}}月{{nDay}}日后还款</div>
                        <div class="conts">奖励1%预期年化收益</div>
                    </li>
                </ol>
            {{/greaterEqual}}
        </div>
    {{/if}}
    <div class="info"><i class="iconfont">&#xe640;</i>奖励在还款日发送到投资人的账户余额</div>
</article>
