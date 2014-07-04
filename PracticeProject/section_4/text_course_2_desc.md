逻辑运算符用于测定变量或数据值之间的逻辑

本节我们将开始接触逻辑运算符的使用.

逻辑运算符不多,只有三种:

    &&  ||  !

也就是我们数学课本中的 "与","或","非".

用法说明:

&& 与 例如

    true && true    //为 true
    true && false   //为 false
    false && false  //为 false
    (0 < 10 && 0 > -1) //为 true

|| 或 例如

    true || true     //为 true
    true || false    //为 true
    false || false   //为 false
    (0 > 10 || 0 < -1) //为 false

!  非 例如

    !true     //为 false
    !false    //为 true
    !(0 >10)  //为 true

那么,下一行代码会在console中输出的boolean值是?