javascript中的数据共分两种 - 简单数据 和 复杂数据。简单数据只有undefined，null，boolean，number和string这五种。复杂数据只有一种，即object。

javascript中的代码只有一种形式，就是function。数据 和 代码 就是构成javascript世界的基本元素。

先来说说其中的简单数据类型。

[1] **undefined** : 这个值表示变量不含有值。

若 typeof(data) 的返回值是字符串 'undefined' ，即变量data的数据类型是 undefined。即data不含有值。[ 注:typeof是javascript提供的运算符，运行后会返回括号之中数据的数据类型。如 typeof('hello') 返回结果是 'string'，则'hello'的类型是 字符串。]

[2] **null** : 这个值表示变量为空。

若 typeof(data) 的返回值是字符串 'null' ，即变量data的数据类型是 null。即data为空。undefined 和 null 的区别是:typeof(undefined) 返回值是 'undefined'，typeof(null) 返回值是字符串 'object'(对象类型)。

[3] **boolean** : true 或 false 代表布尔值。

    var data = true;
    
typeof(data) 返回值是字符串 'boolean' ，即变量data的数据类型是 布尔值。

[4] **number** : javascript 只有一种数字类型。数字可以带小数点，也可以不带。如:123 和12.3
 
    var data = 123;
    
typeof(data) 返回值是字符串 'number' ，即变量data的数据类型是 数字。

[5] **srting** : 前面我们说起过，字符串是字符的载体，而且必须被成对的引号包围。 如: 'hello world!'

    var data = 'hello world!';
    
typeof(data) 返回值是字符串 'string' ，即变量data的数据类型是 字符串。

请回答: