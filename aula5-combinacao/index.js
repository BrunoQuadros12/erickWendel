function onLoad(){
    //console.log('carregou', Tela, MemoryGame)
    const dependencias = {
        tela: Tela,
        util: Util
    }
    const heroi = new MemoryGame(dependencias)
    heroi.inicializar()
}

window.onload = onLoad