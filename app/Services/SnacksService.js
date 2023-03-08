import { appState } from "../AppState.js"




class SnacksService {
    buySnack(name) {
        // console.log(name)
        // let snack = snacks[''].find(s => s.name == name)
        // snacks.find(s => s.name == name)
        let food = appState.snacks.find(s => s.name == name)
        if (appState.Money >= food.price) {
            // console.log("more")
            appState.Money -= food.price

        } else {
            console.log("poor bitch")
        }
        // console.log(food, 'found it')

    }
}

export const snackService = new SnacksService()
