export default class Item {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    get Template() {

        return /*html*/`
        <div class="card p-2 value">
            ${this.name} Price: ${this.price} Quantity: ${this.quantity} <button className="btn btn-info" onclick="app.itemController.buyItem('${this.name}')">Buy</button>
        </div>
        `
    }
}
