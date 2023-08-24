import moment from "moment"

export function lowerCaseIncludes(mainStr, searchStr) {
    //console.log(mainStr + searchStr)
    try{
        let lowerStr = mainStr.toLowerCase()
        //console.log(mainStr + "  " + searchStr)
        //console.log(lowerStr.includes(searchStr))
        return  lowerStr.includes(searchStr)
    }catch(e){
        console.log(mainStr + " " + searchStr)
    }
}
export function prevDayInstance(date, dayInt){
    return moment(date).isoWeekday() == dayInt ? date : moment(date).subtract(1, "week").isoWeekday(dayInt)
}
