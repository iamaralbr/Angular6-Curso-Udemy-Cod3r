import { throwError } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHandler {
  static handleError(error: HttpErrorResponse | any) {
    let errorMessage = '';
    if (error instanceof HttpErrorResponse) {
        // client-side error
        const body = error.error
        errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${body}`
    } else {
        // server-side error
        errorMessage = error.message ? error.message : error.toString()
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }  
}
