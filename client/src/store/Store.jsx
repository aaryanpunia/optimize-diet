import { makeObservable, observable, action } from "mobx";

class Store {
    constructor() {
        makeObservable(this, { query: observable, setQuery: action })
    }

    query = "";

    setQuery(update) {
        this.query = update;
    }
}


export default Store;