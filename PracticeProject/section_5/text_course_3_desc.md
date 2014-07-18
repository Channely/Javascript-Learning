当有多种情况需要判断,从而根据结果选择出需要执行的语句时,我们需要使用 else if 的结构.

语法

    // 格式 : else if .
    // 当 condition1 的值为 true 时, statement1 会被执行.
    // 否则, 将继续对 condition2 进行判断 .
    // 如果 condition2 的值是 true, statement2 将会被执行.
    // 否则, 当没有判断结果成立时 , statement3 将会被执行.
    if (condition1) {
      statement1;
    } else if (condition2) {
      statement2;
    } else {
      statement3;
    }

例子

    if (number > 0) {
      console.log("Number是一个正数.");
    } else if (number < 0) {
      console.log("Number是一个负数.");
    } else {
      console.log("Number的值是0!");
    }

