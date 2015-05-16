#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-17 00:36:55
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

n=int (raw_input('How many numbers to sum?'))
total =0
for i in range(n):
    s=raw_input('Enter number' + str(i+1) + ':')
    total=total+int(s)
print('The sum is '+str(total))