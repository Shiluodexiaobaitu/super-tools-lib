import superToolsLib from '../src/index'
const {
    initialToCapitali,
    isHexColor,
} = superToolsLib


test('initialToCapitali is initialToCapitali', () => {
    expect(initialToCapitali('zzzz')).toBe('Zzzz')
})

test('isHexColor is isHexColor', () => {
    expect(isHexColor('#fff')).toBe(true)
})