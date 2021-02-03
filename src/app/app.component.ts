import { Component } from '@angular/core';
import { ProductService } from './product/service/review-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private productService: ProductService) {}

  products = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
  viewers = ['1','2','3','4','5','6','7','8','9','10'];
  selectedProductValue = '1';
  selectedViewerValue = '1';
  p: number = 1;

  reviewData : any = {};
  reviews : any = [];

  ngOnInit(): void {
    this.apicall();
  }

  apicall(){
    this.productService.getSiteDetails(this.selectedProductValue, this.selectedViewerValue).subscribe(
      (data: any) => {
       this.reviewData = data;
       this.reviews = data.reviews;
       console.log(this.reviewData);
      }
    )
  }

  onOptionsSelected(value:string) {
    console.log("the selected Product value is " + value);
    this.apicall();
}

}
