#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('./lib/inquirer');
const createAdmin = require('./utils/createAdmin');
// const ora = require('ora');

clear();

console.log(
    chalk.greenBright(
        figlet.textSync('Syncline.IT', { horizontalLayout: 'full' })
    )
);

const run = async () => {
    const credentials = await inquirer.askAdminCredentials();
    credentials.roles = ['admin'];
    // const spinner = ora('Creating admin account...').start();

    try{
        let data = await createAdmin(credentials);
        // spinner.stop();
        console.log(data);
    } catch (error) {
        // spinner.stop();
        console.log(error);
    }
    
};

run();
