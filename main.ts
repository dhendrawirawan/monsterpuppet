input.onSound(DetectedSound.Loud, function () {
    speak = 0
})
input.onSound(DetectedSound.Quiet, function () {
    speak = 1
})
let speak = 0
speak = 1
input.setSoundThreshold(SoundThreshold.Loud, 100)
basic.forever(function () {
    if (speak == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
    }
})
