window.onload = () => {
    const canvas = document.getElementById('meucanvas');
    const ctx = canvas.getContext('2d');

    // Loop para criar 4 quadrados
    for (let i = 0; i < 5; i++) {
        
        //cor
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;

        // largura, altura, posição X e Y aleatórias
        const width = Math.random() * 10 + 100;  
        const height = Math.random() * 50 + 50; 
        const x = Math.random() * (canvas.width - width);
        const y = Math.random() * (canvas.height - height);
        
        // Desenha o retângulo com os valores gerados
        ctx.fillRect(x, y, width, height);
    }
};