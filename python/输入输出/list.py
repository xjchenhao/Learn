#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-21 22:45:39
# @Author  : chenhao (wy.chenhao@qq.com)
# @Link    : http://www.xjchenhao.cn
# @Version : $Id$

import os


# 获悉当前工作目录中的文件和文件夹
def list_cwd():
    return os.listdir(os.getcwd())
print(list_cwd())


# 返回当前工作目录中的文件
def files_cwd():
    return [p for p in list_cwd() if os.path.isfile(p)]
print(files_cwd())

# 返回当前工作目录中的文件夹
def folders_cwd():
    return [p for p in list_cwd() if os.path.isdir(p)]
print(folders_cwd())

# 获悉当前工作目录中的.py文件
def list_py(path=None):
    if path == None:
        path = os.getcwd()
    else:
        pass
        # 指定的目录视为目标文件夹
    return [fname for fname in os.listdir(path) if os.path.isfile(fname) if fname.endswith('.py')]
print(list_py())

# 返回当前工作目录中所有文件的大小总和
def size_in_bytes(fname):
    return os.stat(fname).st_size

def cwd_size_in_bytes():
    total = 0
    for name in files_cwd():
        total = total + size_in_bytes(name)
    return total
print(cwd_size_in_bytes())
