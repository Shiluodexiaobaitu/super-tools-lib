/*
 * @Author: zhangce
 * @Date: 2021-08-10 15:07:24
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2023-01-12 11:45:59
 * @LastEditors: zhangce
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Description: 
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
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