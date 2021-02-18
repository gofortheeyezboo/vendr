import { ProxyState } from "../AppState.js";
import { itemService } from "../Services/ItemService.js";
//Private
function _draw() {
    
    let items = ProxyState.itemsForPurchase;
    let template = ''
    
    items.forEach(i => template += i.Template)
    document.getElementById("items").innerHTML = /*html*/`
      
    <div className="card-columns items">
        ${template}
        
    </div>
    `
  }
  function drawRecent(name){
    let foundItem = ProxyState.itemsForPurchase.find(item => item.name == name)
    let recentElem = document.getElementById('recent-item')
    recentElem.innerText = `${foundItem.name}`   
  }
  //Public
  export default class ItemController {
    constructor() {
      ProxyState.on("itemsForPurchase", _draw);
      _draw()
    }
    buyItem(name){
        itemService.buyItem(name)
        drawRecent(name)
    }
    
  
  }
  