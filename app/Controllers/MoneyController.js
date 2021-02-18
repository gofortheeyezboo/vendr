import { ProxyState } from "../AppState.js";
import { moneyService } from "../Services/MoneyService.js";
//Private
function _draw() {
    
    document.getElementById("money").innerHTML = /*html*/`
    <button className="btn btn-info" onclick="app.moneyController.addMoney()">Add Money</button>
    <p class="ml-4">Credit: ${ProxyState.money}</p>  
   `    
  }
  
  //Public
  export default class MoneyController {
    constructor() {
      ProxyState.on("money", _draw);
      _draw()
    }
  
    addMoney() {
    moneyService.addMoney()
    }
  
  }
  