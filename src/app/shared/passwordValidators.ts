import { AbstractControl ,ValidatorFn} from "@angular/forms";


 export function passwordValidator (control : AbstractControl) : {[key : string] : boolean } | null {

    const password = control.get('password');
    const confirmPwd = control.get('confirmPwd');

    return password && confirmPwd && password.value != confirmPwd.value ? 
        {'missMatch' : true} : null;
 }
    
   
