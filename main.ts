input.onButtonPressed(Button.A, function () {
    last_time = press_time
    press_time = input.runningTime()
    delta = press_time - last_time
    predicted_delta = predicted_delta * update_rate + delta * (1 - update_rate)
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
let last_time = 0
let press_time = 0
let update_rate = 0
update_rate = 0.9
press_time = 0
basic.forever(function () {
    if (flash_time + predicted_delta < input.runningTime()) {
        flash_time = input.runningTime()
        flash()
    }
})
