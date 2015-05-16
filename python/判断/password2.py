#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-17 00:56:58
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

pwd = raw_input('What is the password?')
if pwd == 'apple':  # note use of ==#instead of =
    print('apple Loggin on ...')
elif pwd == 'chenhao':
    print('chenhao Loggin on ...')
else:
    print('Incorrect password.')
