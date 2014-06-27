javascript中的复杂数据类型只有一种,即 对象(object).

对象由花括号包围.在括号内部,属性以名称和值对的形式  name : value  来定义.属性间由逗号分隔.例如:

    var student={name:'Tom', finish_work:true, id:123};

上面例子中的对象 (student) 有三个属性：name、finish_work 以及 id.

空格和属性间的换行无关紧要.例如可以写成:

    var student = {
        name          : 'Tom',
        finish_work : true,
        id                : 123
    };

对象属性有两种获取方式:

    name = student.name;

或

    name = student['name'];

都可以将'Tom'取出来赋给变量name.

请回答:
