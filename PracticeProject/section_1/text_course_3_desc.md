JavaScript 不会执行注释。

我们可以添加注释来对 JavaScript 进行解释，以提高代码的可读性.或者我们可以注释掉某段代码，帮助我们调试程序。

多行注释以 /* 开始，以 */ 结尾。例如:

[1]添加注释描述:

    /*
    这是在声明一个变量
    并给该变量赋值
    每行的句末分号可以略去不写
    */
    var phone;
    phone = '01012345678';

[2]禁用某段代码(输出结果只有: Line3 ):

    /*
    console.log('Line 1');
    console.log('Line 2');
    */
    console.log('Line 3');
