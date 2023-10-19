import {inject} from '@angular/core'
import { CanActivateFn, Router } from '@angular/router';


export const verifyGuard: CanActivateFn = (route, state) => {
const verifieded=localStorage.getItem('verified');
const router=inject(Router);
console.log("veri",verifieded);
if(verifieded){
return true;
}
else{
  localStorage.setItem('verified','');
router.navigate(['multiforms']);
return false;
}

  
  // return true;
};
