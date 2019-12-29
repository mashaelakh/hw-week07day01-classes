class RunTracker{
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.run = [];
    }
    addRun(date, time ,distance)
    {
        this.run.push({
            date:date,
            time: time,
            distance: distance 
            })
    }
    totalDistance()
    {
    let total = this.run.reduce((prev,curr) => prev.distance + curr.distance)
    console.log(total)
    return total;
    }
    longestDistance()
     {
         let maximum =this.run.reduce((prev,curr) => prev.distance > curr.distance ? prev.distance : curr.distance )
         console.log(maximum)
         return maximum
     }
    averageSpeed(){
        let totalDist= this.run.reduce((prev,curr)=>prev.distance+curr.distance)
        let totalTime = this.run.reduce((prev,curr)=>prev.time+curr.time)
        let avg = totalDist / totalTime
        console.log(avg)
        return avg;
    }
}
// const myRunTracker = new RunTracker(“mashael”,"mashael@cc.com”)
// console.log(myRunTracker,run)
const runner = new RunTracker(“Salman”, “Salman@salman.com”);
runner.addRun(“2017-01-01", 10, 30)
runner.addRun(“2017-01-02”, 5, 20)
runner.totalDistance() // 50 meters
 runner.longestDistance() // 30 meters
 runner.averageSpeed() // 0.3 meters per second 3.33