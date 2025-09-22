/**
 * Função para desenhar um polígono regular (que aproxima um círculo) em um canvas.
 * @param {CanvasRenderingContext2D} ctx - O contexto 2D do canvas.
 * @param {number} centerX - A coordenada X do centro do círculo.
 * @param {number} centerY - A coordenada Y do centro do círculo.
 * @param {number} radius - O raio do círculo.
 * @param {number} segments - O número de segmentos de reta para desenhar.
 */
function drawCircleWithSegments(ctx, centerX, centerY, radius, segments) {
    // Começa um novo caminho
    ctx.beginPath();

    
    const startAngle = -Math.PI / 2; // Começa do topo
    let startX = centerX + radius * Math.cos(startAngle);
    let startY = centerY + radius * Math.sin(startAngle);
    ctx.moveTo(startX, startY);

    
    for (let i = 1; i <= segments; i++) {
        
        const angle = (i / segments) * 2 * Math.PI + startAngle;
        
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        // Desenha uma linha até o novo ponto
        ctx.lineTo(x, y);
    }

    // estilo da linha
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;

    // Fecha o caminho
    ctx.closePath();

    //contorno
    ctx.stroke();
}

// Executa o código quando o documento HTML for totalmente carregado
window.onload = function() {
    const canvas8 = document.getElementById('canvas8');
    const ctx8 = canvas8.getContext('2d');
    drawCircleWithSegments(ctx8, 150, 150, 100, 8);

    const canvas16 = document.getElementById('canvas16');
    const ctx16 = canvas16.getContext('2d');
    drawCircleWithSegments(ctx16, 150, 150, 100, 16);

    const canvas32 = document.getElementById('canvas32');
    const ctx32 = canvas32.getContext('2d');
    drawCircleWithSegments(ctx32, 150, 150, 100, 32);

    const canvas64 = document.getElementById('canvas64');
    const ctx64 = canvas64.getContext('2d');
    drawCircleWithSegments(ctx64, 150, 150, 100, 64);
};