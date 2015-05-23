#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-23 21:59:57
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

class Player(object):
    def __init__(self, name):
        self._name = name
        self._score=0
    def reset_score(self):
        self._score=0
    def incr_score(self):
        self._score=self._score+1
    def get_name(self):
        return self._name
    def __str__(self):
        return "name = '%s', score = %s" %(self._name,self._score)        
    def __repr__(self):
        return 'Player(%s)'% str(self)
p=Player('Moe')
print(p)
p.incr_score()
print(p)
p.reset_score()
print(p)

class Human(Player):
    def __repr__(self):
        return 'Human(%s)'% str(self)
h=Human('Jerry')
print(h)
h.incr_score()
print(h)
h.reset_score()
print(h)

class Computer(Player):
    def __repr__(self):
        return 'Computer(%s)'% str(self)
c=Computer('jian')
print(c)
c.incr_score()
print(c)
c.reset_score()
print(c)