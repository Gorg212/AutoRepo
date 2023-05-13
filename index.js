// basic cli version

const fs = require('fs');
const input = require('prompt-sync')({ sigint: true });
const { Octokit } = require('octokit');
const fetch = require('node-fetch');
const { exec } = require('child_process');

// checking for auth.json
if (!fs.existsSync('auth.json')) {

    console.log('Did not find auth.json, please create a new token or if you have an existing one then please enter it below, it will be saved locally in your system.');
    const tokenCreate = input('create new token? (Y/n) ');

    // redirect to https://github.com/settings/tokens/new
    if (tokenCreate.toLowerCase() == "y" || tokenCreate.toLowerCase() == "") {
        exec(`start https://github.com/settings/tokens/new`);
    }

    const token = input('token: ')

    // saving to auth.json
    const authData = JSON.stringify({ 'token': token });

    fs.writeFileSync('auth.json', authData, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File created successfully');
    });


}

// retrieving contents
const data = fs.readFileSync('auth.json', 'utf8');
const token = JSON.parse(data).token;

const repoName = input("Repo Name: ");
const repoDescription = input("Repo description (optional): ");


fetch('https://api.github.com/user/repos', {
    method: 'POST',
    headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: repoName, description: repoDescription })
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));