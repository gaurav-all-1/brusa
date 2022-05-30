import { Component, DebugNode, OnInit } from '@angular/core';

import { ModalService } from 'src/app/shared/services/modal.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

import { introSlider, brandSlider } from '../data';
import { MasterService } from 'src/app/shared/services/master.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
// import { getMaxListeners } from 'process';
declare var $:any;

@Component({
	selector: 'molla-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {

	emailForm?:any
	categoryList:any=[]
	products = [];
	posts = [];
	loaded = false;
	introSlider = introSlider;
	brandSlider = brandSlider;

	constructor(public apiService: ApiService,
		 public utilsService: UtilsService, 
		 private modalService: ModalService,
		 private master:MasterService,
		 private category:CategoryService) {
		this.modalService.openNewsletter();

		this.apiService.fetchHomeData().subscribe(result => {
			this.products = result.products;
			this.posts = result.blogs;
			this.loaded = true;
		})

		this.emailForm = new FormGroup({
			email : new FormControl()
		  })
	}

	// guar

	ngOnInit(): void {
	

		this.getlist()
		
	}


	// onsubmit(){
	// 	var email = this.emailForm.get("email")?.value;
	// 	alert(email);
	// };

	onSave(){ 
		var email = this.emailForm.get("email").value;
		alert(email)
		console.log(email);

		const data={
			"status":1,
			"user_email":email,
			"owner_email":"17egjcs059@gmail.com",
			"temp_id":"template_kvsj7kk",
			"service_id":"service_8zp4yhp",
			"company":"Nutrivillage"
		}

		
		
	}


	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		dots: true,
		navSpeed: 700,
		navText: ['', ''],
		responsive: {
		  0: {
			items: 1
		  },
		  400: {
			items: 2
		  },
		  740: {
			items: 3
		  },
		  940: {
			items: 4
		  }
		},
		nav: true
	  }




	getlist(){
		this.master.getMethod("/GetCategories").subscribe(data=>{
			this.categoryList=JSON.parse(JSON.stringify(data));
			this.category.setCategoryList(this.categoryList)
			console.log("list-slider",this.categoryList)
	})


}


}

