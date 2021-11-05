"use strict";
/* const myArray: Array<string | number> = [];

const promise: Promise<string> = new Promise((res, rej) => {
    setTimeout(() => {
        res('Done!');
    }, 2000);
});

promise.then(data => {
    data.split(' ');
}); */
/** Generic function */
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Abel", hobbies: ["Sports"] }, { age: 33 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["Sports", "Cooking"]));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
extractAndConvert({ name: "Abel" }, "name");
/** Generic classes */
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Abel');
textStorage.addItem('Julia');
textStorage.removeItem('Julia');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {}; // Generic utility types
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();
//# sourceMappingURL=generics.js.map