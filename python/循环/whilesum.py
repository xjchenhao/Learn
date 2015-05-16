#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-17 00:41:27
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

n=int (raw_input('How many numbers to sum?'))
total =0
i=1
while i<=n:
    s=raw_input('Enter number' + str(i) + ':')
    total=total+int(s)
    i=i+1
print('The sum is '+str(total))