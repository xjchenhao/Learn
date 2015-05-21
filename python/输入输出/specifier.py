#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-21 22:26:50
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

a, b, c = 'cat', 3.14, 6
s = 'There\'s %d %ss older than %.2f years' % (c, a, b)
print(s)  #>>There's 6 cats older than 3.14 years