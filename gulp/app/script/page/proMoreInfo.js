/**
 * 手机钱庄
 * @name 了解项目
 * @description 单页js
 * @date 2015-08-03
 */
define(function (require, exports, module) {
    require('zepto');
    var pageUrl = require('module/ajax-map');

    module.exports = function () {
        var $pageProMoreInfo = $('#pageProMoreInfo');
        //--------------------------------------------------【加载数据】
        var fileList = $('#borrowFileList').val();
        var aFileList = eval(fileList);
        var arr = [0, 0, 0, 0, 0];
        $.each(aFileList, function (index) {
            var str = '<img src="' + this.zoomFileUrl + '" data-src="' + this.fileUrl + '" alt="' + this.fileName + '">';
            switch (this.fileType) {
                case "borrowUserInfo":
                    $("<li>").html(str).appendTo('#jsFileListBorrowUserInfo');
                    arr[0] += 1;
                    break;
                case "borrowMortgage":
                    $("<li>").html(str).appendTo('#jsFileListBorrowMortgage');
                    arr[1] += 1;
                    break;
                case "borrowVouch":
                    $("<li>").html(str).appendTo('#jsFileListBorrowVouch');
                    arr[2] += 1;
                    break;
                case "borrowCompanyInfo":
                    $("<li>").html(str).appendTo('#jsFileListBorrowCompanyInfo');
                    arr[3] += 1;
                    break;
            }
        });
        for (var i = 3; i >= 0; i--) {
            if (arr[i] == 0) {
                $(".info_img h4 span").eq(i).parent().remove();
            } else {
                $(".info_img h4 span").eq(i).html(arr[i]);
            }
        }

        //--------------------------------------------------【暴露接口内存回收】
        return function () {
        }
    };
});