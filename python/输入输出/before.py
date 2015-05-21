#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-21 23:49:31
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

import os
def insert_title(title,fname='story.txt'):
    f=open(fname,'r+')
    temp=f.read()
    temp=title+'\n\n'+temp
    f.seek(0) #让文件指针指向文件开头
    f.write(temp)
insert_title('qqqqq')
