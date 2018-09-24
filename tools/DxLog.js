
/**
 * 带时间和标签的打印器
 * @param {String} content 内容
 * @param {String} tag 标签
 * @param {String} type 类型 默认为log类型（log,info,error,warn）
 */
const DLog = (content = "", tag = "", type = "log") => {
    let date = new Date()
    switch (type) {
        case "log":
            console.log(`${date}:  ${tag}  ${content}`)
            break
        case "info":
            console.info(`${date}:  ${tag}  ${content}`)
            break
        case "error":
            console.error(`${date}:  ${tag}  ${content}`)
            break
        case "warn":
            console.warn(`${date}:  ${tag}  ${content}`)
            break
        default:
            console.log(`${date}:  ${tag}  ${content}`)
    }
}


export default DLog

