/**
 * 手机钱庄
 * @name 手机钱庄首页
 * @description 单页js
 * @date 2015-07-16
 */
'use strict';

define(function (require, exports, module) {
    require('zepto');
    var Pop = require('module/dialog');
    module.exports = function () {
        //--------------------------------------------------【焦点图】
        var Slider = require('module/slider');
        var slideImgList = eval($('#slideImgList').val()),
            imgList = [];
        for (var i = 0, l = slideImgList.length; i < l; i++) {
            imgList.push({
                content: slideImgList[i].fullShowUrl,
                href: slideImgList[i].fullRedirectUrl
            });
        }
        var slide = new Slider({
            dom: document.getElementById('homeSlide'),
            data: imgList,
            isAutoplay: true,
            isLooping: true,
            isAutoScale: true,
            isVertical: false,
            isDestroyCon: false,
            type: 'pic',
            animateType: 'default',
            duration: 5000,
            onSlideChange: function onSlideChange(page) {
                var liList = document.querySelectorAll('#homeSlide ol li'),
                    liLength = liList.length;
                for (var i = 0; i < liLength; i++) {
                    liList[i].classList.remove('on');
                }
                liList[page].classList.add('on');
            },
            onSlideInto: function onSlideInto() {
                var imgLength = imgList.length,
                    slideBox = document.getElementById('homeSlide'),
                    noneOl = null,
                    nodeLi = null;
                if (imgLength > 1) {
                    noneOl = document.createElement("ol");
                    slideBox.appendChild(noneOl);
                    for (var i = 0; i < imgLength; i++) {
                        nodeLi = document.createElement("li");
                        nodeLi.appendChild(document.createTextNode(i));
                        noneOl.appendChild(nodeLi);
                    }
                    noneOl.querySelectorAll('li')[0].classList.add('on');
                }
            },
            onDestroy: function onDestroy() {
                if (document.querySelector('#homeSlide ol')) {
                    document.querySelector('#homeSlide ol').remove();
                }
            }
        });
        //--------------------------------------------------【暴露接口内存回收】
        return function () {
            slide.destroy();
        };
    };
});

//# sourceMappingURL=home-compiled.js.map