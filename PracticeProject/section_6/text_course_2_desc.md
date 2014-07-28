在循环中有时会需要中途退出，为此可以使用break语句.
break 命令可以终止循环的运行， 然后继续执行循环之后的代码.
下面是使用break和不使用break的两个for循环的两个例子.

    //  使用break跳出循环
    for(var i = 0;i<10;i++){
        if(i==3){
            break;
        }
        console.log(i);
    }
    console.log("循环结束");

结果是:

    console > 0
    console > 1
    console > 2
    console > 循环结束

可见，循环过程中，break语句被执行后，会停止该循环语句的执行，继续执行循环语句后面的代码.

    //  未使用break
    for(var i = 0;i<10;i++){
        console.log(i);
    }
    console.log("循环结束");

结果是:

    console > 0
    console > 1
    console > 2
    console > 3
    console > 4
    console > 5
    console > 6
    console > 7
    console > 8
    console > 9
    console > 循环结束

可见，循环过程中，循环没有被break中断，该循环会执行完满足循环条件的所有循环，然后继续执行循环后的代码.

那么