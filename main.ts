input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    sorteio = randint(1, 3)
    if (sorteio == 1) {
        // PEDRA
        basic.showIcon(IconNames.Target)
    } else {
        if (sorteio == 2) {
            // PAPEL
            basic.showIcon(IconNames.Chessboard)
        } else {
            // TESOURA
            basic.showIcon(IconNames.Scissors)
        }
    }
})
let sorteio = 0
basic.showIcon(IconNames.House)
sorteio = 0
