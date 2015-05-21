#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-21 23:24:23
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

import os

def make_story(line,fname='story.txt'):
    if os.path.isfile(fname):
        print(fname+' already exists')
    else:
        f=open(fname,'w')
        f.write('Mary had a little lamb,\n')
        f.write('and then she had some more.\n')
make_story('abc\n')
