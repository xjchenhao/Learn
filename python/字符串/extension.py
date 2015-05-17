#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-17 16:59:29
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$


def get_ext(fname):
    dot = fname.rfind('.')
    if dot == -1:
        return ''
    else:
        return fname[dot + 1:]

print(get_ext('hello.text'))
print(get_ext('pizza.old.py'))
print(get_ext('pizza'))
