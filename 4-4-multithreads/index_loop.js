import { performance, PerformanceObserver } from 'perf_hooks';

const performanceObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
        console.log(`${entry.name}: ${entry.duration}`);
    });
});

counter = performance.timerify(counter)
performanceObserver.observe({ entryTypes: ['function'] });
const getFullArray = () => {
    const array = [];
    for (let i = 1; i < 30000001; i++){
        array.push(i)
    }
    return array
}


function counter (array){
    const resultArr = []
    array.forEach((el) => {
        if (el % 3 === 0) {
            resultArr.push(el)
        }
    })
    return resultArr
}
console.log(counter(getFullArray())) // ~ counter: 360.14219999313354
