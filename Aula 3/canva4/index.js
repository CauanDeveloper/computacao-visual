window.onload = () => {
    const canvas = document.getElementById('randomGrid');
    const ctx = canvas.getContext('2d');
    const gridSize = 10;
    const cellSize = canvas.width / gridSize; 

    function generatePixel() {
        // Gera uma cor
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
        const x = Math.floor(Math.random() * gridSize) * cellSize;
        const y = Math.floor(Math.random() * gridSize) * cellSize;
        
        ctx.fillStyle = randomColor;
        ctx.fillRect(x, y, cellSize, cellSize);
    }

    setInterval(generatePixel, 50); 
};