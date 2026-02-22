
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(user: string, password: string): boolean {
    // Aquí iría la validación contra un archivo JSON o API
    return user === 'admin' && password === '1234';
  }
}