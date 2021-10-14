"use strict";
class Department {
    constructor(id, // readonly keyword
    name) {
        this.id = id;
        this.name = name;
        this.employees = []; // allows us to accountingcess from other classes that extends this class
    }
    // functions
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.unshift(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT"); // super has to be called fisrt
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "AC"); // super has to be called fisrt
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d3', []);
        return this.instance;
    }
    addEmployee(name) {
        if (name == "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(report) {
        this.reports.unshift(report);
        this.lastReport = report;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('John');
console.log(employee1);
const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Anna");
it.describe();
it.printEmployeeInfo();
console.log(it);
// const accounting = new AccountingDepartment("d2", []);
// singleton pattern, only one instance of the AccountingDepartment class
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
//console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'Month10 report';
accounting.addReport("PC001 broken");
accounting.addEmployee("Max");
accounting.addEmployee("Julia");
accounting.printReports();
console.log(accounting.mostRecentReport);
accounting.printEmployeeInfo();
accounting.describe();
/* const copy = {name: 'newDepartment', describe: hr.describe};
copy.describe(); */
//# sourceMappingURL=classes.js.map