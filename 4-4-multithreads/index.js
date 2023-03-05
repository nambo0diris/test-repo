import { performance, PerformanceObserver } from 'perf_hooks';
import {exec} from "child_process";
import {Worker} from 'worker_threads'
const getNumberOfCores = () => {
    return new Promise((resolve, reject) => {
        const childProcess = exec("WMIC CPU Get NumberOfCores",(err, stdout) => {
            if(err){
                reject(err)
            }
            resolve(parseInt(stdout.match(/\d+/)))
        })
        childProcess.on("exit", (code) => {})
    })
}


const performanceObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
        console.log(`${entry.name}: ${entry.duration}`);
    });
});

performanceObserver.observe({ entryTypes: ['measure'] });
const getFullArray = () => {
    const array = [];
    for (let i = 1; i < 30000001; i++){
        array.push(i)
    }
    return array
}



function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

function compute(arr) {
    return new Promise((resolve, reject) => {
        const worker = new Worker("./4-4-multithreads/worker", {
            workerData: {
                arr
            }
        })
        worker.on("message",(msg) => {
            console.log(worker.threadId)
            resolve(msg)
        })
        worker.on("error",(err) => {
            console.log(err)
        })
        worker.on("exit",() => {
            console.log("Завершил работу")
        })
    })
}

const main = async () => {
    const newArray = getFullArray();
    getNumberOfCores()
        .then(async number => {
            const chunks = sliceIntoChunks(newArray, newArray.length/number)
            const result = []

            await Promise.all(chunks.map(async (value)=>{
                performance.mark("start")
                result.push(await compute(value))
            }))
            performance.mark("end")
            performance.measure("main","start", "end")
        })
}
main()