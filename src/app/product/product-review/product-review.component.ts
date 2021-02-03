import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../service/review-service';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent implements OnInit {

  constructor(private productService: ProductService) { }

  
  @Input() productId: string = '';
  @Input() viewerId: string = '';

  ngOnInit(): void {
    console.log(this.productId);
    console.log(this.viewerId);
    this.productService.getSiteDetails(this.productId, this.viewerId).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
  }

}
