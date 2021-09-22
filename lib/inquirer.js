const inquirer = require('inquirer');

module.exports = {
    askAdminCredentials: ()  => {
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'Fullname of admin',
                validate: function(value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter admin fullname';
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Email of admin',
                validate: function(value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter admin email';
                    }
                }
            },
            {
                type: 'input',
                name: 'phone',
                message: 'Phone number of admin',
                validate: function(value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter admin phone number';
                    }
                }
            },
            {
                type: 'password',
                name: 'password',
                message: 'Password of admin',
                validate: function(value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter admin password';
                    }
                }
            }
        ];

        return inquirer.prompt(questions);
    }
};