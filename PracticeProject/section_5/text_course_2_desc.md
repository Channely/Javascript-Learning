如果想某一条件成立时执行一段特定代码,而条件不成立时执行另一段特定代码,我们可以使用 if....else 语句.

语法

    // 当 condition 的结果是 true 时, statement1 将会被执行.
    // 否则,statement2 将会被执行.

    if (condition) {
        statement1;    //当 condition 的值为 true 时, statement1 被执行.
    } else {
        statement2;    //当 condition 的值为 false 时, statement2 被执行.
    }

例子

    var gender = prompt("你的性别?");
    if (gender == "男") {
        console.log("Hi, boy!");
    } else {
        console.log("Hi, girl!");
    }