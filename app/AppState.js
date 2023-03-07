import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Snack } from "./Models/Snacks.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Snacks').Snacks[]} */

  snacks = [
    new Snack({ name: 'Chips', price: 2.00, imgUrl: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpcHN8ZW58MHx8MHx8&w=1000&q=80' }),
    new Snack({ name: 'Candy Bar', price: 1.50, imgUrl: 'https://i5.peapod.com/c/U4/U42RF.png' }),
    new Snack({ name: 'Hard Candy', price: 1.50, imgUrl: 'https://cdn.shopify.com/s/files/1/0614/8309/0107/products/Sour-Fruit-Balls-Hard-Candy-7lb-CandyStore-com-144_580x.jpg?v=1677175649' }),
    new Snack({ name: 'Gum', price: 4.00, imgUrl: 'http://cdn.shopify.com/s/files/1/0004/8132/9204/products/spearmint-gum1.jpg?v=1675440648' }),
    new Snack({ name: 'Fruit', price: 3.50, imgUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/1/17/1/FN_fruit-thinkstock_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371614094579.jpeg' }),
    new Snack({ name: 'Health Bar', price: 2.00, imgUrl: 'https://www.foodservicedirect.com/media/catalog/product/0/0/00038000597794_ugvtmx0ftqkg9eea.jpg?width=1200&height=1200&quality=85&fit=bounds' }),
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
