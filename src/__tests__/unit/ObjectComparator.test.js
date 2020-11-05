import objectComparator from '../../utilities/objectComparator';

// Método para compatação de objetos

describe('Compares two objects', () => {
  it('returns true for equal and false for different', ()=>{
    // Criando dois objetos com valores numérios aleatórios
    const obj1 = {
      value1: Math.random() * 10,
      value2: Math.random() * 10,
    }

    const obj2 = {
      value1: Math.random() * 10,
      value2: Math.random() * 10,
      value3: Math.random() * 10,
    }

    expect(objectComparator.compareObj(obj1, obj1)).toBeTruthy();
    expect(objectComparator.compareObj(obj1, obj2)).toBeFalsy();

  });
});