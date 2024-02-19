const fs = require('fs');
const path = require('path');

const leetCodePath = path.join(__dirname); // Asegure-se de especificar o caminho correto aqui

const readProblems = (dir) => {
    return fs.readdirSync(dir).map(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        return {
            file,
            mtime: stats.mtime
        };
    });
};

const groupByDate = (problems) => {
    return problems.reduce((acc, { mtime }) => {
        const date = mtime.toISOString().split('T')[0]; // Get date in YYYY-MM-DD format
        if (!acc[date]) {
            acc[date] = 0;
        }
        acc[date]++;
        return acc;
    }, {});
};

const getStatistics = () => {
    const difficulties = ['Easy', 'Medium', 'Hard'];
    let totalProblemsByDifficulty = { Easy: 0, Medium: 0, Hard: 0 }; // Corrigido para usar um objeto
    let dailyStats = {};

    difficulties.forEach(difficulty => {
        const dirPath = path.join(leetCodePath, difficulty);
        const problems = readProblems(dirPath);
        totalProblemsByDifficulty[difficulty] += problems.length; // Corrigido para acumular por dificuldade

        const dailyCounts = groupByDate(problems);
        Object.keys(dailyCounts).forEach(date => {
            if (!dailyStats[date]) {
                dailyStats[date] = { Easy: 0, Medium: 0, Hard: 0 };
            }
            dailyStats[date][difficulty] += dailyCounts[date];
        });
    });

    console.log("Problems solved by difficulty:");
    difficulties.forEach(difficulty => {
        console.log(`${difficulty}: ${totalProblemsByDifficulty[difficulty]}`); // Corrigido para exibir corretamente
    });

    let totalProblems = Object.values(totalProblemsByDifficulty).reduce((sum, count) => sum + count, 0);
    console.log(`\nTotal problems solved: ${totalProblems}`);

    console.log("\nProblems solved per day by difficulty:");
    Object.keys(dailyStats).sort().reverse().forEach(date => {
        console.log(`${date}: Easy - ${dailyStats[date].Easy}, Medium - ${dailyStats[date].Medium}, Hard - ${dailyStats[date].Hard}`);
    });
};

getStatistics();
