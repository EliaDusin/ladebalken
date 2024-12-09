let X = 0
let Y = 0
let Time = 1 * (60 * 1000) / 25
basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            basic.pause(Time)
            led.plot(X, Y)
            X += 1
        }
        Y += 1
        X = 0
    }
})
