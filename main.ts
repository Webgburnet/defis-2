function Cligno_droit (temps: number) {
    temps_lumiere = 50
    repetition_lumiere = temps / temps_lumiere
    for (let index = 0; index < repetition_lumiere; index++) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(25)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(25)
    }
}
function stop (temps: number) {
    maqueen.motorStop(maqueen.Motors.All)
    Cligno_stop(temps)
    basic.pause(temps)
}
function reculer (temps: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    Cligno_recule(temps)
    stop(1)
}
function gauche (temps: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 150)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
    Cligno_gauche(temps)
    stop(1)
}
function Cligno_recule (temps: number) {
    temps_lumiere = 50
    repetition_lumiere = temps / temps_lumiere
    for (let index = 0; index < repetition_lumiere; index++) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(25)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(25)
    }
}
function Cligno_stop (temps: number) {
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
}
function Cligno_gauche (temps: number) {
    temps_lumiere = 50
    repetition_lumiere = temps / temps_lumiere
    for (let index = 0; index < repetition_lumiere; index++) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(25)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(25)
    }
}
function Cligno_avance (temps: number) {
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(temps)
}
function avancer (temps: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 150)
    Cligno_avance(temps)
    stop(1)
}
function droite (temps: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 150)
    Cligno_droit(temps)
    stop(1)
}
let repetition_lumiere = 0
let temps_lumiere = 0
basic.showIcon(IconNames.Yes)
let duree_etat = 250
avancer(duree_etat)
gauche(duree_etat)
avancer(duree_etat)
droite(duree_etat)
duree_etat = 750
avancer(duree_etat)
duree_etat = 250
basic.forever(function () {
	
})
