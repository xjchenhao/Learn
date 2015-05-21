#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-21 23:57:29
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

import urllib.request

#python3回返回网页数据，python2提示‘No module named Request’
resp=urllib.request.urlopen('http://www.baidu.com')
html=resp.read()
print(html)

