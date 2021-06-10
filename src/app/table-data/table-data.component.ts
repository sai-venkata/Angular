import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
})
export class TableDataComponent implements OnInit {
  tableData : any;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    let data = this.data.loadData();
    data.subscribe((response) => {this.tableData = response})
  }
}
