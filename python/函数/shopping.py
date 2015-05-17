#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-17 15:24:42
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$


def shop(where='store',
         what='pasta',
         howmuch='10 pounds'):
    print('I want you to go to the ' + where)
    print('and buy ' + howmuch + ' of ' + what + '.')
shop()

shop(where='xianju', howmuch='30 pounds')
