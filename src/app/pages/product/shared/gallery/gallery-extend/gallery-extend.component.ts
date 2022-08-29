import { Component, OnInit, Input } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

import { Product } from 'src/app/shared/classes/product';
import { environment } from 'src/environments/environment';
import { sliderOpt } from 'src/app/shared/data';


@Component( {
	selector: 'product-gallery-extend',
	templateUrl: './gallery-extend.component.html',
	styleUrls: [ './gallery-extend.component.scss' ]
} )

export class GalleryExtendComponent implements OnInit {

	currentIndex = 0;
	album = []; 
	lightBoxOption = {
		showImageNumberLabel: true,
		centerVertically: true,
		showZoom: true,
		fadeDuration: .2,
		albumLabel: "%1 / %2"
	}

	@Input() product: Product;
	@Input() loaded = false;

	options = {
		...sliderOpt,
		nav: true,
		dots: false,
		items: 3,
		margin: 20,
		loop: false,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	};

	MOLLA_URL = environment.MOLLA_URL;

	constructor( public lightBox: Lightbox ) { }

	ngOnInit (): void {

		
	}

	openLightBox() {
		this.lightBox.open(this.album, this.currentIndex, this.lightBoxOption);
	}

	changeImage($event: Event, index = 0) {
		this.currentIndex = index;
		$event.preventDefault();
	}
}