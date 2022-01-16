let result = 0
function caculator (num: number, 문자열: string, num2: number) {
    if ("*" == 문자열) {
        result = num * num2
    } else if ("/" == 문자열) {
        result = num / num2
    } else if ("+" == 문자열) {
        result = num + num2
    } else if ("-" == 문자열) {
        result = num - num2
    }
    return result
}
basic.forever(function () {
    basic.showNumber(caculator(10, "*", 20))
})
