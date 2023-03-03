function onLoad(){
    //console.log('carregou', Tela, MemoryGame)
    const dependencias = {
        tela: Tela
    }
    const heroi = new MemoryGame(dependencias)
    heroi.inicializar()
}

window.onload = onLoad