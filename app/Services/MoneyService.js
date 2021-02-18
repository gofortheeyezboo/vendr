import { ProxyState } from "../AppState.js";


class MoneyService {
  addMoney() {ProxyState.money += 25
    
  }
}

export const moneyService = new MoneyService();

