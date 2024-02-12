const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
};

const sanitizeFileName = (fileName) => {
    // Specifically handle the period and space after the problem number
    fileName = fileName.replace(/\. /, '.'); // Remove space after the period for problem number
    // Remove or replace invalid characters for file names, and replace spaces with dashes
    return fileName.replace(/[\/\\?%*:|"<>]/g, '-').replace(/\s+/g, '-');
};

const ensureDirectoryExistence = (filePath) => {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
};

const main = async () => {
    const problemNameAndNumber = await askQuestion('Enter the problem number and name (e.g., 387. First Unique Character in a String): ');
    const problemURL = await askQuestion('Enter the problem URL: ');
    const problemDifficulty = await askQuestion('Enter the problem difficulty (Easy/Medium/Hard): ');

    const [problemNumber, ...problemNameParts] = problemNameAndNumber.split(' ');
    const problemName = problemNameParts.join(' ');
    const sanitizedFileName = sanitizeFileName(`${problemNumber}${problemName}`);
    const fileName = `${sanitizedFileName}.js`;
    const filePath = path.join(__dirname, problemDifficulty, fileName);

    ensureDirectoryExistence(filePath);

    const templatePath = path.join(__dirname, 'problemTemplate.txt');
    fs.readFile(templatePath, 'utf8', (err, template) => {
        if (err) {
            console.error('Error reading the template file:', err);
            rl.close();
            return;
        }

        const fileContent = template
            .replace('%PROBLEM_NAME%', problemNameAndNumber)
            .replace('%PROBLEM_URL%', problemURL)
            .replace('%PROBLEM_DIFFICULTY%', problemDifficulty)
            .replace(/%FUNCTION_NAME%/g, problemName.replace(/\s+/g, ''));

        fs.writeFile(filePath, fileContent, (err) => {
            if (err) {
                console.error('Error writing the new problem file:', err);
                rl.close();
                return;
            }

            console.log(`File created successfully: ${filePath}`);
            rl.close();
        });
    });
};

main();
