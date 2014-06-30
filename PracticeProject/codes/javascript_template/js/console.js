var count = 0;
var logs = [];


console.log = function (arg) {
    var color;
    switch (typeof(arg)) {
        case "undefined":
            color = "dimgray";
            break;
        case "object":
            arg === null ? color = "dimgray" : color = "#000000";
            break;
        case "number":
            color = "darkblue";
            break;
        case "string":
            color = "#000000";
            break;
        case "boolean":
            color = "#000000";
            break;
        case "function":
            color = "#000000";
            break;
    }
    if(count>=0){
        logs[count] = arg;
        write_the_console_info_into_web_page(arg,color);
    }
    count++;
};

function write_the_console_info_into_web_page(arg,color){
// next line is the key code to show message on the web console.
    document.write("<h4 style='padding:15px;color: " + color + "'>" + arg + "</h4>");
}