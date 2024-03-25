//*
import { Activity, Repository } from '../scripts/classes.js';
//*


describe("Test para las CLASS", () => {
  it("Deben de estar definido las CLASS Activity", () => {
    expect(Activity).toBeDefined()
  });
  it("Deben de estar definido las CLASS Repository", () => {
    expect(Repository).toBeDefined()
  });


    describe("Class Activity", () => {
      it("Debe de tener propiedades en el constructor", () => {
        const activityPrueba = new Activity();

        expect(activityPrueba.hasOwnProperty("id")).toBeTruthy();
        expect(activityPrueba.hasOwnProperty("title")).toBeTruthy();
        expect(activityPrueba.hasOwnProperty("description")).toBeTruthy();
        expect(activityPrueba.hasOwnProperty("imgUrl")).toBeTruthy();
      });
      it("NO debe de tener métodos", () => {
        expect(Object.keys(Activity.prototype).length).toBe(0);
      });
    });

    describe("Class Repository", () => {
      it("NO debe de tener propiedades en el constructor", () => {
        expect(Repository.prototype.constructor.length).toBe(0)
      });
      it("Debe de tener las propiedades activities e id dentro del constructor", () => {
        expect(new Repository().hasOwnProperty("activities")).toBeTruthy();
        expect(new Repository().hasOwnProperty("id")).toBeTruthy();
      });
        it("La propiedad activities debe de ser de TIPO ARRAY", () => {
          expect(Array.isArray(new Repository().activities)).toBeTruthy();
        });
        it("La propiedad id debe de estar inicializada en 0", () => {
          expect(new Repository().id).toBe(0)
        });
    });
});