import { Component, OnInit } from "@angular/core";
import { AccountsService } from "./services/accounts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountService: AccountsService) {
   const bin = {
    1: '1',
    2: '001',
    3: '101',
    4: ''
   }
    }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
