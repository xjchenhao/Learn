<article class="viewport">
    <div class="balance-wrap">
        <div class="tit"><i class="icon icon-money"></i> 可用余额(元)</div>
        <div class="cont">{{balance}}</div>
    </div>
    <main class="main">
        <div class="balance-info">
            <div class="box">
                <div class="tit"><i class="icon icon-purse"></i> 余额来源：</div>
                <ol class="cont">
                    <li>1. 定期理财项目到期之后归还的本金及收益</li>
                    <li>2. 钱宝宝的收益及你所转出的本金</li>
                    <li>3. 在钱庄网PC端使用网银对余额进行充值</li>
                </ol>
            </div>
            <div class="box">
                <div class="tit"><i class="icon icon-bankCard"></i>余额提现：</div>
                <div class="cont">
                    <p>您充值过后没有用于投资的金额，提现时平台将收取{{multiplication cashFeePercent 100 2}}％的转账手续费；提现成功后，该手续费将以红包的形式返还给您，可投资使用。</p><p>手续费 = （提现金额 - 可免费提现额度）*{{multiplication cashFeePercent 100 2}}%，最低1元，包含小数点则四舍五入。</p>
                </div>
            </div>
        </div>
        <div class="time-info">
            <p>15:00之前发起提现，当天到账；</p>
            <p>15:00之后发起提现，第二天到账；</p>
            <p>周末及节假日除工行、招行、建行、农行、中行的提现正常到账，其余银行的提现均在节假日后第一个工作日统一到账！</p>
        </div>
    </main>
</article>
<footer class="footer-bar">
    {{#equal balance 0}}
        <a class="footer-btn disabled" href="javascript:;">提现</a>
    {{else}}
        <a class="footer-btn" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.qz.qian&ckey=CK1304356609522" data-ajax="false">去钱庄理财App提现</a>
    {{/equal}}
</footer>