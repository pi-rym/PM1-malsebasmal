class Activity{
		constructor(id, title, description, imgUrl){
				this.id = id;
				this.title = title;
				this.description = description;
				this.imgUrl = imgUrl;
		}
}
class Repository{
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
let repositoryPrincipal = new Repository()



function createActivityTarget(obj){
	const {id, title, description, imgUrl} = obj;

	let divTarget = document.createElement("div")
	divTarget.classList.add("target")

	divTarget.setAttribute("data-id", id)

	let h3Title = document.createElement("h3");
		h3Title.textContent = title;
	let pDescription = document.createElement("p");
		pDescription.textContent = description
	let imgTarget = document.createElement("img");
		imgTarget.src = imgUrl

	divTarget.append(h3Title, pDescription, imgTarget)
	
	return divTarget
}

function activityHTML(){
	let sectionForTargets = document.querySelector(".section__main--actividadesAgregadas");
		sectionForTargets.innerHTML = "";
	
	let listCompleteActivities = repositoryPrincipal.getAllActivities()
	let activitiesConvertHTML = listCompleteActivities.map(objActivityIndex => createActivityTarget(objActivityIndex))
	activitiesConvertHTML.forEach(activityIndex => sectionForTargets.append(activityIndex))
}

function buttonConnection() {
	let inputNameActivity = document.querySelector(".form__input--text-actividades");
	let inputDescriptionActivity = document.querySelector(".form__input-actividades");
	let inputUrlActivity = document.querySelector(".form__input--url-actividades")
			const inputNameValue = inputNameActivity.value;
			const inputDescriptionValue = inputDescriptionActivity.value;
			const inputUrlValue = inputUrlActivity.value;

	if (inputNameValue === ""){
		alert("Por favor, coloca un título a tu actividad")
			return false
	} else if (inputDescriptionValue === ""){
		alert("Por favor, coloca una descripción a tu actividad")
		return false
	} else if (inputUrlValue === ""){
		alert("Por favor, coloca una imagen a tu actividad")
		return false
	} else if (!inputUrlActivity.checkValidity()){
		alert("Por favor, coloca una URL válida a tu actividad")
		return false
	} else{
		repositoryPrincipal.createActivity(inputNameValue, inputDescriptionValue, inputUrlValue);
		activityHTML()
		inputNameActivity.value = ""
		inputDescriptionActivity.value = ""
		inputUrlActivity.value = ""

	}

	let sectionActivitiesTargets = document.querySelector(".section__main--actividadesAgregadas")
	sectionActivitiesTargets.addEventListener("click", (event) => {
		const targetElement = event.target.closest(".target");
    if (targetElement) {
      const idActivityTarget = parseInt(targetElement.dataset.id);
      repositoryPrincipal.deleteActivity(idActivityTarget);
      targetElement.remove();
    }
	})
}

let buttonAction = document.querySelector(".form__input--button-actividades");
buttonAction.addEventListener("click", buttonConnection)
