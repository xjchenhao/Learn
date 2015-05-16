#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-17 00:48:03
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

total=0
while True:
    s=raw_input('Enter a number (or "done"): ')
    if s=='done':
        break
    total=int(s)
print('The sum is '+ str(total))