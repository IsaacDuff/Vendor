import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { snackService } from "../Services/SnacksService.js";





function _drawSnacks() {
    console.log("drawing Snacks")
    let snacks = appState.snacks
    let template = ''
    snacks.forEach(s => template += s.ListTemplate)
    setHTML('Snacks', template)
}



export class SnacksController {

    constructor() {
        console.log("hellow fromthe snacks controller");
        _drawSnacks()
    }

    buySnack(name) {

        console.log('bought snack')
        snackService.buySnack(name)
    }
}