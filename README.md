# iython


##Iython简介

Iython是一门语法有点像python的解释型编程语言，其第一个解释器由
[seektruth](http://seektruth.github.io)用JavaScript实现,Iython是弱类型的，它支持循环、变量的局部作用域，内置了链表和字典的数据结构，在Iython中函数是一等公民，这意味着我们可以把函数赋值给一个变量，Iython也支持闭包和lambda,内置的函数包括range、print、map、reduce

##实现

实现使用了语法分析工具[antlr4](),antlr4文件夹里的内容是其JavaScript的运行库，parser、visitor、listen、lexer是工具生成的，iython.g是语法定义，buildin.g是语法定义，interpreter.js定义了解释器的具体行为，buildin.js定义了内置的函数。


##使用

要使用Iython，你首先需要安装[node](),然后修改iython.js里的program变量，这是需要解释的程序。然后

`node iython.js` 

之后可以看到结果