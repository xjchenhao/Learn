#!/usr/bin/env python
# -*- coding: utf-8 -*-

# name = raw_input(u'请输入名字:');
# print 'hello,'+name

# print u'我是中文'    

# classmates = ['Michael', 'Bob', 'Tracy']
# print len(classmates)
# print classmates[2]
# classmates.append('Adam')
# print classmates
# classmates.insert(1,'insert')
# print classmates
# classmates.pop()
# print classmates
# classmates.pop(1)
# print classmates
# classmates[0]='abcdefg'
# print classmates

# age=int(raw_input('age:'))
# if age >= 40:
#     print u'壮年'
# elif age>=30:
#     print u'中年'
# elif age>=18:
#     print u'青年'
# else:
#     print u'未成年'

# x=()
# if x:
#     print 'true'
# else:
#     print 'false'

# name=[u'张三',u'李四',u'王五']
# for x in name
#     print x

# def calc(*numbers):
#     sum=0
#     for x in numbers:
#         sum=sum+x
#     return sum
# print calc(1,2,3,4)
# value=[1,2]
# print calc(*value)

# def func(a, b, c=0, *args, **kw):
#       print  'a =', a, 'b =', b, 'c =', c, 'args =', args, 'kw =', kw
# func(1, 2, 3, 'a', 'b', x=99)

# def func(n):
#     i=0
#     value=[]
#     while i<n:
#         i=i+1
#         value.append(i)
#     return value
# print func(100)

# L=range(100)
# L=L[:3]
# print L

# print 'ABCDEFG'[:3]

def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        print b
        a, b = b, a + b
        n = n + 1
fib(6)