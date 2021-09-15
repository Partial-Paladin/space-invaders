input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        led.unplot(x, y)
        x = x - 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        led.unplot(x, y)
        x = x + 1
    }
})
let y = 0
let x = 0
x = 2
y = 4
let tower1 = 255
let Tower2 = 255
let Tower3 = 255
let spaceinvader1 = 0
let spaceinvader2 = 0
let spaceinvaderup = 1
loops.everyInterval(1000, function () {
    led.unplot(spaceinvader1, 0)
    if (spaceinvaderup == 1) {
        if (spaceinvader1 < 4) {
            spaceinvader1 = spaceinvader1 + 1
        } else {
            spaceinvaderup = 0
            spaceinvader1 = spaceinvader1 - 1
        }
    } else {
        if (spaceinvader1 > 0) {
            spaceinvader1 = spaceinvader1 - 1
        } else {
            spaceinvaderup = 1
            spaceinvader1 = spaceinvader1 + 1
        }
    }
})
basic.forever(function () {
    led.plot(spaceinvader1, spaceinvader2)
    led.plot(x, y)
    led.plotBrightness(0, 3, tower1)
    led.plotBrightness(2, 3, Tower2)
    led.plotBrightness(4, 3, Tower3)
})
