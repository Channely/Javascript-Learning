var
    test_of = {
        'HelloWorld': function () {
            send_result_by(catch_the_spec_error_of(index_0))
        },
        '注释符号': function () {
            send_result_by(catch_the_spec_error_of(index_1))
        },
        '简单数据': function () {
            send_result_by(catch_the_spec_error_of(index_2_1))
        },
        '复杂数据': function () {
            send_result_by(catch_the_spec_error_of(index_2_2))
        },
        '算术运算符': function () {
            send_result_by(catch_the_spec_error_of(index_3))
        },
        '比较运算符': function () {
            send_result_by(catch_the_spec_error_of(index_4_1))
        },
        '逻辑运算符': function () {
            send_result_by(catch_the_spec_error_of(index_4_2))
        },
        'if语句': function () {
            send_result_by(catch_the_spec_error_of(index_5_1))
        },
        'else和if': function () {
            send_result_by(catch_the_spec_error_of(index_5_2))
        }
    }

function index_0() {
    return typeof logs[0] === 'string' && -1 < logs[0].search("ello") < logs[0].search("orld")
    // return typeof logs[0] != 'undefined' && typeof logs[0] != 'object';
}
function index_1() {
    return typeof(name) == 'string' && name != "" && typeof logs[0] == 'string';
}
function index_2_1() {
    var data = profile;
    var v_1 = typeof data['姓名'] === 'string';
    var v_2 = typeof data['学校'] === 'string';
    var v_3 = typeof data['学号'] === 'number';
    var v_4 = typeof data['专业'] === 'string';
    var v_5 = typeof logs[0] === 'number';
    return v_1 && v_2 && v_3 && v_4 && v_5;
}
function index_2_2() {
    var v_1 = my_profile[0] === profile["姓名"];
    var v_2 = my_profile[1] === profile["学校"];
    var v_3 = my_profile[2] === profile["学号"];
    var v_4 = my_profile[3] === profile["专业"];
    var log_message = logs[0];
    var v_5_1 = log_message.search(profile["姓名"]);
    var v_5_2 = log_message.search(profile["学校"]);
    var v_5_3 = log_message.search(profile["学号"]);
    var v_5_4 = log_message.search(profile["专业"]);
    var v_5 = -1 < v_5_1 < v_5_2 < v_5_4 < v_5_3;
    return v_1 && v_2 && v_3 && v_4 && v_5;
}
function index_3() {
    var v_1 = typeof(result) === "number" && result > 10000;
    var v_2 = logs[0].search(result-2) == 6;
    var v_3 = logs[1].search(result) == 12;
    return v_1 && v_2 && v_3;
}
function index_4_1() {
    var v_1 = logs[0]===true;
    var v_2 = logs[1]===true;
    var v_3 = logs[2]===true;
    var v_4 = logs[3]===true;
    return v_1 && v_2 && v_3 && v_4;
}
function index_4_2() {
    var v_1 = 100 >= profile.score && profile.score >= 60 && typeof(profile.score) === "number";
    var v_2 = logs[0] === '嘿Tom!你通过了本学期的Maths考试.';
    return v_1 && v_2;
}
function index_5_1() {
    var v1 = 10 < people && people <= 20;
    var v2 = logs[0] == "我们去踢足球吧!";
    return v1 && v2;
}
function index_5_2() {
    return true
}

//================logic method=======================
function pass_game() {
    parent.report(true, "Success!");
}
function unpass_game() {
    parent.report(false, "Unfortunate!");
}
function send_result_by(result) {
    result ? pass_game() : unpass_game();
}
function catch_the_spec_error_of(code_block) {
    try {
        var result = code_block();
        return result;
    } catch (err) {
        console.info('SPEC ERROR:' + err.description);
        return false;
    }
}
