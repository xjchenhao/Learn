#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-17 14:41:50
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

import math


def area(radius):
    """ 返回一个圆的面积
    用给定的半径。
    例如:
    >>> area(5.5)
    95.0331777711
    """
    return math.pi * radius ** 2

print(area(5.5))
print(area.__doc__)
