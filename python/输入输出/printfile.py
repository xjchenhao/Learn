#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-21 23:10:31
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

import os

#读取文本－每次读取一行
def print_file1(fname):
    f = open(fname, 'r')
    for line in f:
        print(line),
    f.close()  # 这行代码是可选的
print_file1('list.py')

#读取文本－将文件视为大型字符串
def print_file2(fname):
    f=open(fname,'r')
    print(f.read())
    f.close()
print_file2('list.py')
 
#更紧凑的方式
print(open('list.py','r').read())