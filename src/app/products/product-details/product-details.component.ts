import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  products = [
    {
      id: 10,
      prodName: 'iPhone X',
      prodDesc: 'New iPhone X with 5.5 inch screen, 256GB Internal Memory, 16GB RAM',
      prodPrice: 989
    },
    {
      id: 11,
      prodName: 'Pixel 2 XL',
      prodDesc: 'New Google Pixel 2 XL with 5.5 inch screen, 256GB Internal Memory, 16GB RAM',
      prodPrice: 788
    },
    {
      id: 12,
      prodName: 'Samsung S10',
      prodDesc: 'New Samsung S10 with 5.5 inch screen, 256GB Internal Memory, 16GB RAM',
      prodPrice: 989
    }
  ];
  product: any;
  id: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
  }

  ngOnInit() {
    console.log(this.product);
    this.product = this.products.find(x => x.id === parseInt(this.id, null));
    console.log(this.product);
  }

}
