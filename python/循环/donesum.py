#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-17 00:44:28
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

total=0;
s=raw_input('Enter a number (or "done"): ')
while s != 'done':
    total=total+int(s)
    s=raw_input('Enter a number (or "done"): ')
print('The sum is '+ str(total))
