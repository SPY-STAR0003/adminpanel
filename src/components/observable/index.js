
class Observable {
    constructor() {
        this.observers = []
    }

    subscribe(func) {
        this.observers.push(func)
    }

    unsubscribe(func) {
        this.observers.filter(item => item !== func)
    }

    empty() {
        this.observers.length = 0
    }

    notify(data , type) {
        this.observers.forEach(func => func(data , type))
    }
}

export default new Observable();