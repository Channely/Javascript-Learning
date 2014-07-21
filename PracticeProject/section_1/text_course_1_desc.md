' ; '分号在js代码中不是必需的,例如:

    var name = 'Tom';
    var age = 16;

等价于:

    var name = 'Tom'
    var age = 16

但当多条语句写于一行时(如下),必须加分号

    var name = 'Tom'; var age = 16

同一行代码中,语句之间必须以分号间隔.

注: 声明变量:正如代数运算中 x=5, y=6, z=x+y  的'变量' x y z 一样, JavaScript 变量用于保存数据值.
我们可以给变量起一个简短名称,比如 x, 或者更有描述性的名称, 比如 name.
在 JavaScript 中创建变量经常被称为“声明”变量.需要通过 var 语句来声明 JavaScript 变量:

    var x;
    var name;

声明之后, 变量并没有值, 不过我们可以在声明变量时向变量赋值:

    var x=5;
    var name="Tom";

请回答:

