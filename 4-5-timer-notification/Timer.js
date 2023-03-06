import {Notification} from "node-notifier"
export class Timer {
    constructor(h,m,s) {
        const sec = Number(this.parseTime(s))
        const min = Number(this.parseTime(m))
        const hrs = Number(this.parseTime(h))
        this.totalMileSec = (sec + (min * 60) + (hrs * 3600)) * 1000

    }
    parseTime(rawTime) {
        return rawTime.replaceAll(/[A-z]/g, "")
    }
    startTimer() {
        this.timer = setTimeout(this.alert, this.totalMileSec,"Пора....")
    }
    alert(message) {
        clearTimeout(this.timer)
        Notification({
            sound:true
        }).notify({message:"Пора..."})
        console.log(message)
    }
}
