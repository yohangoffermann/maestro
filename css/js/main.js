document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado');
    
    // Adicionar inputs
    const parametros = document.getElementById('parametros');
    parametros.innerHTML = `
        <input type="number" id="vgv" placeholder="VGV">
        <input type="number" id="prazo" placeholder="Prazo (meses)">
        <button id="calcular">Calcular</button>
    `;
    
    // Adicionar evento ao botão
    document.getElementById('calcular').addEventListener('click', calcular);
});

function calcular() {
    console.log('Calculando...');
    // Implementar lógica de cálculo aqui
    
    // Exemplo de criação de gráfico
    const ctx = document.getElementById('grafico').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Fluxo de Caixa',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
    
    // Exemplo de análise
    document.getElementById('analise').innerHTML = '<p>Análise do fluxo de caixa...</p>';
}
