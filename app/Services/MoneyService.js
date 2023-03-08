import { appState } from "../AppState.js"

class MoneyService {
    addMoney() {
        appState.Money++
        console.log(appState.Money);

    }
}

export const moneyService = new MoneyService()