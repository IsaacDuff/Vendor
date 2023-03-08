import { appState } from "../AppState.js";
import { setText } from "../Utils/Writer.js";



function _drawMoney() {
    console.log('drawing Money')
}




export class MoneyController {
    constructor() {
        console.log("hellow from the Money Controller");
        appState.on('Money', _drawMoney);


        addMoney() {
            console.log(coins)
            appState.increaseMoney()
        }
    }
}