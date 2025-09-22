
        window.onload = () => {
            const canvas = document.getElementById('pixelCanvas');
            const ctx = canvas.getContext('2d');

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const squareSize = 5; 
            function drawGrid() {
                for (let y = 0; y < canvas.height; y += squareSize) {
                    for (let x = 0; x < canvas.width; x += squareSize) {
                        ctx.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
                        ctx.fillRect(x, y, squareSize, squareSize);
                    }
                }
            }
            setInterval(drawGrid, 30);
        };