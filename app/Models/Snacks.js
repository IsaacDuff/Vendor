import { appState } from "../AppState.js"



export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }
}

