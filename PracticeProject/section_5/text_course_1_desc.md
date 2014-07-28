当指定条件为 true 时，该语句才会执行其内部的代码。

语法:

    if (condition){
      //code that runs if the condition is true
    }

例子:

    //prompt("...")会在当前窗口弹出一个对话框，你提交的答案会被作为该语句执行的结果。
    var answer = prompt(" 3*3*3 = ? ");
    if (answer == 27) {
      console.log('恭喜你答对了。');
    }

当运行上面代码时，会有一个写有问题的弹出窗口，

填入对话框的答案将会作为 prompt 语句运行的结果赋值给 变量 answer，

然后通过if语句来判断答案是不是27，如果是的话，将在console中输出 字符串 "恭喜你答对了。"