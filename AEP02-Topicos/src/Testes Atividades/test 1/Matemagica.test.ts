import { describe, expect, test } from '@jest/globals';
import { Matemagica } from '../../src/Atividade 01/Matemagica'
import { ErrorMessages } from '../../src/Atividade 01/errorMessages.enum'

describe('Adicao', () => {
    test('Soma de dois numeros', () => {
        const matemagica = new Matemagica()
        matemagica.setA(2)
        matemagica.setB(2)
        
        expect(matemagica.getAdicao()).toBe(4)
    }), 

    test('Soma de numero com String', () => { 
        const matemagica = new Matemagica()
        matemagica.setA(1)
        // @ts-ignore
        matemagica.setB('Test')

        expect(matemagica.getAdicao()).toBe(ErrorMessages.ENUM_ERRO_ADICAO)
    })
})


describe('Subtracao', () => { 

    test('Subtracao de dois numeros', () => {
        const matemagica = new Matemagica()
        matemagica.setA(5)
        matemagica.setB(2)

        expect(matemagica.getSubtracao()).toBe(3)
    }), 

    test('Subtracao de numero com String', () => { 
        const matemagica = new Matemagica()
        matemagica.setA(1)
        // @ts-ignore
        matemagica.setB('teste')

        expect(matemagica.getAdicao()).toBe(ErrorMessages.ENUM_ERRO_SUBTRACAO)
    })
})


describe('Divisao', () => { 

    test('Divisao de dois numeros', () => {
        const matemagica = new Matemagica()
        matemagica.setA(6)
        matemagica.setB(2)

        expect(matemagica.getSubtracao()).toBe(3)
    }), 

    test('Divisao de numero com String', () => { 
        const matemagica = new Matemagica()
        matemagica.setA(1)
        // @ts-ignore
        matemagica.setB('teste')

        expect(matemagica.getAdicao()).toBe(ErrorMessages.ENUM_ERRO_DIVISAO)
    })
})


describe('Multiplicacao', () => { 

    test('Multiplicacao de dois numeros', () => {
        const matemagica = new Matemagica()
        matemagica.setA(2)
        matemagica.setB(2)

        expect(matemagica.getSubtracao()).toBe(4)
    }), 

    test('Divisao de numero com String', () => { 
        const matemagica = new Matemagica()
        matemagica.setA(1)
        // @ts-ignore
        matemagica.setB('teste')

        expect(matemagica.getAdicao()).toBe(ErrorMessages.ENUM_ERRO_MULTIPLICACAO)
    })
})