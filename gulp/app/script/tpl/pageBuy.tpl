<article class="viewport">
    <div class="box invest-box">
        {{!--<div class="tit">可投资金额 <span>{{parseInt lowestAccount}} ~ {{mostAccount}}</span> 元</div>--}}
        <div class="tit">
            {{#less lowestAccount mostAccount}}
                可投资金额 <span>{{parseInt lowestAccount}} ~ {{parseInt mostAccount}}</span> 元
            {{else}}
                可投资金额 <span>{{parseInt mostAccount}}</span> 元(需一次性投资完)
            {{/less}}
        </div>
        <div class="cont">
            <div class="tits">我要投资</div>
            <div class="conts">
                {{#less lowestAccount mostAccount}}
                    <input id="investAmount" type="text" pattern="[0-9]*" placeholder="输入您的投资金额" data-activate-check="true"/>
                {{else}}
                    <input id="investAmount" type="text" pattern="[0-9]*" placeholder="输入您的投资金额" data-activate-check="true" value="{{parseInt mostAccount}}" readonly="true"/>
                {{/less}}
                <span class="unit">元</span>
            </div>
        </div>
        <div class="info">预估收益 <span id="earnings">0.00</span> 元</div>
    </div>
    <div class="box info-box">
        <div class="tit">支付信息</div>
        <div class="cont">
            {{#if redPacketTotal}}
            <div class="row" id="envelopeBtn">
                <div class="tits" id="redPacketLimit">红包(本次可用0元)</div>
                <div class="conts">
                    <span class="font-color-gray-neutral">未使用</span>
                    <span class="iconf icon-arrow-bottom font-color-gray-neutral"></span>
                </div>
                <input id="redPacketLimit" type="hidden" value=""/>
            {{else}}
            <div class="row">
                <div class="tits font-color-gray-neutral">红包(0元)</div>
                <div class="conts"></div>
            {{/if}}
        </div>
            <div class="envelope-list js_hide" id="envelopeList">
                <ul>
                    {{#each redPacketList}}
                        <li>
                            <label><input name="envelope" type="checkbox" value="{{redpacketId}}"
                                          data-amount="{{redPacketAmount}}"/>{{redPacketType}}{{redPacketAmount}}元</label>
                        </li>
                    {{/each}}
                </ul>
            </div>
            <div class="row">
                <div class="tits">余额(<span id="balance">{{balance}}</span>元)</div>
                <div class="conts"><span id="buyAmount">0.00</span>元</div>
            </div>
            <div class="row">
                {{#if bankCard}}
                    <div class="tits">{{bankCard.bankShortName}}(尾号<span id="hiddenCardNo">{{bankCard.hiddenCardNo}}</span>)</div>
                    <div class="conts"><span id="bankBuy">0.00</span>元</div>
                {{else}}
                    <div class="tits">银行卡</div>
                    <div class="conts">
                        <select name="bindBank" id="bindBank">
                            <option value="">请选择</option>
                            {{#each allBankCardList}}
                                <option value="{{bankCode}}">{{bankShortName}}</option>
                            {{/each}}
                        </select>
                    </div>
                {{/if}}
            </div>
            <div class="row import-bankcard js_hide" id="bankCard">
                <input id="bankCardNo" type="text" placeholder="请输入与实名信息一致的银行卡号" pattern="[0-9]*" maxlength="20" data-activate-check="true" value="{{bankCard.cardNo}}"/>
            </div>
        </div>
        </div>
    </div>
    <div class="operation-box">
        <a href="javascript:;" class="js-submit ui-btn red disabled" data-activate-submit="true">确定去支付</a>

        <p class="info">到期本金收益自动归还至账户余额</p>
    </div>
</article>
<input id="userPhone" type="hidden" value=""/>
<input id="lowestAccount" type="hidden" value="{{lowestAccount}}"/>
<input id="mostAccount" type="hidden" value="{{mostAccount}}"/>
<input id="normalApr" type="hidden" value="{{normalApr}}"/>
<input id="extraAwardApr" type="hidden" value="{{extraAwardApr}}"/>
<input id="tenderDay" type="hidden" value="{{tenderDay}}"/>