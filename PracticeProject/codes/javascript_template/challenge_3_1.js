//在第二行代码中两个数字之间添加一个算数运算符,使计算结果的值大于 10000
var result = 400  400;
console.log(result);
console.log(result++); //result先参与代码的执行,然后自己的值累加1.
console.log(++result); //result先将自己的值累加一,再参与代码执行.

- 数学成绩不好的人也不必担心,因为程序员所用到的数学运算技巧是很基础的.有时候数学运算的存在只是对代码流程控制的辅助.比如我们后面会接触的for循环结构:\n\r\t\tfor(var i = 0; i < 5; i++){\n\r\t\t    console.log(i);\n\r\t\t}\n\r- 但更多的情况下我们用数学运算去处理代码中的真实数据.比如计算平均成绩:\n\r\t\tvar scores = [78, 80, 85, 94];\n\r\t\tvar average = (scores[0] + scores[1] + scores[2] + scores[3]) \/ 4;\n\r- 学习中我们使用过递加(++)和递减(--)运算符.如\n\r\t\tvar x,y=5,z;\n\r\t\tx = ++y;  \/\/6\n\r\t\tz = --y;  \/\/5\n\r- 但同样情况下\n\r\t\tvar x,y=5,z;\n\r\t\tx = y++;  \/\/5\n\r\t\tz = y--;  \/\/6\n\r- 这是由于 递加++ 递减-- 的位置对运算顺序是有影响的\n\r\t\tx = y++;\n\r- 会先用y的原值(5)参与赋值运算,然后y值递加1(6).\n\r\t\tx = ++y;\n\r会先将y值(5)递加1,然后(6)再参与赋值运算.