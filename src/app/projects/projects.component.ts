import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {

  displayedColumns = ['position', 'name', 'description', 'edit'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  position: number;
  name: string;
  description: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen Project', description: 'Lorem ipsum ...'},
  {position: 2, name: 'Helium Project', description: 'Lorem ipsum ...'},
  {position: 3, name: 'Lithium Project', description: 'Lorem ipsum ...'},
  {position: 4, name: 'Beryllium Project', description: 'Lorem ipsum ...'},
  {position: 5, name: 'Boron Project', description: 'Lorem ipsum ...'},
  {position: 6, name: 'Carbon Project', description: 'Lorem ipsum ...'},
  {position: 7, name: 'Nitrogen Project', description: 'Lorem ipsum ...'},
  {position: 8, name: 'Oxygen Project', description: 'Lorem ipsum ...'},
  {position: 9, name: 'Fluorine Project', description: 'Lorem ipsum ...'},
  {position: 10, name: 'Neon Project', description: 'Lorem ipsum ...'},
  {position: 11, name: 'Sodium Project', description: 'Lorem ipsum ...'},
  {position: 12, name: 'Magnesium Project', description: 'Lorem ipsum ...'},
  {position: 13, name: 'Aluminum Project', description: 'Lorem ipsum ...'},
  {position: 14, name: 'Silicon Project', description: 'Lorem ipsum ...'},
  {position: 15, name: 'Phosphorus Project', description: 'Lorem ipsum ...'},
  {position: 16, name: 'Sulfur Project', description: 'Lorem ipsum ...'},
  {position: 17, name: 'Chlorine Project', description: 'Lorem ipsum ...'},
  {position: 18, name: 'Argon Project', description: 'Lorem ipsum ...'},
  {position: 19, name: 'Potassium Project', description: 'Lorem ipsum ...'},
  {position: 20, name: 'Calcium Project', description: 'Lorem ipsum ...'},
];
