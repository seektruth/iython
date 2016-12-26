# iython


##Iython简介

Iython是一门语法有点像python的解释型编程语言，其第一个解释器由
[seektruth](http://seektruth.github.io)用JavaScript实现,Iython是弱类型的，它支持循环、变量的局部作用域，内置了链表和字典的数据结构，在Iython中函数是一等公民，这意味着我们可以把函数赋值给一个变量，Iython也支持闭包和lambda,内置的函数包括range、print、map、reduce

##实现

实现使用了语法分析工具[antlr4](http://www.antlr.org/),parser、visitor、listen、lexer是工具生成的，iython.g是语法定义，interpreter.js定义了解释器的具体行为，buildin.js定义了内置的函数。



##使用

iython-complete.js是编译后的完整的代码，使用对其进行引用即可。

如果在浏览器使用，

`<script src="iython-complete.js"></script>`

对iython解释器进行引用，

然后调用

`run(program)`

函数就可以执行iython语言的解释，run函数的program参数就是程序字符串。run函数会返回解释的结果。

如果在node当中使用，直接在iython-complete.js当中编写调用run函数的d代码即可。

你可以在[这里](http://seektruth.github.io/iython/iython.html)看到更多的例子 