import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../service/review-service';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent implements OnInit {

  constructor(private productService: ProductService) { }
  @Input() ratings: any = {};
  @Input() id = {};

  ngOnInit(): void {
  }

}
