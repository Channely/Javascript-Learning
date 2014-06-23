var
    send_signal_by_testing_result_of = {
        'HelloWorld': function () {
            send_result_by(catch_the_spec_error_of(index_0))
        },
        '注释符号': function () {
            send_result_by(catch_the_spec_error_of(index_1))
        },
        '': function () {
            send_result_by(catch_the_spec_error_of(index_2))
        },
        '': function () {
            send_result_by(catch_the_spec_error_of(index_3))
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
    console.log('HelloWorld')
    return true;
}
function index_1() {
    console.log(my_name)
    return typeof(my_name) == 'string' && my_name != "";
}
function index_2() {
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
