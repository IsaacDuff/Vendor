import { appState } from "../AppState.js"




class SnacksService {
    buySnack() {
        console.log('hello from snack services')
    }
}

export const snackService = new SnacksService()
