import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'password-generator';

  checkboxes = [
    {
      "id": "lowercase",
      "label": "a-z",
      "library": "abcdefghijklmnopqrstuvwxyz",
      "checked": false
    }, {
      "id": "uppercase",
      "label": "A-Z",
      "library": "ABCDEFGHIJKLMNOPWRSTUVWXYZ",
      "checked": false
    }, {
      "id": "numbers",
      "label": "0-9",
      "library": "0123456789",
      "checked": false
    }, {
      "id": "symbols",
      "label": "!-?",
      "library": "!@#$%^&*-_=+\\|:;',.\<>/?~",
      "checked": false
    }
  ]

 
  dictionary!: Array<String>;

  lowercase: Boolean = this.checkboxes[0].checked;
  uppercase: Boolean = this.checkboxes[1].checked;
  numbers: Boolean = this.checkboxes[2].checked;
  symbols: Boolean = this.checkboxes[3].checked;

  passwordLenght: Number=3;
  newPassword!: String;
  lowercaseItems: any;
  uppercaseItems:any;
  numbersItems: any;
  symbolsItems: any;

  // Password length
   updatePasswordLength(event :any) {
    this.passwordLenght = event.target.value;
  }

  // Checkbox value
   updateCheckboxValue(event :any) {
    if (event.target.id == "lowercase")
      this.lowercase = event.target.checked;

    if (event.target.id == "uppercase")
      this.uppercase = event.target.checked;

    if (event.target.id == "numbers")
      this.numbers = event.target.checked;

    if (event.target.id == "symbols")
      this.symbols = event.target.checked;
  }

  // Copy password to clipboard
  @ViewChild('passwordOutput') password!: ElementRef;

  // Generate password
   generatePassword() {
    if (this.lowercase === false && this.uppercase === false && this.numbers === false && this.symbols === false) {
      return this.newPassword = "please check one of the checkboxes";
    }
    // Create array from chosen checkboxes
    if(this.lowercase){
      this.lowercaseItems =this.checkboxes[0].library.split("");
      
    }else{
      this.lowercaseItems=[];
    }

    if(this.uppercase){
      this.uppercaseItems =this.checkboxes[1].library.split("");
      
    }else{
      this.uppercaseItems=[];
    }
    if(this.numbers){
      this.numbersItems =this.checkboxes[2].library.split("");
    }else{
      this.numbersItems=[];
    }
    if(this.symbols){
      this.symbolsItems =this.checkboxes[3].library.split("");
      
    }else{
      this.symbolsItems=[];
    }
    this.dictionary= [].concat(this.lowercaseItems ,this.uppercaseItems,this.numbersItems ,this.symbolsItems)
    
   

    // // Generate random password from array
    var newPassword = "";
    
    for (var i = 0; i < this.passwordLenght; i++) {
      newPassword += this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
    }
    this.newPassword = newPassword;

      return
   
  }
}
