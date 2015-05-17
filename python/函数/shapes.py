#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-17 15:32:03
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

"""
    函数的集合
    打印基本形状
"""
CHAR = '*'


def rectangle(heigh, width):
    """打印矩形."""
    for row in range(heigh):
        for col in range(width):
            print(CHAR),
        print('')


def square(side):
    """打印一个正方形."""
    rectangle(side, side)


def triangle(heigh):
    """打印直角三角形."""
    for row in range(heigh):
        for col in range(1, row + 2):
            print(CHAR),
        print('')

# rectangle(2, 3)
# square(3)
# triangle(3)
