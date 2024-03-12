class Activity{
    #idGenerator = function(){
        return Math.floor(Math.random() * (999 - 100 + 100) + 1)
        //*En algun momento se repetira el número por probabilidad
        //*Podemos crear un array donde almacenemos los números que salgan no se repitan, haciendo alguna especie de filtrado o comprobación.
    }
    #id

    constructor(title, description, imgUrl){
        this.#id = this.#idGenerator()
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
    get id(){
        return this.#id
    }
}


class Repository{
    constructor(){
        this.activities = [];
    }

    getAllActivities = () => {
        return this.activities
    }

    createActivity = (...instanciaActivity) => {
        this.activities.push(instanciaActivity)
    }

    deleteActivity = (...instanciaActivity) => {
        instanciaActivity.id 
    }
}

const correr = new Activity("Correr", "Yo corro", "CorroImg")

const repo1 = new Repository()