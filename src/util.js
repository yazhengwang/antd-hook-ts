
/**
 * 获取文件后缀名
 * @param {String} filename
 */
 export function getExt(filename) {
    if (typeof filename == 'string') {
        return filename.split('.').pop().toLowerCase()
    } else {
        throw new Error('filename must be a string type')
    }
}

/**
 * 复制内容到粘贴板
 * @param {String} value
 */
export function copyToBoard(value) {
    const element = document.createElement('textarea')
    document.body.appendChild(element)
    element.value = value
    element.select()
    if (document.execCommand('copy')) {
        document.execCommand('copy')
        document.body.removeChild(element)
        return true
    }
    document.body.removeChild(element)
    return false
}

/**
 * 休眠xxxms
 * @param {Number} milliseconds
 */
 export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

//使用方式
// const fetchData:FC =async()=>{
//   await sleep(1000)
// }

/**
 * 生成随机id
 * 第一个参数指定位数，第二个字符串指定字符，都是可选参数，如果都不传，默认生成8位
 * @param {*} length
 * @param {*} chars
 */
 export function uuid(length, chars) {
    chars =
        chars ||
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    length = length || 8
    var result = ''
    for (var i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)]
    return result
}

/**
 *深拷贝
 * @export
 * @param {*} obj
 * @returns
 */
 export function deepCopy(obj) {
    if (typeof obj != 'object') {
        return obj
    }
    if (obj == null) {
        return obj
    }
    return JSON.parse(JSON.stringify(obj))
}

/**
 * 数组去重
 * @param {*} arr
 */
 export function uniqueArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('The first parameter must be an array')
    }
    if (arr.length === 1) {
        return arr
    }
    return [...new Set(arr)]
}

/**
 * 对象转化为formdata
 * @param {Object} object
 */

 export function getFormData(object) {
    const formData = new FormData()
    Object.keys(object).forEach(key => {
        const value = object[key]
        if (Array.isArray(value)) {
            value.forEach((subValue, i) =>
                formData.append(key + `[${i}]`, subValue)
            )
        } else {
            formData.append(key, object[key])
        }
    })
    return formData
}

// 保留小数点以后几位，默认2位
export function cutNumber(number, no = 2) {
    if (typeof number != 'number') {
        number = Number(number)
    }
    return Number(number.toFixed(no))
}