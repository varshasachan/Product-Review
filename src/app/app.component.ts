import {Component, OnInit} from '@angular/core';
import { ProductService } from './product/service/review-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private productService: ProductService) {}

  products = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  viewers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  selectedProductValue = '1';
  selectedViewerValue = '1';
  p: number = 1;
  sortColumn = '';
  showAllRatings: boolean = false;
  reviewData: any = {};
  reviews: any = [];
  allRatings: any ={};
  currentId: string = '';
  selProd: string = 'Select Product';
  selView: string = 'Select Viewer';
  sortType: string = 'Sort By';

  ngOnInit(): void {
    this.apicall();
  }

  apicall(): void {
    this.productService.getSiteDetails(this.selectedProductValue, this.selectedViewerValue).subscribe(
      (data: any) => {
       this.reviewData = data;
       this.reviews = data.reviews;
       console.log(this.reviewData);
      }
    );
  }

  sortBy(arr: any): void {
    console.log(this.sortColumn);
    if (this.sortColumn === '0') {
      this.reviewData = arr.sort((a: any, b: any) => (a.ratings.Overall > b.ratings.Overall) ? -1 : 1);
    }
    else if (this.sortColumn === '1'){
      this.reviewData = arr.sort((a: any, b: any) => (a.usefulness > b.usefulness) ? -1 : 1);
    }
    else {
      this.reviewData = arr.sort((a: any, b: any) => (a.reviewer.connection_level > b.reviewer.connection_level) ? -1 : 1);
    }
    console.log(arr);
  }

  showAll(ratings: any, id: string ): void{
    this.showAllRatings = true;
    this.allRatings = ratings;
    this.currentId = id;
    console.log('Show All Button is clicked', this.currentId);
  }

  onOptionsSelected(value: string): void {
    this.showAllRatings = false;
    this.sortColumn = '';
    this.allRatings = {};
    console.log('the selected Product value is ' + value);
    this.apicall();
}

}
