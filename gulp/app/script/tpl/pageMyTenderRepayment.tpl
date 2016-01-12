<article class="viewport">
    <table class="ui-table">
        <thead>
        <tr>
            <th>还款日期</th>
            <th>应收本金(元)</th>
            <th>应收利息(元)</th>
        </tr>
        </thead>
        <tbody>
        {{#each this}}
            <tr>
                <td>{{dateFormat repayTime 'yyyy-MM-dd'}}</td>
                <td>{{capital}}</td>
                <td>{{interst}}</td>
            </tr>
        {{/each}}
        </tbody>
    </table>
</article>