const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('../src/stringUtils');

//inizio dei test 

//test su inversione: 

test('inversione di una stringa', () => {
    expect(reverseString('ciao')).toBe('oaic');
});

  test('inversione di una stringa con spazi', () => {
    expect(reverseString('come stai')).toBe('iats emoc');
});

test('inversione di una stringa vuota', () => {
    expect(reverseString('')).toBe('');
});

//test su parole palindrome
test('stringa palindroma', () => {
    expect(isPalindrome('anna')).toBe(true);
});

test('stringa non palindroma', () => {
    expect(isPalindrome('mamma')).toBe(false);
});

test('Ignora maiuscole', () => {
    expect(isPalindrome('Anna')).toBe(true);
});

test('Ignora spazi', () => {
    expect(isPalindrome('An na')).toBe(true);
});

//test di troncamento: 
test('tronca una stringa lunga', () => {
    expect(truncateString('mamma', 4)).toBe('mamm...');
});

 test('errore con una stringa corta', () => {
    expect(truncateString('mamma', 8)).toBe('mamma');
}); 

test('tronca tutto', () => {
    expect(truncateString('mamma', 0)).toBe('...');
});

test('troncamento di una stringa vuota', () => {
    expect(truncateString('', 1)).toBe('');
});

//test sul contare i caratteri 
test('conta i caratteri di una stringa', () => {
    expect(countCharacters('mamma')).toEqual({ m: 3, a: 2 });
});

test('conta caratteri di una stringa vuota', () => {
    expect(countCharacters('')).toEqual({});
});