const dadosVendas = [
    { id: 1, produto: "Tinta Acrílica", ano: 2023, mes: 1, trimestre: 1, vendas: 120 },
    { id: 2, produto: "Tinta Acrílica", ano: 2023, mes: 2, trimestre: 1, vendas: 150 },
    { id: 3, produto: "Tinta Acrílica", ano: 2023, mes: 3, trimestre: 1, vendas: 130 },
    { id: 4, produto: "Tinta Acrílica", ano: 2023, mes: 4, trimestre: 2, vendas: 180 },
    { id: 5, produto: "Tinta Acrílica", ano: 2023, mes: 5, trimestre: 2, vendas: 200 },
    { id: 6, produto: "Tinta Acrílica", ano: 2023, mes: 6, trimestre: 2, vendas: 210 },
    { id: 7, produto: "Tinta Acrílica", ano: 2023, mes: 7, trimestre: 3, vendas: 190 },
    { id: 8, produto: "Tinta Acrílica", ano: 2023, mes: 8, trimestre: 3, vendas: 220 },
    { id: 9, produto: "Tinta Acrílica", ano: 2023, mes: 9, trimestre: 3, vendas: 210 },
    { id: 10, produto: "Tinta Acrílica", ano: 2023, mes: 10, trimestre: 4, vendas: 250 },
    { id: 11, produto: "Tinta Acrílica", ano: 2023, mes: 11, trimestre: 4, vendas: 300 },
    { id: 12, produto: "Tinta Acrílica", ano: 2023, mes: 12, trimestre: 4, vendas: 400 },

    { id: 13, produto: "Tinta Esmalte", ano: 2023, mes: 1, trimestre: 1, vendas: 80 },
    { id: 14, produto: "Tinta Esmalte", ano: 2023, mes: 2, trimestre: 1, vendas: 100 },
    { id: 15, produto: "Tinta Esmalte", ano: 2023, mes: 3, trimestre: 1, vendas: 90 },
    { id: 16, produto: "Tinta Esmalte", ano: 2023, mes: 4, trimestre: 2, vendas: 120 },
    { id: 17, produto: "Tinta Esmalte", ano: 2023, mes: 5, trimestre: 2, vendas: 130 },
    { id: 18, produto: "Tinta Esmalte", ano: 2023, mes: 6, trimestre: 2, vendas: 140 },
    { id: 19, produto: "Tinta Esmalte", ano: 2023, mes: 7, trimestre: 3, vendas: 150 },
    { id: 20, produto: "Tinta Esmalte", ano: 2023, mes: 8, trimestre: 3, vendas: 160 },
    { id: 21, produto: "Tinta Esmalte", ano: 2023, mes: 9, trimestre: 3, vendas: 170 },
    { id: 22, produto: "Tinta Esmalte", ano: 2023, mes: 10, trimestre: 4, vendas: 180 },
    { id: 23, produto: "Tinta Esmalte", ano: 2023, mes: 11, trimestre: 4, vendas: 190 },
    { id: 24, produto: "Tinta Esmalte", ano: 2023, mes: 12, trimestre: 4, vendas: 200 },

    { id: 25, produto: "Tinta Látex", ano: 2023, mes: 1, trimestre: 1, vendas: 200 },
    { id: 26, produto: "Tinta Látex", ano: 2023, mes: 2, trimestre: 1, vendas: 210 },
    { id: 27, produto: "Tinta Látex", ano: 2023, mes: 3, trimestre: 1, vendas: 220 },
    { id: 28, produto: "Tinta Látex", ano: 2023, mes: 4, trimestre: 2, vendas: 230 },
    { id: 29, produto: "Tinta Látex", ano: 2023, mes: 5, trimestre: 2, vendas: 240 },
    { id: 30, produto: "Tinta Látex", ano: 2023, mes: 6, trimestre: 2, vendas: 250 },
    { id: 31, produto: "Tinta Látex", ano: 2023, mes: 7, trimestre: 3, vendas: 260 },
    { id: 32, produto: "Tinta Látex", ano: 2023, mes: 8, trimestre: 3, vendas: 270 },
    { id: 33, produto: "Tinta Látex", ano: 2023, mes: 9, trimestre: 3, vendas: 280 },
    { id: 34, produto: "Tinta Látex", ano: 2023, mes: 10, trimestre: 4, vendas: 290 },
    { id: 35, produto: "Tinta Látex", ano: 2023, mes: 11, trimestre: 4, vendas: 300 },
    { id: 36, produto: "Tinta Látex", ano: 2023, mes: 12, trimestre: 4, vendas: 310 },

    { id: 37, produto: "Tinta Spray", ano: 2023, mes: 1, trimestre: 1, vendas: 60 },
    { id: 38, produto: "Tinta Spray", ano: 2023, mes: 2, trimestre: 1, vendas: 70 },
    { id: 39, produto: "Tinta Spray", ano: 2023, mes: 3, trimestre: 1, vendas: 65 },
    { id: 40, produto: "Tinta Spray", ano: 2023, mes: 4, trimestre: 2, vendas: 80 },
    { id: 41, produto: "Tinta Spray", ano: 2023, mes: 5, trimestre: 2, vendas: 85 },
    { id: 42, produto: "Tinta Spray", ano: 2023, mes: 6, trimestre: 2, vendas: 90 },
    { id: 43, produto: "Tinta Spray", ano: 2023, mes: 7, trimestre: 3, vendas: 95 },
    { id: 44, produto: "Tinta Spray", ano: 2023, mes: 8, trimestre: 3, vendas: 100 },
    { id: 45, produto: "Tinta Spray", ano: 2023, mes: 9, trimestre: 3, vendas: 105 },
    { id: 46, produto: "Tinta Spray", ano: 2023, mes: 10, trimestre: 4, vendas: 110 },
    { id: 47, produto: "Tinta Spray", ano: 2023, mes: 11, trimestre: 4, vendas: 120 },
    { id: 48, produto: "Tinta Spray", ano: 2023, mes: 12, trimestre: 4, vendas: 130 },

    { id: 49, produto: "Tinta PVA", ano: 2023, mes: 1, trimestre: 1, vendas: 150 },
    { id: 50, produto: "Tinta PVA", ano: 2023, mes: 2, trimestre: 1, vendas: 160 }
];

function obterProdutosAgrupados() {
    const agrupado = {};

    for (const item of dadosVendas) {
        if (!agrupado[item.produto]) {
            agrupado[item.produto] = [];
        }

        agrupado[item.produto].push(item);
    }

    return agrupado;
}

function calcularRegressaoLinear(registros) {
    const n = registros.length;
    const x = registros.map(item => item.mes);
    const y = registros.map(item => item.vendas);

    let somaX = 0;
    let somaY = 0;
    let somaXY = 0;
    let somaX2 = 0;

    for (let i = 0; i < n; i++) {
        somaX += x[i];
        somaY += y[i];
        somaXY += x[i] * y[i];
        somaX2 += x[i] * x[i];
    }

    const denominador = (n * somaX2) - (somaX * somaX);

    let a = 0;
    let b = 0;

    if (denominador !== 0) {
        a = ((n * somaXY) - (somaX * somaY)) / denominador;
        b = (somaY - (a * somaX)) / n;
    }

    const previsoes = x.map(valorX => (a * valorX) + b);

    const mediaY = somaY / n;
    let sqTotal = 0;
    let sqRes = 0;

    for (let i = 0; i < n; i++) {
        sqTotal += Math.pow(y[i] - mediaY, 2);
        sqRes += Math.pow(y[i] - previsoes[i], 2);
    }

    let r2 = 0;

    if (sqTotal === 0) {
        r2 = 1;
    } else {
        r2 = 1 - (sqRes / sqTotal);
    }

    return { a, b, r2 };
}

function preverVenda(a, b, mes) {
    return (a * mes) + b;
}

function obterTextoConfiabilidade(r2, quantidadeRegistros) {
    let texto = "";

    if (r2 >= 0.9) {
        texto = "Confiabilidade muito alta";
    } else if (r2 >= 0.7) {
        texto = "Confiabilidade alta";
    } else if (r2 >= 0.5) {
        texto = "Confiabilidade moderada";
    } else {
        texto = "Confiabilidade baixa";
    }

    if (quantidadeRegistros < 3) {
        texto += " (amostra muito pequena)";
    }

    return texto;
}

function obterTextoTendencia(a) {
    if (a > 0) {
        return "Crescimento";
    }

    if (a < 0) {
        return "Queda";
    }

    return "Estabilidade";
}

function obterTrimestreDoMes(mes) {
    if (mes >= 1 && mes <= 3) return "1º trimestre";
    if (mes >= 4 && mes <= 6) return "2º trimestre";
    if (mes >= 7 && mes <= 9) return "3º trimestre";
    if (mes >= 10 && mes <= 12) return "4º trimestre";
    if (mes >= 13 && mes <= 15) return "Próximo trimestre (13-15)";
    return "Fora da faixa";
}

function preencherTabelaBase() {
    const corpoTabelaBase = document.getElementById("corpoTabelaBase");

    let linhas = "";

    for (const item of dadosVendas) {
        linhas += `
            <tr>
                <td>${item.id}</td>
                <td>${item.produto}</td>
                <td>${item.ano}</td>
                <td>${item.mes}</td>
                <td>${item.trimestre}</td>
                <td>${item.vendas}</td>
            </tr>
        `;
    }

    corpoTabelaBase.innerHTML = linhas;
}

function gerarResultados() {
    const produtosAgrupados = obterProdutosAgrupados();
    const resultadoPorProduto = document.getElementById("resultadoPorProduto");
    const corpoTabelaPlanilha = document.getElementById("corpoTabelaPlanilha");

    let htmlResultados = "";
    let htmlPlanilha = "";

    for (const produto in produtosAgrupados) {
        const registros = produtosAgrupados[produto].sort((a, b) => a.mes - b.mes);
        const { a, b, r2 } = calcularRegressaoLinear(registros);

        const confiabilidade = obterTextoConfiabilidade(r2, registros.length);
        const tendencia = obterTextoTendencia(a);

        const previsoesProximosMeses = [13, 14, 15].map(mes => {
            return {
                mes: mes,
                valor: preverVenda(a, b, mes)
            };
        });

        const somaTrimestres = {
            "1º trimestre": 0,
            "2º trimestre": 0,
            "3º trimestre": 0,
            "4º trimestre": 0,
            "Próximo trimestre (13-15)": 0
        };

        for (let mes = 1; mes <= 12; mes++) {
            const valorPrevisto = preverVenda(a, b, mes);
            const trimestre = obterTrimestreDoMes(mes);
            somaTrimestres[trimestre] += valorPrevisto;
        }

        for (const item of previsoesProximosMeses) {
            somaTrimestres["Próximo trimestre (13-15)"] += item.valor;
        }

        htmlResultados += `
            <div class="produto-card">
                <h3>${produto}</h3>
                <p><span class="texto-destaque">Equação da reta:</span> y = ${a.toFixed(2)}x + ${b.toFixed(2)}</p>
                <p><span class="texto-destaque">Inclinação (a):</span> ${a.toFixed(2)}</p>
                <p><span class="texto-destaque">Coeficiente linear (b):</span> ${b.toFixed(2)}</p>
                <p><span class="texto-destaque">R²:</span> ${r2.toFixed(4)} - ${confiabilidade}</p>
                <p><span class="texto-destaque">Tendência:</span> ${tendencia}</p>

                <h4>Previsão para os próximos 3 meses</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Mês</th>
                            <th>Venda prevista (ŷ)</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${previsoesProximosMeses.map(item => `
                            <tr>
                                <td>${item.mes}</td>
                                <td>${item.valor.toFixed(2)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>

                <h4>Previsão agrupada por trimestre</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Trimestre</th>
                            <th>Soma das vendas previstas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1º trimestre</td>
                            <td>${somaTrimestres["1º trimestre"].toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>2º trimestre</td>
                            <td>${somaTrimestres["2º trimestre"].toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>3º trimestre</td>
                            <td>${somaTrimestres["3º trimestre"].toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>4º trimestre</td>
                            <td>${somaTrimestres["4º trimestre"].toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Próximo trimestre (13-15)</td>
                            <td>${somaTrimestres["Próximo trimestre (13-15)"].toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>

                <p class="observacao">
                    Observação: para a Tinta PVA, a base possui apenas 2 meses informados na atividade, então a regressão foi calculada com amostra reduzida.
                </p>
            </div>
        `;

        for (const registro of registros) {
            const yPrevisto = preverVenda(a, b, registro.mes);

            htmlPlanilha += `
                <tr>
                    <td>${produto}</td>
                    <td>${registro.mes}</td>
                    <td>${registro.vendas}</td>
                    <td>${yPrevisto.toFixed(2)}</td>
                    <td>${r2.toFixed(4)}</td>
                </tr>
            `;
        }

        for (const item of previsoesProximosMeses) {
            htmlPlanilha += `
                <tr>
                    <td>${produto}</td>
                    <td>${item.mes}</td>
                    <td>-</td>
                    <td>${item.valor.toFixed(2)}</td>
                    <td>${r2.toFixed(4)}</td>
                </tr>
            `;
        }
    }

    resultadoPorProduto.innerHTML = htmlResultados;
    corpoTabelaPlanilha.innerHTML = htmlPlanilha;
}

document.addEventListener("DOMContentLoaded", function () {
    preencherTabelaBase();
    gerarResultados();
});