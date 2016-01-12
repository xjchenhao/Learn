<article class="viewport">
    <!-- S 项目详情 -->
    <div class="item">
        <div class="tit">项目详情</div>
        <ul class="subitem">
            <li>
                <h4 class="subtit">借款人信息</h4>
                <div id="jsProductDebtorInfo" class="subdes">{{debtorInfo}}</div>
            </li>
            {{#equal productType 3}}
            <li>
                <h4 class="subtit">审核资料<span class="info"> [{{franchiseeName}}认证]</span></h4>
                <table class="identify_table">
                    <tr>
                        <th>审核项目</th>
                        <th>状态</th>
                        <th>通过日期</th>
                    </tr>
                    <tr>
                        <td>信用报告</td>
                        <td>{{helper-identifyState 0}}</td>
                        <td>{{dateFormat verifyTime 'yyyy-MM-dd'}}</td>
                    </tr>
                    <tr class="even">
                        <td>身份认证</td>
                        <td>{{helper-identifyState 1}}</td>
                        <td>{{dateFormat verifyTime 'yyyy-MM-dd'}}</td>
                    </tr>
                    <tr>
                        <td>工作认证</td>
                        <td>{{helper-identifyState 2}}</td>
                        <td>{{dateFormat verifyTime 'yyyy-MM-dd'}}</td>
                    </tr>
                    <tr class="even">
                        <td>还款能力认证</td>
                        <td>{{helper-identifyState 3}}</td>
                        <td>{{dateFormat verifyTime 'yyyy-MM-dd'}}</td>
                    </tr>
                </table>
            </li>
            {{/equal}}
            <li>
                <h4 class="subtit">项目描述</h4>
                <p id="jsProductContent" class="subdes">{{content}}</p>
            </li>
            <li>
                <h4 class="subtit">资金用途</h4>
                <p id="jsProductFundUsage" class="subdes">{{fundUsage}}</p>
            </li>
            <li>
                <h4 class="subtit">还款来源</h4>
                <p id="jsProductRepaymentSource" class="subdes">{{repaymentSource}}</p>
            </li>
        </ul>
    </div>
    <!-- E 项目详情 -->
    <!-- S 风险控制 -->
    <div class="item">
        <div class="tit">风险控制</div>
        <p id="jsProductRiskEvaluation" class="cont">{{riskEvaluation}}</p>
    </div>
    <div class="item info">
        <div class="tit">相关资料</div>
        <div id="jsBorrowUserInfo" class="info_img">
            <h4>基本信息（<span></span>）</h4>
            <ul id="jsFileListBorrowUserInfo"></ul>
        </div>
        <div id="jsBorrowMortgage" class="info_img">
            <h4>抵押资料（<span></span>）</h4>
            <ul id="jsFileListBorrowMortgage"></ul>
        </div>
        <div id="jsBorrowVouch" class="info_img">
            <h4>担保资料（<span></span>）</h4>
            <ul id="jsFileListBorrowVouch"> </ul>
        </div>
        <div id="jsBorrowCompanyInfo" class="info_img">
            <h4>经营信息（<span></span>）</h4>
            <ul id="jsFileListBorrowCompanyInfo"></ul>
        </div>
        <input id="borrowFileList" type="hidden" value="{{stringify borrowFileList}}"/>
    </div>
</article>