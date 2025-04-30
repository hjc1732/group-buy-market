const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 确保dist目录存在
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// 构建CSS
try {
    execSync('npx tailwindcss -i ./src/input.css -o ./dist/output.css');
    console.log('CSS built successfully!');
} catch (error) {
    console.error('Error building CSS:', error);
} 