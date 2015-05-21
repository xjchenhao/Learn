#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-21 23:45:21
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

import os
def add_to_story(line,fname='story.txt'):
    f=open(fname,'a')
    f.write(line)
add_to_story('abc\n')

