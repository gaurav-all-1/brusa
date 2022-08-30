import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/shared/services/master.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'molla-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

	userForm?:FormGroup;
	changePassword:any
  	message:string=''
	error:boolean=false
	key:any
	loader:boolean = false;


  constructor(private master:MasterService, private toaster:ToastrService,private route:Router,private activeRoute:ActivatedRoute) { 

	this.activeRoute.queryParams.subscribe(params=>{
		console.log("params_value",params)
		this.key = params.key
	})
  }

  ngOnInit(): void {

	

    this.changePassword = new FormGroup({
			// olderpass: new FormControl(),
			newpass: new FormControl(),
			confirmpass: new FormControl()
		  })	
  }

  onchangepass(){

	this.loader = true;

    
		// var oldpassword =this.changePassword.get("olderpass").value;
		
		var newpassword =this.changePassword.get("newpass").value;
		
		var confirmpassword =this.changePassword.get("confirmpass").value;
		
    if(newpassword=="" || newpassword==undefined || newpassword==null){
		  this.error=true
		  this.message="Please Enter New Password"
		  this.loader = false;
		  return
		}else if(confirmpassword=="" || confirmpassword==undefined || confirmpassword==null){
		  this.error=true
		  this.message="Please Enter Confirm Password"
		  this.loader = false;
		  return
		}else{
			if(confirmpassword==newpassword){
				const data = {
				  "newPassword":newpassword,
				  "token":this.key				  
				}
				this.master.methodPut(data,`/user/changePassword`).subscribe(res=>{
					// console.log("reset password",res)
					// this.toaster.success("your password is reset successfully")
					// this.route.navigateByUrl("/")
				this.loader = false;

				 if(res['message']!=null){
					 this.toaster.success("Your Password has been Changed, Please Log in with the Updated Credentials.");
					 this.route.navigateByUrl("/");
					 return
				 }else{
					this.loader = false;
					this.error=true
					this.message="Something Went Wrong Please Try Again Later."
					return
				  }
				},(error)=>{
					this.loader = false;
					this.toaster.error("Something Went Wrong, Please Try Creating a Fresh Forgot Password Link.")
				})
				return
			  }else{
				this.loader = false;
				this.error=true
				this.message="Password and Confirm Password Should be Same."
				return 
			  }
		}
	
		
	}

}
