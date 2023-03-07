import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Snack } from "./Models/Snacks.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Value').Snacks[]} */

  snacks = [
    new snack({ name: 'Chips', price: 2.00, imgUrl: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpcHN8ZW58MHx8MHx8&w=1000&q=80' }),
    new snack({ name: 'Candy Bar', price: 1.50, imgUrl: 'https://i5.peapod.com/c/U4/U42RF.png' }),
    new snack({ name: 'Fruit', price: 3.50, imgUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/1/17/1/FN_fruit-thinkstock_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371614094579.jpeg' })
  ]

  Money = 0

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
