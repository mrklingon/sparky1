input.onButtonPressed(Button.A, function () {
    EyesRight.showImage(0)
    pins.servoWritePin(AnalogPin.P1, RightArm * 90)
    basic.pause(500)
    Eyes.showImage(0)
    RightArm += 1
    if (RightArm > 2) {
        RightArm = 0
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "L") {
        EyesLeft.showImage(0)
        pins.servoWritePin(AnalogPin.P2, LeftArm * 90)
        basic.pause(500)
        Eyes.showImage(0)
        LeftArm += 1
        if (LeftArm > 2) {
            LeftArm = 0
        }
    }
    if (receivedString == "R") {
        EyesRight.showImage(0)
        pins.servoWritePin(AnalogPin.P1, RightArm * 90)
        basic.pause(500)
        Eyes.showImage(0)
        RightArm += 1
        if (RightArm > 2) {
            RightArm = 0
        }
    }
})
input.onButtonPressed(Button.B, function () {
    EyesLeft.showImage(0)
    pins.servoWritePin(AnalogPin.P2, LeftArm * 90)
    basic.pause(500)
    Eyes.showImage(0)
    LeftArm += 1
    if (LeftArm > 2) {
        LeftArm = 0
    }
})
let LeftArm = 0
let RightArm = 0
let EyesLeft: Image = null
let EyesRight: Image = null
let Eyes: Image = null
radio.setGroup(1)
Eyes = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
EyesRight = images.createImage(`
    . . . . .
    # . # . .
    . . . . .
    . # # # .
    . . . . .
    `)
EyesLeft = images.createImage(`
    . . . . .
    . . # . #
    . . . . .
    . # # # .
    . . . . .
    `)
RightArm = 1
LeftArm = 1
Eyes.showImage(0)
