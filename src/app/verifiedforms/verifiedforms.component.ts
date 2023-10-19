import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-verifiedforms',
  templateUrl: './verifiedforms.component.html',
  styleUrls: ['./verifiedforms.component.css']
})
export class VerifiedformsComponent {
  constructor(private _router: Router){}
    

  logout(){
    const confirmation=confirm('Do You Want Logout');
    localStorage.removeItem('verified');
    this._router.navigate(['/multiforms']); 
  }
}
