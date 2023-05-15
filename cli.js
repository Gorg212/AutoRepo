// basic cli version

const fs = require('fs');
const input = require('prompt-sync')({ sigint: true });
const { Octokit } = require('octokit');
const fetch = require('node-fetch');
const { exec } = require('child_process');
const request = require('sync-request');

// checking for auth.json
if (!fs.existsSync('auth.json')) {

    console.log('Did not find auth.json, please create a new token or if you have an existing one then please enter it below, it will be saved locally in your system.');
    const tokenCreate = input('create new token? (Y/n) ');

    // redirect to https://github.com/settings/tokens/new
    if (tokenCreate.toLowerCase() == "y" || tokenCreate.toLowerCase() == "") {
        exec(`start https://github.com/settings/tokens/new`);
    }

    const token = input('token: ')

    const res = request('GET', 'https://api.github.com/user', {
        headers: {
            'User-Agent': 'node.js',
            'Authorization': `token ${token}`
        }
    });

    const username = JSON.parse(res.getBody('utf8')).login;

    console.log(username);

    const authData = JSON.stringify({ 'token': token, 'username': username });

    fs.writeFileSync('auth.json', authData, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File created successfully');
    });

}

// retrieving token

const repoName = input("Repo Name: ");
const repoDescription = input("Repo description (optional): ");

const data = fs.readFileSync('auth.json', (data) => {
    console.log(data.data.login);
    process.exit(0);
});
const token = JSON.parse(data).token;
// making repo
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

console.log('Repository created successfully. Cloning now');


// TODO: CLONE THIS STUPID REPO RISHI
// exec(`git clone https://github.com/`)