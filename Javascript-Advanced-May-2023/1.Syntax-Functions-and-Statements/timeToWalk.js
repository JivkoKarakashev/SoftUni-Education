function timeToWalk(steps, footPrintLength, speed) {

    const speedMetersPerSeconds = speed * 1000 / 3600                           //meters per second
    const routeLength = steps * footPrintLength;                                //meters
    const restDuration = Math.floor(routeLength / 500) * 60;                    //seconds
    const routeDuration = routeLength / speedMetersPerSeconds + restDuration;   //seconds

    let hours = Math.floor(routeDuration / 3600);
    let routeDurationLeft = routeDuration - hours * 3600;
    hours = String(hours).padStart(2, 0);

    let minutes = Math.floor(routeDurationLeft / 60);
    routeDurationLeft = routeDurationLeft - minutes * 60;
    minutes = String(minutes).padStart(2, 0)

    let seconds = Math.round(routeDurationLeft);
    seconds = String(seconds).padStart(2, 0)

    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5)
console.log('--------');
timeToWalk(2564, 0.70, 5.5)