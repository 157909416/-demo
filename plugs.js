function isNow() {
    let selects = document.querySelectorAll('select') // 获取所有下拉列表
    let len = selects.length
    setTimeout(() => {
        isNow()
        getSelectAll()
    },500)
    for (let i = 0; i < len; i++) {
        selects[i].addEventListener('change', () => {
            getSelectAll()
        })
    }
}
function getSelectAll() { // 获取所有下拉列表的值函数
    let yearValue = year.options[year.selectedIndex].value // 年的值
    let monthValue = month.options[month.selectedIndex].text // 月的值
    let dayValue = day.options[day.selectedIndex].value // 天的值
    let hourValue = hour.options[hour.selectedIndex].value // 小时的值
    let miniteValue = minite.options[minite.selectedIndex].value // 分钟的值
    let secondValue = second.options[second.selectedIndex].value // 秒的值
    let optionDay = `${yearValue}/${monthValue}/${dayValue} ${hourValue}:${miniteValue}:${secondValue}`
    console.log(optionDay)
    resultTime(optionDay)
}
function resultTime(optionDay) {
    let Time = new Date()
    let nowTime = Time.getTime() // 当前到1970年ms
    let clooseTime = Date.parse(optionDay)
    getIntervalDay(nowTime,clooseTime)

}
function getIntervalDay(nowTime, clooseTime) {
    let ms = nowTime - clooseTime
    let Day = Math.floor(ms / 1000 / 60 / 60 / 24) // 向下取整 天数
    let hour = (ms / 1000 / 60 / 60 / 24) - Day
    let Hour = hour * 24 // 小时数
    //    求分钟差是（没向下取整的小时 - 向下取整的小时）*60
    let mini = Hour - Math.floor(Hour)
    let Mini = mini * 60
    //    求秒差是（没向下取整的分钟 - 向下取整的分钟）*60
    let second = Mini - Math.floor(Mini)
    let Second = second * 60
    if (nowTime > clooseTime) {
        // 所选时间之前
        result.innerHTML = `现在距离 "所选时间" 已经过去 ${Day} 天 ${Math.floor(Hour)} 小时 ${ Math.floor(Mini) } 分 ${ Math.floor(Second) } 秒`
    } else {
        // 所选时间之后
        result.innerHTML = `现在距离 "所选时间" 还有 ${-Day} 天 ${Math.floor(Hour)} 小时 ${ Math.floor(Mini) } 分 ${ Math.floor(Second) } 秒`
    }
}