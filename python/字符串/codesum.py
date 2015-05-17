#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-17 16:52:06
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$


def codesum1(s):
    total = 0
    for c in s:
        total = total + ord(c)
    return total
print(codesum1('Hi there!'))


def codesum2(s):
    total = 0
    for i in range(len(s)):
        total = total + ord(s[i])
    return total
print(codesum2('Hi there!'))
