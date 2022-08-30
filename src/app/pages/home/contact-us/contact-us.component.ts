import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MasterService } from 'src/app/shared/services/master.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'molla-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactform:any

  constructor(private master:MasterService,private toaster:ToastrService) { }

  ngOnInit(): void {

    this.contactform=new FormGroup({
			name:new FormControl("" ,[Validators.required,Validators.pattern('^[a-zA-Z_ ]{3,20}$')]),
			company:new FormControl("" ,[Validators.required,Validators.pattern('^[a-zA-Z_ ]{3,20}$')]),
      email:new FormControl("", [Validators.required,Validators.pattern('^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$')]),
			phone:new FormControl("", [Validators.required,Validators.pattern('[0-9 ]{10}')]), 
      message:new FormControl("", [Validators.required,Validators.pattern('^[a-zA-Z0-9/.,-_!@#$%^&* ]{3,500}$')]), 


			// email:new FormControl("",Validators.required),
		  })

  }

  onclick(){

    var name = this.contactform.get("name")?.value;
    var company = this.contactform.get("company")?.value;
    var email = this.contactform.get("email")?.value;
    var phone = this.contactform.get("phone")?.value;
    var message = this.contactform.get("message")?.value;

    var data = {
			service_id: 'service_8zp4yhp',
			template_id: 'template_h01k7at',
			user_id: 'user_mTjMBBP092bpZsnZTyLfp',
			template_params: {
        // 'from_name': name,
				'from_name': name,
        'from_company':company,
				'from_email': email,
				'from_number': phone,
        'from_message':message,
        'to_mail':'princeantil2608@gmail.com',
        'reply_to':email
			}
		  };	

		  this.master.sendMail(data).subscribe(res=>{
			
			
		  }, err=>{
			 this.toaster.success("Email sent successfully")
       location.reload()
		  });

    // alert(name+email+phone+message)

  }
}
