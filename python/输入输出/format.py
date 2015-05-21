#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-21 22:34:36
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

a = 'My {pet} has {prob}'.format(pet='dog', prob='fleas')
print(a)  # >>My dog has fleas

b = 'My {0} has {1}'.format('dog', 'fleas')
print(b)  # >>My dog has fleas

##下面但格式化文本貌似在python2.7下无效，永远输出0.00000，精度有问题

# c = '1/81 = {x}'.format(x=float(1 / 81))
# print(c)  # >>1/81 = 0.0

# d = '1/81={x:f}'.format(x=1 / 81)
# print(d)
