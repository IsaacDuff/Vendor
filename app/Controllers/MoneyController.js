import { appState } from "../AppState.js";
import { setText } from "../Utils/Writer.js";
import { moneyService } from "../Services/MoneyService.js";



function _drawMoney() {
    console.log('drawing Money')
    let template = appState.Money

    setText('amount', template)
}




export class MoneyController {
    constructor() {
        console.log("hellow from the Money Controller");
        appState.on('Money', _drawMoney);
    }

    addMoney() {
        console.log('added money')
        moneyService.addMoney()
    }
}