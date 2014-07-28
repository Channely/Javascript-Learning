在javascript中，代码是自上而下执行的，但函数的声明代码不会被执行，只有在调用该函数时才会执行该函数内部的代码。

例如

    console.log("1");
    function write(){	//  声明一个函数(没有参数，且没有返回值)
        console.log("2");
    }
    console.log("3");
    write();			//  调用函数

上述代码的执行结果

    console >  1
    console >  3
    console >  2

当调用有参数和返回值的函数时，函数可以对传入的参数进行操作，然后将指定的结果返回。

    function get_sum(a, b){		//  声明函数(带有参数a，b)
        var result = a + b;
        return result;			//  返回值
    }
    var sum = get_sum(2, 3);	// 调用函数，将返回值5赋值给变量 sum
    console.log(sum);			// 在console输出变量的值 5

上述代码的执行结果

    console >  5

请根据下面代码回答一个提问: