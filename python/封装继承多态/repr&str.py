#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-23 20:22:55
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

class Person1:
    """Class to represent a person"""
    def __init__(self):
        self.name=''
        self.age=0
    def display(self):
        print("Person1('%s',%s)" % (self.name,self.age))
        
p=Person1()
print(p)
print(str(p))
p.display()

class Person2:
    """Class to represent a person"""
    def __init__(self):
        self.name=''
        self.age=0
    def __str__(self):
        return "Person2('%s',%s)" % (self.name,self.age)
    def display(self):
        print("Person2('%s',%s)" % (self.name,self.age))
        
p=Person2()
print(p)
print(str(p))
p.display()

class Person3:
    """Class to represent a person"""
    def __init__(self):
        self.name=''
        self.age=0
    def __str__(self):
        return "Person3('%s',%s)" % (self.name,self.age)
    def display(self):
        print(str(self))
        
p=Person3()
print(p)
print(str(p))
p.display()

class Person4:
    """Class to represent a person"""
    def __init__(self):
        self.name=''
        self.age=0
    def __str__(self):
        return "Person4('%s',%s)" % (self.name,self.age)
    def __repr__(self):
        return "Person4('%s',%s)" % (self.name,self.age)
    def display(self):
        print(str(self))
        
p=Person4()
print(p)
print(str(p))
p.display()