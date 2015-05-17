#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-17 15:05:22
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

name = 'Jack'


def say_hello():
    print('Hello ' + name + ' !')


def change_name(new_name):
    global name
    name = new_name
say_hello()
change_name('chenhao')
say_hello()
