import { ProxyState } from "../AppState.js";


class ItemService {
  buyItem(name) {
let foundItem = ProxyState.itemsForPurchase.find(item => item.name == name) 
if(ProxyState.money >= foundItem.price && foundItem.quantity > 0){ 
ProxyState.money -= foundItem.price
foundItem.quantity--

ProxyState.itemsForPurchase = ProxyState.itemsForPurchase  
}else if(foundItem.quantity == 0){
  alert(`No ${foundItem.name} remaining`)
}else
alert('You dont have enough money for that')
}
}

export const itemService = new ItemService();

