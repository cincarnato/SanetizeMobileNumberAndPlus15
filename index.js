const prefixes = require('./prefixes.js')


export const splitPrefixNumber = function(number){
    number = number.toString()
    let prefix

    //Reviso 4 digitos
    prefix = number.slice(0,4)
    if(prefixes.four.includes(prefix)){
        return [ number.slice(0,4), number.slice(4,10)]
    }

    //reviso 3 digitos
    prefix = number.slice(0,3)
    if(prefixes.three.includes(prefix)){
        return [ number.slice(0,3), number.slice(3,10)]
    }

    //reviso 2 digitos
    prefix = number.slice(0,2)
    if(prefixes.two.includes(prefix)){
        return [ number.slice(0,2), number.slice(2,10)]
    }

    throw Error("Prefijo no encontrado")
}

export const getNumberWith15 = function(numero){

    if(numero.length != 10 )
        throw Error("El numero no tiene 10 digitos")

    let splitedNumber = splitPrefixNumber(numero)

    return splitedNumber[0]+'15'+splitedNumber[1]
}

export const sanetizeNumber = function(number){
    number = number.toString()
    //Quita guiones medios
    number = number.replace(/-/g,"")

    //Quita espacios
    number = number.replace(/\s/g,"")

    //Quito letras
    number = number.replace(/[a-zA-Z]/g,"")

    //Quita 0 adelante
    if(number[0] == '0')
        number = number.slice(1)

    //Quito 15
    if(/^\d{4}15/.test(number))
        number = number.slice(0,4) + number.slice(6,12)
    if(/^\d{3}15/.test(number))
        number = number.slice(0,3) + number.slice(5,12)
    if(/^\d{2}15/.test(number))
        number = number.slice(0,2) + number.slice(4,12)

    return number

}
