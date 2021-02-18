import ValuesController from "./Controllers/ValuesController.js";
import MoneyController from "./Controllers/MoneyController.js"
import ItemController from "./Controllers/ItemController.js"

class App {
  // valuesController = new ValuesController();
  moneyController = new MoneyController();
  itemController = new ItemController();
}

window["app"] = new App();
