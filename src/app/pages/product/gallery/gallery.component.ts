import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/shared/classes/product';
import { ApiService } from 'src/app/shared/services/api.service';
import { IdServices } from 'src/app/shared/services/relatedId.service';

@Component({
	selector: 'product-gallery-page',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})

export class GalleryPageComponent implements OnInit {

	catId:any
	pageTitle = 'List';
	product: any;
	prev: Product;
	next: Product;
	related = [];
	loaded = false;
	getcat:any
	constructor(
		public apiService: ApiService,
		private activeRoute: ActivatedRoute,
		public router: Router,
		private relatedID:IdServices

	
	) {
		activeRoute.params.subscribe(params => {
			this.loaded = false;
			console.log("*******");
			console.log(params);
			console.log("color value = "+params['color']);
			console.log("slug-g",params['slug'])
			activeRoute.queryParams.subscribe(queryParams => {
				let color = queryParams['color'];
			this.apiService.getSingleProduct(params['slug']).subscribe(result => {
				
				if (result === null) {
					this.router.navigate(['/pages/404']);
				}

				this.product = result.data[0];
				// this.prev = result.prevProduct;
				// this.next = result.nextProduct;
				// this.related = result.relatedProducts;
				this.loaded = true;
				let updatedProductImages = [];
				console.log("sahab",this.product);
				let productImages = this.product.productImage;
				productImages.forEach(element => {
					console.log("%%%%%%%");
					console.log(element);
					if(element.color != null && element.color.toLowerCase() === color.toLowerCase())
					{
						updatedProductImages.push(element);
					}
				});
				if(color)
				{
				this.product.productImage = updatedProductImages;
				}
				  console.log("new product images = "+productImages);
				//  console.log(this.) 
				this.getcat = this.product.category['coverImage']
				this.catId = this.product.category.id;
				this.relatedID.announceMission({catId:this.catId,productId:this.product.id})
				
			});
		})
		});
			
	}

	ngOnInit(): void {
		// console.log("default com",this.catId)
	}
}