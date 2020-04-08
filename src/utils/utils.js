const utils = {
    isArray(arr) { //判断val是否是数组类型
        return Array.prototype.isPrototypeOf(arr);
    },
    insertStr(oldStr, index, newStr) { //在原来的字符串中插入一个新的字符串，并返回最后的结果
        var str = oldStr.slice(0, index) + newStr + oldStr.slice(index);
        return str;
    },
    checkNumber(num) { //验证手机号
        return /^1[3-9]\d{9}$/.test(num);
    },
    formatDate: function (date, format) {//格式化日期
        var time = Date.prototype.isPrototypeOf(date) ? new Date(date) : new Date(date.replace('-','/'));
        var o = {
            'M+': time.getMonth() + 1, //month
            'd+': time.getDate(), //day
            'h+': time.getHours(), //hour
            'm+': time.getMinutes(), //minute
            's+': time.getSeconds(), //second
            'q+': Math.floor((time.getMonth() + 3) / 3), //quarter
            'S': time.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
            }
        }
        return format;
    },
}