//请给第六行中profile对象的grade属性添加一个合适的数字值.
//使console输出: 嘿Tom!你通过了本学期的Maths考试.
var profile = {
    name : "Tom",
    course : "Maths",
    grade :
};

console.log("嘿" + profile.name + "!你" + (profile.grade >= 60 ? "通过了" : "没通过") + "本学期的" + profile.course + "考试.");