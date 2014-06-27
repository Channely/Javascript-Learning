var
    send_signal_by_testing_result_of = {
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
        '': function () {
            send_result_by(catch_the_spec_error_of(index_4))
        },
        '': function () {
            send_result_by(catch_the_spec_error_of(index_5))
        },
        '': function () {
            send_result_by(catch_the_spec_error_of(index_6))
        }
    }

function index_0() {
    console.info('Hello World!')
    return true;
}
function index_1() {
    console.info(name)
    return typeof(name) == 'string' && name != "";
}
function index_2_1() {
    var data = profile;
    var v_1 = typeof data['姓名'] === 'string';
    var v_2 = typeof data['学校'] === 'string';
    var v_3 = typeof data['学号'] === 'number';
    var v_4 = typeof data['专业'] === 'string';
    var v_5 = typeof logs[0] === 'number';
    console.info(v_1 && v_2 && v_3 && v_4 && v_5);
    return v_1 && v_2 && v_3 && v_4 && v_5;
}
function index_2_2() {
    return true
}
function index_4() {
    return true
}
function index_5() {
    return true
}
function index_6() {
    return true
}

//================logic method=======================
function pass_game() {
//    parent.report(true,"Success!")
    source.postMessage(true, "http://" + window.location.host)
}
function unpass_game() {
//    parent.report(true,"Unfortunate!")
    source.postMessage(false, "http://" + window.location.host)
}
function send_result_by(result) {
    result ? pass_game() : unpass_game();
}
function catch_the_spec_error_of(code_block) {
    try {
        var result = code_block()
        return result;
    } catch (err) {
        console.info('SPEC ERROR:' + err.description)
        return false;
    }
}
