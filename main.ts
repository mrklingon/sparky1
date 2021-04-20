input.onButtonPressed(Button.A, function () {
    EyesRight.showImage(0)
    pins.servoWritePin(AnalogPin.P2, Angles[RightArm])
    basic.pause(500)
    Eyes.showImage(0)
    RightArm += 1
    if (RightArm > 3) {
        RightArm = 0
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "L") {
        EyesLeft.showImage(0)
        pins.servoWritePin(AnalogPin.P2, Angles[LeftArm])
        basic.pause(500)
        Eyes.showImage(0)
        LeftArm += 1
        if (LeftArm > 3) {
            LeftArm = 0
        }
    }
    if (receivedString == "R") {
        EyesRight.showImage(0)
        pins.servoWritePin(AnalogPin.P1, Angles[RightArm])
        basic.pause(500)
        Eyes.showImage(0)
        RightArm += 1
        if (RightArm > 3) {
            RightArm = 0
        }
    }
})
input.onButtonPressed(Button.B, function () {
    EyesLeft.showImage(0)
    pins.servoWritePin(AnalogPin.P1, Angles[LeftArm])
    basic.pause(500)
    Eyes.showImage(0)
    LeftArm += 1
    if (LeftArm > 3) {
        LeftArm = 0
    }
})
let Angles: number[] = []
let LeftArm = 0
let RightArm = 0
let EyesLeft: Image = null
let EyesRight: Image = null
let Eyes: Image = null
radio.setGroup(1)
pins.servoWritePin(AnalogPin.P1, 20)
pins.servoWritePin(AnalogPin.P2, 160)
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
RightArm = 0
LeftArm = 2
Eyes.showImage(0)
Angles = [20, 90, 160, 90]
