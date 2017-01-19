import { Component } from '@angular/core';
import { FeathersApp } from 'feathers-client'

declare var app: FeathersApp;

@Component({
  selector: 'category-cmp',
  templateUrl: 'category.html',
  styleUrls: ['category.css'],
})
export class CategoryComponent {
  constructor() {}
}
