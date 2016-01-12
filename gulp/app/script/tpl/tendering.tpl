<article class="viewport">
    <div class="balance-wrap">
        <div class="tit"><i class="icon icon-money"></i> 在投资金(元)</div>
        <div class="cont">{{sum investingCapital bmTotal}}</div>
    </div>
    <div class="tenders">
        <div class="tenders-header">钱宝宝</div>
        <div class="tenders-item">
            <div class="tit">在投资金（元）</div>
            <div class="cont">{{bmTotal}}</div>
        </div>
        <div class="tenders-item">
            <div class="tit">已累计收益 （元）</div>
            <div class="cont">{{bmInterest}}</div>
        </div>
        {{!--<a class="btn red" href="bmOut.html" data-ajax="false">转出</a>--}}
    </div>
    <div class="tenders">
        <div class="tenders-header">定期理财项目</div>
        <div class="tenders-item">
            <div class="tit">在投资金（元）</div>
            <div class="cont">{{investingCapital}}</div>
        </div>
        <div class="tenders-item">
            <div class="tit">待到账收益 （元）</div>
            <div class="cont">{{investingWaitInterest}}</div>
        </div>
        <a class="btn" href="getHistoryTender.html" data-ajax="false">查看</a>
    </div>
</article>