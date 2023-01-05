import superToolsLib from '../src/index'
const { initialToCapitali } = superToolsLib


test('initialToCapitali is initialToCapitali', () => {
    expect(initialToCapitali('zzzz')).toBe('Zzzz')
})