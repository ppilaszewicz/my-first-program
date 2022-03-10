input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C E - F E G D B ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(9)
})
basic.showIcon(IconNames.Skull)
basic.forever(function () {
	
})
