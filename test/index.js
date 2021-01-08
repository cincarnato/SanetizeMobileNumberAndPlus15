import {getNumberWith15, splitPrefixNumber, sanetizeNumber} from "../index";

const assert = require('assert');

describe("SplitNumber", () => {

    it('Dado un numero con prefijo de 4 digitos obtengo un array con el prefijo y el resto del numero', async () => {

        let numero = '2983453000'

        let result = splitPrefixNumber(numero)

        //Prefijo
         assert.strictEqual(result[0], '2983')

        //Resto del numero
         assert.strictEqual(result[1], '453000')
    })

    it('Dado un numero con prefijo de 4 digitos obtengo el numero con 15', async () => {

        let numero = '2983453000'

        let result = getNumberWith15(numero)
        console.log(result)
         assert.strictEqual(result, '298315453000')

    })

    it('Dado un numero con prefijo de 3 digitos obtengo el numero con 15', async () => {

        let numero = '3515540000'

        let result = getNumberWith15(numero)
        console.log(result)
        assert.strictEqual(result, '351155540000')

    })


    it('Dado un numero con prefijo de 2 digitos obtengo el numero con 15', async () => {

        let numero = '1133126978'

        let result = getNumberWith15(numero)
        console.log(result)
        assert.strictEqual(result, '111533126978')

    })

    it('Obtener error si no encuentra el prefijo en 4,3 o 2',  () => {

        let numero = '1233126978'

        assert.throws(function(){ getNumberWith15(numero) }, Error("Prefijo no encontrado"));

    })

    it('Obtener error si el numero no tiene 10 digitos',  () => {

        let numero = '123'

        assert.throws(function(){ getNumberWith15(numero) }, Error("El numero no tiene 10 digitos"));

    })

    it('Obtener numero de 10 digitos si viene con 0 adelante y 11 digitos en total',  () => {

        let numero = '01133126989'

        let result = sanetizeNumber(numero)

        assert.strictEqual(result,'1133126989')

    })

    it('Obtener numero de 10 digitos sanetizado si viene con guion medio',  () => {

        let numero = '011-3312-6989'

        let result = sanetizeNumber(numero)

        assert.strictEqual(result,'1133126989')

    })

    it('Obtener numero de 10 digitos sanetizado si viene con prefijo de 2 digitos y 15',  () => {

        let numero = '111522220000'

        let result = sanetizeNumber(numero)

        assert.strictEqual(result,'1122220000')

    })

    it('Obtener numero de 10 digitos sanetizado si viene con prefijo de 3 digitos y 15',  () => {

        let numero = '351153300000'

        let result = sanetizeNumber(numero)

        assert.strictEqual(result,'3513300000')

    })


    it('Obtener numero de 10 digitos sanetizado si viene con prefijo de 4 digitos y 15',  () => {

        let numero = '298315440000'

        let result = sanetizeNumber(numero)

        assert.strictEqual(result,'2983440000')

    })

    it('Obtener numero de 10 digitos sanetizado si viene con espacios',  () => {

        let numero = '11 3312 0000'

        let result = sanetizeNumber(numero)

        assert.strictEqual(result,'1133120000')

    })

    it('Obtener numero de 10 digitos sanetizado si viene con espacio, guion, 0 y 15',  () => {

        let numero = '011 15-33 12-0000'

        let result = sanetizeNumber(numero)

        assert.strictEqual(result,'1133120000')

    })

    it('Obtener numero de 10 digitos sanetizado si viene con letras',  () => {

        let numero = 'tito 011 15-33 12-0000 B'

        let result = sanetizeNumber(numero)

        assert.strictEqual(result,'1133120000')

    })
})
