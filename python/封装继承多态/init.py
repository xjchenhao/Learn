#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-23 20:48:33
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

class Person:
    def __init__(self,name='',age=0):
        self.name=name
        self.age=age
    def __str__(self):
        return "Person('%s',%s)"%(self.name,self.age)
a=Person()
print(a)
b=Person('abc',123)
print(b)
