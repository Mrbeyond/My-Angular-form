import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  connect: boolean = false;
  signupform;
check: boolean = true;

  constructor( private formforsignup: FormBuilder ) {
// this.invalidcheck();
  }

  ngOnInit(): void {
    this.signupform = this.formforsignup.group({
      Fname:  [
                '',
                [
                  Validators.required,
                  // Validators.pattern('^[a-zA-Z_]')
                ]
              ],

      Lname:  [ '',
                    [
                      Validators.required,
                     // Validators.pattern('^[a-zA-Z_]')
                    ]
              ],

      Uname: ['',
                  [
                    Validators.required,
                   // Validators.pattern('^[a-zA-Z_]')
                  ]
              ],

      passkey: ['',
                 [
                    Validators.required,
                    Validators.minLength(6)
                    // Validators.pattern('^[a-zA-Z0-9_]')
                 ]
               ],

      mail: ['',
                 [
                    Validators.required,
                    Validators.email
                 ]
           ],


    } );
  }
    submitform(): void { this.connect = true; }

    get FirstName() { return this.signupform.get('Fname'); }
    get LastName() { return this.signupform.get('Lname'); }
    get UserName() { return this.signupform.get('Uname'); }
    get PassWord() { return this.signupform.get('passkey'); }
    get Email() { return this.signupform.get('mail'); }


    invalidcheck = () => {
        if (this.formforsignup) {
          this.connect = true;
          setTimeout( () => {
            const see = document.getElementById('tester');
            see.innerHTML = 'hello';
            this.check = false;
            this.connect = false; }, 2000 ); }
      }
    myarray = [ 1, 2, 3, 4, 5, 7, 8, 9 ];
    yewo(): any {
      for ()

}

}
