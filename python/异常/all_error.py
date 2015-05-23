#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-23 10:38:14
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

def convert_to_int(s,base):
    try:
        return int(s,base)
    except Exception, e:
        return 'error'
print(convert_to_int('010',1))