define(function(require, exports, module){
    require('zepto');

    function newGuid() {
        var guid = "";
        for (var i = 1; i <= 32; i++) {
            var n = Math.floor(Math.random() * 16.0).toString(16);
            guid += n;
            if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) {
                guid += "-";
            }
        }
        return guid;
    }

    module.exports ={

        /* 没有数据 添加样式 */
        noData: function ($container, str) {
            var des = '<div class="describe-con">' + str + '</div>';
            $container
                .empty()
                .addClass('ui-load-state')
                .addClass('no-date')
                .html(des);
        },

        /* 移除无数据样式 */
        removeNoData: function ($container) {
            $container.empty().removeClass('no-data');
        },

        /* 请求失败的时候，显示重试并绑定点击可重试 */
        again: function ($container, loadData) {
            var guid = newGuid();
            var des = '<div class="describe-con">亲，网络不给力哦</div>';
            des += '<div class="btn-con"><a href="javascript:;" data-again="' + guid + '">刷新试试</a></div>';
            des += '</p>';
            $container
                .empty()
                .addClass('ui-load-state')
                .addClass('system-busy')
                .html(des);
            $('[data-again="' + guid + '"]').on('click', function (e) {
                loadData();
            });
        },

        /* 加载动画对象 不写成对象算了*/
        loading: {
            // 显示动画
            show: function ($container) {
                //var guid = newGuid();
                //var des = '<div class="describe-con">加载中...</div>';
                //$container
                //    .empty()
                //    .addClass('ui-load-state')
                //    .addClass('load-ing')
                //    .html(des);
                //$container.show();
            },

            // 结束动画
            hide: function ($container) {
                //$container.find('.describe-con').remove();
                //$container
                //    .removeClass('load-ing')
            }
        },

        /* 显示服务端的回调信息 */
        showServerReturn: function ($returnMsg, msg) {
            $returnMsg.html(msg);
        },

        /* 清空服务端的回调信息 */
        emptyServerReturn: function ($returnMsg) {
            $returnMsg.empty();
        }
    };

});