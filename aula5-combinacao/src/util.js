class Util {
    static timeout(tempo){
        return new Promise(resolve => 
            {
                console.log('resolve',resolve)
                setTimeout(resolve, tempo)
            }
        )
    }
}