#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-23 10:40:58
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

import os
def invert(x):
    try:
        return 1/x
    except ZeroDivisionError:
        return 'error'
    finally:
        print('invert(%s) done' % x)
# print(invert(0))
