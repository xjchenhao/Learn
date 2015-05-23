#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-23 20:57:55
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

class Person(object):
    def __init__(self, name='',age=0):
        self._name = name
        self._age=age

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self,age):
        if 0<age<=150:
            self._age=age

    def display(self):
        print(self)

    def __str__(self):
        return "Person('%s',%s)" % (self._name,self._age)
    
p=Person('Lia',33)
print(p)
p.age=55
print(p)
p.age=-1
print(p)