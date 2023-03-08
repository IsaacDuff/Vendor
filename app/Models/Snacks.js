import { appState } from "../AppState.js"



export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }



    get ListTemplate() {
        return `
        <div class="col-4 text-center bg-dark text-light">
        <h2>${this.name}</h2>
        <img class="imgSize" src=${this.imgUrl} alt="Candy Bar">
        <h4>${this.price}</h4>
        </div>
        `
    }
}