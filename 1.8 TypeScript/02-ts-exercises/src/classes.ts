class Department {
    protected employees: string[] = []; // allows us to accountingcess from other classes that extends this class

    constructor(
        public readonly id: string, // readonly keyword
        public name: string
    ) {}

    // functions
    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.unshift(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

    static createEmployee(name:string) {
        return {name: name};
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, "IT"); // super has to be called fisrt
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;
    get mostRecentReport(): string {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, "AC"); // super has to be called fisrt
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance
        }
        this.instance = new AccountingDepartment('d3', []);
        return this.instance;
    }
    addEmployee(name: string) {
        if (name == "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(report: string) {
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
