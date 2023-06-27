import { ErrorMessages } from "./errorMessages.enum"


export class Matemagica {
    private a: Number
    private b: Number

    public constructor(){}

    // ADIÇÃO
    private adicao(): Number | String {
        if(typeof this.getA() !== 'number' || typeof this.getB() !== 'number') {
            return ErrorMessages.ENUM_ERRO_ADICAO
        }
        return Number(this.a) + Number(this.b)
    }

     // SUBTRAÇÃO
    private subtracao(): Number | String { 
        if(typeof this.getA() !== 'number' || typeof this.getB() !== 'number') {
            return ErrorMessages.ENUM_ERRO_SUBTRACAO
        }
        return Number(this.a) - Number(this.b)
    }

    // DIVISÃO
    private divisao(): Number | String { 
        if(typeof this.getA() !== 'number' || typeof this.getB() !== 'number') {
            return ErrorMessages.ENUM_ERRO_DIVISAO
        }
        return Number(this.a) / Number(this.b)
    }

    // MULTIPLICAÇÃO
    private multiplicacao(): Number | String { 
        if(typeof this.getA() !== 'number' || typeof this.getB() !== 'number') {
            return ErrorMessages.ENUM_ERRO_MULTIPLICACAO
        }
        return Number(this.a) * Number(this.b)
    }

    // -----------------

        // PUBLICS
    public getAdicao() {
        return this.adicao()
    }

    public getSubtracao() { 
        return this.subtracao()
    }

    public getDivisao() { 
        return this.divisao()
    }

    public getMultiplicacao() { 
        return this.multiplicacao()
    }


    // -----------------
        // SETs
    public setA(a: Number): void  {
        this.a = a
    }
    
    public setB(b: Number): void {
        this.b = b
    }

    // -----------------
        // GETs
    public getA() {
        return this.a
    }

    public getB() {
        return this.b
    }
}
