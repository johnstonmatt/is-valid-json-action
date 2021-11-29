const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs')
const path = require('path')

function isValidJSON(text) {
    try {
        JSON.parse(text);
        return true;
    } catch {
        return false;
    }
}

try {
    // `pathToFile` input defined in action metadata file
    const pathToFile = core.getInput('path-to-file');
    console.log(`attempting to parse ${pathToFile}`);

    fs.readFile(
        path.join(process.env.GITHUB_WORKSPACE, pathToFile), 'utf8', (err, data) => {
            if (!err) {
                const result = isValidJSON(data);
                result ? core.setOutput("is-valid-json", true) : core.setFailed(`file at "${pathToFile}" is not valid JSON`);
            } else {
                core.setFailed(`failed to read file at "${pathToFile}"`);
            }
        }
    )
} catch (error) {
    core.setFailed(error.message);
}