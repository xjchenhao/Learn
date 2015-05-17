#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-17 17:25:52
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

import re


def is_funny(s):
    return re.match('(ha)+!+', s) != None
print(is_funny(raw_input('input：')))
