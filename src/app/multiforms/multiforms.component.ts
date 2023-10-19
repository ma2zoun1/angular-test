import { Component } from '@angular/core';
import {FormBuilder,Validators,FormGroup,FormControl} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-multiforms',
  templateUrl: './multiforms.component.html',
  styleUrls: ['./multiforms.component.css']
})
export class MultiformsComponent {
  isLinear=true;
 
  randomNumber:number=0;
 
  myverification: string = "";
  
  verifytext:string="";
  alert:boolean=false;
  verified=false;

  

  constructor(private builder:FormBuilder,private _activateRoute: ActivatedRoute
    ,private _router: Router){
    
  }

  Empregister=this.builder.group({
    basic:this.builder.group({
      firstname:this.builder.control('',Validators.required)
     

    }),
    verify:this.builder.group({

      verify:this.builder.control('',Validators.required),
      
    }),
   
  });

  get basicForm(){
    return this.Empregister.get('basic') as FormGroup;
  }
  get verifyForm(){
    return this.Empregister.get('verify') as FormGroup;
  }
  
  HandleSubmit(){
    if(this.Empregister.valid){
    // var verify= this.Empregister.get('verify')?.value;
      
       if(this.randomNumber=== parseInt(this.verifytext)){
        this.alert=false;
        
       localStorage.setItem('verified', this.randomNumber.toString());
        this._router.navigate(['/verifiedforms']); 
        // console.log(' verify')
      //  console.log('ali');
      //  else
      //   this._router.navigate(['/verifiedforms']);
        
       }
       else{
        // console.log('no verify')
       this.alert=true;
       this.Empregister.get('verify')?.reset();
       }
    }
  }
  // verificationForm(){

  //   this.randomNumber = 400;
   

  // }
  generateNumber(): void {
    this.randomNumber = Math.floor(1000 * Math.random());
    
   
  }

  
  // sportHandler(event: any) {
  //   //update the ui
  //   this.pselectedSport = event.target.value;
  //   if(this.pselectedSport == 'football') {
  //     this.pselectedPrice = '15';
  //   } else {
  //     this.pselectedPrice = '50';
  //   }
  //   console.log('sport : '+this.pselectedSport);
  //   console.log('price : '+this.pselectedSport);
  //   }

  closeAlert(){
    this.alert=false;
  }

  logout(){
    const confirmation=confirm('Do You Want Logout');
    localStorage.removeItem('verified');
    this._router.navigate(['/multiforms']); 
  }
}
