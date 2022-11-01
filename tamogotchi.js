const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 1,
    mood: 1,
    getStatus() {
        console.log(`Имя: ${this.name}`)
        if (this.meal < 3) {
            console.log(`Еда: Хочу кушац (${this.meal})`)
        } else {
            console.log(`Еда: Я не голоден (${this.meal})`)
        }

        if (this.energy < 3) {
            console.log(`Энергия: Я хочу спать (${this.energy})`)
        } else {
            console.log(`Энергия: Не хочу спать (${this.energy})`)
        }

        if (this.mood < 3) {
            console.log(`Настроение: Мне скучно (${this.mood})`)
        } else {
            console.log(`Настроение: Мне весело (${this.mood})`)
        }
        if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
            console.log(`чел ${this.name} умер. ГГ Press F💀`)

        }
        if (this.meal === 1 && this.energy === 1 && this.mood === 1) {
            console.log(`${this.name} deadinside`)
        }

    },

    setName(name) {
        this.name = name
    },

    eat() {
        if (this.meal < 5) {
            this.meal++
        }
        this.mood--
    },

    sleep() {
        if (this.energy < 5) {
            this.energy++
        }
        this.meal--
    },

    play() {
        if (this.mood < 5) {
            this.mood++
        }
        this.energy--
    },
}

tamogotchi.setName('Tolik')