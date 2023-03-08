import { appState } from "../AppState.js"

class MoneyService {
    addMoney() {
        appState.Money += 0.25
        console.log(appState.Money);

    }
}

export const moneyService = new MoneyService()