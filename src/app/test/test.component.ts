import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';
import { TestService } from './test.services';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  query = {
    'api-key': 'vNb8Rmx2LKmKIfEJCJqUPVv0A3nuqenF'
  }
  data: any = [];
  img: any = [];
  loading: boolean = true;


  datePickerValue: Date = new Date(2020, 7);
  minMode: BsDatepickerViewMode = 'month';


  bsConfig: Partial<BsDatepickerConfig>;
  bsConfig1: Partial<BsDatepickerConfig>;
  selectedMonth: any = new Date;
  selectedYear: any = new Date;
  selected_Month: any;
  selected_Year: any;
  constructor(private tests: TestService) { }

  ngOnInit(): void {
    this.loading = true;
    console.log(this.loading);

    this.selected_Month = this.getDateFormatmonth(new Date());
    this.selected_Year = this.getDateFormatyear(new Date());
    this.getAllData();

    this.bsConfig = Object.assign({}, {
      minMode: this.minMode,
      containerClass: 'custom-daterange-style',
      rangeInputFormat: 'MM-YYYY',
      dateInputFormat: 'MM-YYYY'
    });

  }

  getAllData() {
    console.log(this.loading);


    this.tests.getData(this.combine(this.query), this.selected_Month, this.selected_Year,).subscribe(res => {
      console.log(res);
      this.data = res;
      this.data = this.data.response.docs;
      console.log(this.data);
      this.loading = false;
      this.img = 'https://api.nytimes.com/svc/archive/v1/' + this.data[0].multimedia[0].url + '?api-key=vNb8Rmx2LKmKIfEJCJqUPVv0A3nuqenF';
      console.log(this.img);
    },
      err => {
        console.log(err);
        this.loading = false;

      });

    console.log(this.loading);
  }
  combine(data) {
    const glue = '=';
    const separator = '&';
    return Object.keys(data).map((key) => [key, data[key]].join(glue)).join(separator);
  }
  getDateUIFormat(date) {
    date = new Date(date);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return dd + '-' + mm + '-' + yyyy;
  }
  onChangeDateRange(value: Date): void {
    this.loading = true;
    console.log(this.loading);
    console.log(value);
    this.selected_Month = this.getDateFormatmonth(value)
    this.selected_Year = this.getDateFormatyear(value)
    this.getAllData();
  }

  getDateFormatmonth(date) {
    date = new Date(date);
    let mm = date.getMonth() + 1;
    console.log(mm);
    return mm;
  }
  getDateFormatyear(date) {
    date = new Date(date);
    let yyyy = date.getFullYear();
    console.log(yyyy);
    return yyyy;
  }
}