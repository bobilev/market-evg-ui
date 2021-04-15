import { declOfNum } from './utils'

const arrayTestWords = ['товар', 'товара', 'товаров']

it('[test] Utils: declOfNum', () => {
    expect(declOfNum(1, arrayTestWords)).toBe('товар')
    expect(declOfNum(2, arrayTestWords)).toBe('товара')
    expect(declOfNum(1, arrayTestWords)).toBe('товар')
    expect(declOfNum(5, arrayTestWords)).toBe('товаров')
    expect(declOfNum(10, arrayTestWords)).toBe('товаров')
    expect(declOfNum(41, arrayTestWords)).toBe('товар')
    expect(declOfNum(92, arrayTestWords)).toBe('товара')
    expect(declOfNum(378, arrayTestWords)).toBe('товаров')
})