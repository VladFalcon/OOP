let modal = document.getElementById("myModal");
let cardiologistInput = document.getElementById("cardiologistInput");
let dentistInput = document.getElementById("dentistInput");
let therapistInput = document.getElementById("therapistInput");
let optionsButtons = document.getElementById("optionsButtons");
let additionalComments = document.getElementById("additionalComments");
let showMore = document.getElementById("showMore");

function clearModal(){
    modal.style.display = "none";
    select.value = 0;
    dentistInput.style.display = "none";
    cardiologistInput.style.display = "none";
    therapistInput.style.display = "none";
    optionsButtons.style.display = "none";
    additionalComments.style.display = "none"
}
function clearAll() {
    modal.style.display = "none";
    select.value = 0;
    dentistInput.style.display = "none";
    cardiologistInput.style.display = "none";
    therapistInput.style.display = "none";
    optionsButtons.style.display = "none";
    additionalComments.style.display = "none"
}
let span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    clearAll();
};
window.onclick = function (event) {
    if (event.target == modal) {
        clearAll();
    }
};
let closeVisit = document.getElementById("CloseVisit");
closeVisit.onclick = function () {
    clearAll();
};

let btn = document.getElementById("header__button");
btn.onclick = function () {
    let visit = new DoctorVisit();
    visit.createVisit();
    modal.style.display = "block";

};

let createVisitBtn = document.getElementById("CreateVisit");
let select = document.getElementById("choose");
createVisitBtn.onclick = function () {
    if (select.value === "Cardiologist") {
        let cardiologist = new CardiologistVisit();
        cardiologist.render();
        clearModal();

    } else if (select.value === "Dentist") {
        let dentist = new DentistVisit();
        dentist.render();
        clearModal();

    } else if (select.value === "Therapist") {
        let therapist = new TherapistVisit();
        therapist.render();
        clearModal();

    }

};
class DoctorVisit {
    constructor(fullName, nameOfVisit, dateOfVisit) {};
    createVisit() {
        select.onchange = function () {
            if (select.value === "Cardiologist") {
                cardiologistInput.style.display = "block";
                dentistInput.style.display = "none";
                therapistInput.style.display = "none";
                optionsButtons.style.display = "block";
                additionalComments.style.display = "block";

            } else if (select.value === "Dentist") {
                dentistInput.style.display = "block";
                cardiologistInput.style.display = "none";
                therapistInput.style.display = "none";
                optionsButtons.style.display = "block";
                additionalComments.style.display = "block"

            } else if (select.value === "Therapist") {
                therapistInput.style.display = "block";
                cardiologistInput.style.display = "none";
                dentistInput.style.display = "none";
                optionsButtons.style.display = "block";
                additionalComments.style.display = "block"
            }
        };


    }
    render() {
        let visitDesk = document.getElementById("visitDesk");
        let card = document.createElement("div");
        card.classList.add("visitDesk__form");
        card.id = "card";
        visitDesk.appendChild(card);
        visitDeskTxt.style.display = "none";
        visitDesk.style.textAlign = "left";
        let newSpan = document.createElement("span");
        newSpan.classList.add("close");
        newSpan.textContent = `x`;
        card.appendChild(newSpan);
        newSpan.onclick = function (e) {
            visitDesk.removeChild(card);
                  if (visitDesk.childNodes.length === 3) {
                visitDeskTxt.style.display = "block";

            }
        };


        let fullName = document.createElement("p");
        fullName.innerText = "Name - " + this._fullName;
        fullName.classList.add("card__field");
        card.appendChild(fullName);

        let doctor = document.createElement("p");
        doctor.innerText ="Doctor - " + this._nameOfVisit;
        doctor.classList.add("card__field");
        card.appendChild(doctor);
        let dateOfVisit = document.createElement("p");
        if (this._dateOfVisit !== undefined) {
            dateOfVisit.innerText = "Date of visit - " + this._dateOfVisit;
            dateOfVisit.classList.add("card__field--invisible");
            card.appendChild(dateOfVisit);
        }
        let purpose = document.createElement("p");
        if (this._purpose !== undefined) {
            purpose.textContent = "Goal of visit - " + this._purpose;
            purpose.classList.add("card__field--invisible");
            card.appendChild(purpose);
        }
        let pressure = document.createElement("p");
        if (this._pressure !== undefined) {
            pressure.innerText = "Pressure - " + this._pressure;
            pressure.classList.add("card__field--invisible");
            card.appendChild(pressure);
        }
        let indexMass = document.createElement("p");
        if (this._indexMass !== undefined) {
            indexMass.innerText = "Mass - " + this._indexMass;
            indexMass.classList.add("card__field--invisible");
            card.appendChild(indexMass);
        }
        let diseases = document.createElement("p");
        if (this._diseases !== undefined) {
            diseases.innerText = "Diseases - " + this._diseases;
            diseases.classList.add("card__field--invisible");
            card.appendChild(diseases);
        }
        let age = document.createElement("p");
        if (this._age !== undefined) {
            card.appendChild(diseases);
            age.innerText = "Age - " + this._age;
            age.classList.add("card__field--invisible");
            card.appendChild(age);
        }
        let lastVisitDate = document.createElement("p");
        if (this._lastVisitDate !== undefined) {
            lastVisitDate.innerText = "Last Visit - " + this._lastVisitDate;
            lastVisitDate.classList.add("card__field--invisible");
            card.appendChild(lastVisitDate);
        }
        let additionalComments = document.createElement("p");
        if (this._additionalComments !== undefined) {
            additionalComments.innerText = this._additionalComments;
            additionalComments.classList.add("card__field--invisible");
            card.appendChild(additionalComments);
        }

        let showMore = document.createElement("button");
        showMore.classList.add("showMore");
        showMore.id = "showMore";
        showMore.textContent = "Show More";
        card.appendChild(showMore);
        showMore.addEventListener("click", function (event) {
            event.preventDefault();
            card.classList.add("visitDesk__form--bigger");
            dateOfVisit.style.display = 'block';
            purpose.style.display = 'block';
            pressure.style.display = 'block';
            indexMass.style.display = 'block';
            diseases.style.display = 'block';
            age.style.display = 'block';
            lastVisitDate.style.display = 'block';
            showMore.style.display = "none";
            additionalComments.style.display = "block";
            const hide = document.createElement("button");
            hide.classList.add("hide");
            hide.textContent = "Hide";
            card.appendChild(hide);
            hide.addEventListener("click", function (event) {
                    event.preventDefault();
                    card.classList.add("visitDesk__form");
                    dateOfVisit.style.display = 'none';
                    purpose.style.display = 'none';
                    pressure.style.display = 'none';
                    indexMass.style.display = 'none';
                    diseases.style.display = 'none';
                    age.style.display = 'none';
                    lastVisitDate.style.display = 'none';
                    showMore.style.display = "inline";
                    additionalComments.style.display = "none";
                    hide.style.display = 'none';
                });

        });


    }


}

class CardiologistVisit extends DoctorVisit {
    constructor(fullName, nameOfVisit, dateOfVisit, purpose, pressure, indexMass, diseases, age) {
        super(fullName, nameOfVisit, dateOfVisit);
        let cardio = {
            fullName: {value: fullNameCardio.value, isVisible: true},
            nameOfVisit: {value: "Cardiologist", isVisible: true},
            dateOfVisit: {value: DateOfVisitCardio.value, isVisible: false},
            purpose: {value: PurposeCardio.value, isVisible: false},
            pressure: {value: Pressure.value, isVisible: false},
            indexMass: {value: BodyMassIndex.value, isVisible: false},
            diseases: {value: Diseases.value, isVisible: false},
            age: {value: cardioAge.value, isVisible: false}
        };
        this._fullName = cardio.fullName.value;
        this._nameOfVisit = cardio.nameOfVisit.value;
        this._dateOfVisit = cardio.dateOfVisit.value;
        this._purpose = cardio.purpose.value;
        this._pressure = cardio.pressure.value;
        this._indexMass = cardio.indexMass.value;
        this._diseases = cardio.diseases.value;
        this._age = cardio.age.value;
        this._additionalComments = additionalComments.value;
    }
}


class DentistVisit extends DoctorVisit {
    constructor(fullName, nameOfVisit, dateOfVisit, purpose, lastVisitDate) {
        super(fullName, nameOfVisit, dateOfVisit);

        let dent = {
            fullName: {value: fullNameDentist.value, isVisible: true},
            nameOfVisit: {value: "Dentist", isVisible: true},
            dateOfVisit: {value: DateOfVisitDentist.value, isVisible: false},
            purpose: {value: PurposeDentist.value, isVisible: false},
            lastVisitDate: {value: LastVisitDate.value, isVisible: false}
        };
        this._fullName = dent.fullName.value;
        this._nameOfVisit = dent.nameOfVisit.value;
        this._dateOfVisit = dent.dateOfVisit.value;
        this._purpose = dent.purpose.value;
        this._lastVisitDate = dent.lastVisitDate.value;
        this._additionalComments = additionalComments.value;

    }

}

class TherapistVisit extends DoctorVisit {
    constructor(fullName, nameOfVisit, dateOfVisit, age) {
        super(fullName, nameOfVisit, dateOfVisit);
        let therap = {
            fullName: {value: fullNameTherapist.value, isVisible: true},
            nameOfVisit: {value: "Therapist", isVisible: true},
            dateOfVisit: {value: DateOfVisitTherapist.value, isVisible: false},
            age: {value: Age.value, isVisible: false}
        };
        this._fullName = therap.fullName.value;
        this._nameOfVisit = therap.nameOfVisit.value;
        this._dateOfVisit = therap.dateOfVisit.value;
        this._age = therap.age.value;
        this._additionalComments = additionalComments.value;

    }
}


