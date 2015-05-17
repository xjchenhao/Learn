#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-17 17:20:27
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$


def is_done1(s):
    return s == 'done' or s == 'quit'
# print(is_done1(raw_input('input：')))

import re  # 使用正则表达式


def is_done2(s):
    return re.match('done|quit', s) != None
print(is_done2(raw_input('input：')))
