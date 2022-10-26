/*
 * @Author: zhangce
 * @Date: 2022-10-20 11:53:49
 * @Email: zhangce@fengmap.com
 * @LastEditTime: 2022-10-24 10:05:23
 * @LastEditors: zhangce
 * @LastEditorsEmail: zhangce@fengmap.com
 * @Description: 
 *  Copyright: Copyright 2014 - 2022, FengMap, Ltd. All rights reserved.
 */
const data = [
  { gid: 1, id: 1, name: '火锅', },
  { gid: 2, id: 2, name: '烧烤', },
  { gid: 3, id: 3, name: '炒菜', },
]

const oldgname = ['L1', 'L2', 'L3']

const newgname = ['L1', 'L3']

// const newgname = ['M0', 'L1', 'M1', 'M2', 'L2', 'M3', 'L3', 'M4']

const newData = []
for (let i = 0; i < oldgname.length; i++) {
  const gid = i + 1
  const gname = oldgname[i]

  const newIndex = newgname.findIndex(i => i === gname)
  const newGid = newIndex + 1

  if (i !== newIndex) {
    data.forEach(item => {
      if (gid === item.gid) {
        newData.push({
          ...item,
          gid: newGid
        })
      }
    })
  }
}

for (let i = 0; i < newData.length; i++) {
  const item = newData[i]

  data.forEach(item2 => {
    if (item.id === item2.id) {
      item2.gid = item.gid
    }
  })
}
console.log('data', data)