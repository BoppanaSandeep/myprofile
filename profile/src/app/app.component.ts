import { Component, OnInit } from "@angular/core";
import * as moment from 'moment';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.noOfYearsExp(1);
  }

  noOfYearsExp(type) {
    const now = moment(new Date()); // todays date
    const end = moment('2016-06-28'); // another date
    const duration = moment.duration(now.diff(end));
    let days = duration.asYears();
    days = Number(days.toFixed(1));
    const exp = String(days).split('.');
    // console.log(exp[type], exp);
    return exp[type] = exp[type] ? exp[type] : '0'; // type 0 - years, 1 - months
  }
}
