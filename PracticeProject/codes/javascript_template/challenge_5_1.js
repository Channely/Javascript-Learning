var people = prompt('我们有多少人?(请输入一个数字)');

if(1 < people && people <= 5){
    console.log("我们去打网球吧!")
}
if(5 < people && people <= 10){
    console.log("我们去玩篮球吧!")
}
if(10 < people && people <= 20){
    console.log("我们去踢足球吧!")
}
if(20 < people){
    console.log("我也不知道该怎么办。")
}