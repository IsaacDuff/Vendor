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
    new Snack({ name: 'Chips', price: 2.00, imgUrl: 'https://images.pexels.com/photos/2758893/pexels-photo-2758893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }),
    new Snack({ name: 'Candy Bar', price: 1.50, imgUrl: 'https://images.pexels.com/photos/2272761/pexels-photo-2272761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }),
    new Snack({ name: 'Hard Candy', price: 1.50, imgUrl: 'https://images.pexels.com/photos/1906435/pexels-photo-1906435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }),
    new Snack({ name: 'Gummy Bear', price: 4.00, imgUrl: 'https://images.pexels.com/photos/6697339/pexels-photo-6697339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }),
    new Snack({ name: 'Fruit', price: 3.50, imgUrl: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }),
    new Snack({ name: 'Nuts', price: 2.00, imgUrl: 'https://images.pexels.com/photos/86649/pexels-photo-86649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }),
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
