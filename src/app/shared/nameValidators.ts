import { AbstractControl ,ValidatorFn} from "@angular/forms";


 export function furbiddenNameValidator(furbiddenName : RegExp) : ValidatorFn{
     return (control : AbstractControl) : {[key : string] : any } | null => {
    
    const furbidden = furbiddenName.test(control.value);
    return furbidden ? { 'furbiddenName' : {value : control.value }} : null;
    };
}