import dataUtilities from '../../utilities/dateUtilities';

// dataUtilities = Componente para formatação de datas
// Recebe um objeto de Date javascript e deve retornar uma string com formatod variados para cada método

function randomDateGenerator(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

describe('handle javascript dates', () => {
  it('returns a formatted string from a date object', () => {
    // Gerando uma data aleatória entre 01/01/1990 e 31/12/2030
    const randomDate = randomDateGenerator(new Date(1990, 0, 1), new Date(2030, 11, 31));

    const results = {
      noHoursResult: dataUtilities.getStringNoHours(randomDate),
      withHoursResult: dataUtilities.getStringWithHours(randomDate),
      rawWithHoursResult: dataUtilities.getRawStringWithHours(randomDate),
      transformStringResult: dataUtilities.transformString(String(randomDate.toLocaleDateString()).replace('/', '-'))
    };

    // Testes para o método getStringNoHours
    // Vericando se possui formato dd/mm/aaaa
    expect(results.noHoursResult).toHaveLength(10);
    expect(results.noHoursResult[2]).toMatch('/');
    expect(results.noHoursResult[5]).toMatch('/');
    expect(results.noHoursResult).toContain(String(randomDate.getDate()));
    expect(results.noHoursResult).toContain(String(randomDate.getMonth() + 1));
    expect(results.noHoursResult).toContain(String(randomDate.getFullYear()));

    // Testes para o método getStringWithHours
    // Vericando se possui formato 'dd/mm/aaaa  às 00:00'
    expect(results.withHoursResult).toHaveLength(23);
    expect(results.withHoursResult[2]).toMatch('/');
    expect(results.withHoursResult[5]).toMatch('/');
    expect(results.withHoursResult[12]).toMatch('à');
    expect(results.withHoursResult[13]).toMatch('s');
    expect(results.withHoursResult[17]).toMatch(':');
    expect(results.withHoursResult).toContain(String(randomDate.getDate()));
    expect(results.withHoursResult).toContain(String(randomDate.getMonth() + 1));
    expect(results.withHoursResult).toContain(String(randomDate.getFullYear()));
    expect(results.withHoursResult).toContain(String(randomDate.getHours()));
    expect(results.withHoursResult).toContain(String(randomDate.getMinutes()));
    expect(results.withHoursResult).toContain(String(randomDate.getSeconds()));

    // Testes para o método getRawStringWithHours
    // Vericando se possui formato 'dd/mm/aaaa 00:00'
    expect(results.rawWithHoursResult).toHaveLength(19);
    expect(results.rawWithHoursResult[2]).toMatch('/');
    expect(results.rawWithHoursResult[5]).toMatch('/');
    expect(results.rawWithHoursResult[13]).toMatch(':');
    expect(results.rawWithHoursResult).toContain(String(randomDate.getDate()));
    expect(results.rawWithHoursResult).toContain(String(randomDate.getMonth() + 1));
    expect(results.rawWithHoursResult).toContain(String(randomDate.getFullYear()));
    expect(results.rawWithHoursResult).toContain(String(randomDate.getHours()));
    expect(results.rawWithHoursResult).toContain(String(randomDate.getMinutes()));
    expect(results.rawWithHoursResult).toContain(String(randomDate.getSeconds()));

    // Testes para o método transformString (recebe uma data no formato dd-mm-aaaa)
    // Vericando se possui formato dd/mm/aaaa
    expect(results.transformStringResult).toHaveLength(10);
    expect(results.transformStringResult[2]).toMatch('/');
    expect(results.transformStringResult[5]).toMatch('/');
    expect(results.transformStringResult).toContain(String(randomDate.getDate()));
    expect(results.transformStringResult).toContain(String(randomDate.getMonth() + 1));
    expect(results.transformStringResult).toContain(String(randomDate.getFullYear()));

  });
});