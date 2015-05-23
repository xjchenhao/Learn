#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-23 10:31:02
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

def convert_to_int(s,base):
    try:
        return int(s,base)
    except ValueError:
        return 'value error'
    except TypeError:
        return 'type error'
print(convert_to_int(0,0))
print(convert_to_int('010',1))
print(convert_to_int('010',8))