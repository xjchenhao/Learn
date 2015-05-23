#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-23 21:56:13
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

import time
 
def timeit(func):
    def wrapper():
        start = time.clock()
        func()
        end =time.clock()
        print 'used:', end - start
    return wrapper
 
@timeit
def foo():
    print 'in foo()'
 
foo()
