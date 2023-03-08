// import { ValuesController } from "./Controllers/ValuesController.js";

import { MoneyController } from "./Controllers/MoneyController.js";
import { SnacksController } from "./Controllers/SnacksController.js";

class App {
  // valuesController = new ValuesController();

  snackController = new SnacksController();



  moneyController = new MoneyController();


}

window["app"] = new App();
