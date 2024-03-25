export class Activity{
  constructor(id, title, description, imgUrl){
      this.id = id;
      this.title = title;
      this.description = description;
      this.imgUrl = imgUrl;
  }
}


export class Repository{
  constructor(){
      this.activities = [];
      this.id = 0
  }

  getAllActivities = () => {
      return this.activities
  }

  createActivity = (title, description, imgUrl) => {
      const id = this.id++
      const instanciaActivity = new Activity(id, title, description, imgUrl)
      return this.activities.unshift(instanciaActivity)
  }

  deleteActivity = (idInstancia) => {
    this.activities = this.activities.filter(actividad => actividad.id !== idInstancia);
  }
}
