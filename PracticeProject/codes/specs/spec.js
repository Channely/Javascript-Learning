var
    send_signal_by_testing_result_of = {
        '注释符号': function () {
            send_result_by(catch_the_spec_error_of(index_1))
        },
        '容器': function () {
            send_result_by(catch_the_spec_error_of(index_2_1))
        },
        '背景区块': function () {
            send_result_by(catch_the_spec_error_of(index_2_2))
        },
        '栅格系统': function () {
            send_result_by(catch_the_spec_error_of(index_2_3))
        },
        '文字排版': function () {
            send_result_by(catch_the_spec_error_of(index_3))
        },
        '按钮': function () {
            send_result_by(catch_the_spec_error_of(index_4))
        },
        '图标': function () {
            send_result_by(catch_the_spec_error_of(index_5))
        },
        '列表': function () {
            send_result_by(catch_the_spec_error_of(index_6))
        }
    }

function index_1() {
    return typeof(my_name) == 'string' && my_name != "";
}
function index_2_1() {
    return true;
}
function index_3() {
    return true
}
function index_4() {
    return true
}
function index_5() {
    return true
}
function index_6(){
    return true
}

//================logic method=======================
function pass_game() {
    source.postMessage(true, "http://" + window.location.host)
}
function unpass_game() {
    source.postMessage(false, "http://" + window.location.host)
}
function send_result_by(result) {
    result ? pass_game() : unpass_game();
}
function catch_the_spec_error_of(code_block) {
    try {
        var result =  code_block()
        return result;
    } catch (err) {
        console.log('SPEC ERROR:' + err.description)
        return false;
    }
}
