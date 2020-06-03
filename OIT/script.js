'use strict'

let login_ok = false,
    user_name = "",
    password = "";
function Input() {
    user_name = "";
    password = "";
    user_name = prompt('Введите логин');    
    password = prompt('Введите пароль'); 
    if ( user_name == "admin" && password == "password" ) {
        login_ok = true; 
        window.location = './oit/index.html';  
    }
    if ( login_ok == false || user_name == "" || password == "") {
        alert ( 'введен неверный логин или пароль');
        Input();
    }
}
Input();
