input.onButtonPressed(Button.A, function () {
    let last_time = press_time
    press_time = input.runningTime()
    delta = press_time - last_time
    predicted_delta = predicted_delta * 0.5 + delta * 0.5
})
function flash () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    control.waitMicros(10000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
let flash_time = 0
let predicted_delta = 0
let delta = 0
let press_time = 0
press_time = 0
basic.forever(function () {
    if (flash_time + predicted_delta < input.runningTime()) {
        flash_time = input.runningTime()
        flash()
    }
})
