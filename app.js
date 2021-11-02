'use strict';

const MESSAGE = {
    showMessage(selector, txt, color) {
        document.getElementById(selector).textContent = txt;
        document.getElementById(selector).style.color = color;
    }
};

const VALIDATOR = {
    validateField(condition, fieldName) {
        if (condition.test(fieldName.value)) {
            return true;
        }
    },
    confirmPassword(prev, next) {
        if (prev.value === '' || next.value === '') {
            return;
        } else if (prev.value === next.value) {
            return true;
        }
    }
};

const INPUT = {
    changeBorderColor(fieldName, color) {
        if (fieldName) {
            fieldName.style.border = `2px solid ${color}`;
        } else {
            document.getElementById(fieldName).style.border = `2px solid ${color}`;
        }
    }
}; 

// UI variables
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

form.addEventListener('submit', e => {

    // validate username
    if (VALIDATOR.validateField( /^[a-zA-Z ]+$/, username)) {
        MESSAGE.showMessage('msg1', 'Username looks good', 'green');
        INPUT.changeBorderColor(username, 'green');
    } else {
        MESSAGE.showMessage('msg1', 'Username is not valid', 'red');
        INPUT.changeBorderColor(username, 'red');
    }

    // validate email
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (VALIDATOR.validateField(emailRegex, email)) {
        MESSAGE.showMessage('msg2', 'Email looks good', 'green');
        INPUT.changeBorderColor(email, 'green');
    } else {
        MESSAGE.showMessage('msg2', 'Email is not valid', 'red');
        INPUT.changeBorderColor(email, 'red');
    }

    // validate password
    let pwdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (VALIDATOR.validateField(pwdRegex, password)) {
        MESSAGE.showMessage('msg3', 'Password looks good', 'green');
        INPUT.changeBorderColor(password, 'green');
    } else {
        MESSAGE.showMessage('msg3', 'Password length should be 6 - 19', 'red');
        INPUT.changeBorderColor(password, 'red');
    }

    // confirm password
    if (VALIDATOR.confirmPassword(confirm_password, password)) {
        MESSAGE.showMessage('msg4', 'Password is matching', 'green');
        INPUT.changeBorderColor(confirm_password, 'green');
    } else {
        MESSAGE.showMessage('msg4', 'Password is not valid', 'red');
        INPUT.changeBorderColor(confirm_password, 'red');
    }

    e.preventDefault();
});
