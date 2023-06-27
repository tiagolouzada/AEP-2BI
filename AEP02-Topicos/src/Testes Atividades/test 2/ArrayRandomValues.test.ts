import { describe, expect, test } from '@jest/globals';
import { ErrorMessages } from '../../Atividade 01/errorMessages.enum'
import { ArrayRandomValue } from '../../Atividade 02/ArrayRandomValues';
import { ProductType } from '../../Atividade 02/Types/productType.type';

describe('ArrayRandomValue', () => {
  let arrayRandomValue: ArrayRandomValue;
  let mockProdutos: ProductType[];

  beforeEach(() => {
    arrayRandomValue = new ArrayRandomValue();
    mockProdutos = [
      { nome: 'Produto 1', qtde: 1, preco: 11 },
      { nome: 'Produto 2', qtde: 2, preco: 12 },
      { nome: 'Produto 3', qtde: 3, preco: 13 },
      { nome: 'Produto 4', qtde: 4, preco: 14 },
      { nome: 'Produto 5', qtde: 5, preco: 15 },

    ];
  });

  test('Definindo Array de Produtos', () => {
    arrayRandomValue.setProdutos(mockProdutos);
    expect(arrayRandomValue.getProdutos()).toEqual(mockProdutos);
  });

});
