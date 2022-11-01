function VERT () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1)
    pins.analogWritePin(AnalogPin.P8, 0)
}
function BLEU () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P8, 1)
}
function ROUGE () {
    pins.analogWritePin(AnalogPin.P1, 1)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P8, 0)
}
basic.forever(function () {
	
})
