function stringLength(string) {
    let length = 0
    if (string.length > 0 && string.length < 10) {
        length = string.length;
    } else {
        throw `String size error`
    }
    return length
}

function reverseString(string) {
    let stringArray = []
    for (let i = string.length; i >= 0; i--) {
        stringArray.push(string[i])
    }
    return stringArray.join('')
}

function makeCamelCase(string) {
    let stringArray = string.split("")
    stringArray[0] = stringArray[0].toUpperCase()
    return stringArray.join("")
}

module.exports = { stringLength, reverseString, makeCamelCase }