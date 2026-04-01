function calcular() {

    let x = document.getElementById("valoresX").value.split(",").map(Number);
    let y = document.getElementById("valoresY").value.split(",").map(Number);

    if (x.length !== y.length || x.length === 0) {
        document.getElementById("resultado").innerHTML =
            "Erro: dados inválidos!";
        return;
    }

    let n = x.length;

    let somaX = 0, somaY = 0, somaXY = 0, somaX2 = 0, somaY2 = 0;

    let linhas = "";

    for (let i = 0; i < n; i++) {

        let x2 = x[i] * x[i];
        let y2 = y[i] * y[i];
        let xy = x[i] * y[i];

        somaX += x[i];
        somaY += y[i];
        somaXY += xy;
        somaX2 += x2;
        somaY2 += y2;

        linhas += `
            <tr>
                <td>${x[i]}</td>
                <td>${y[i]}</td>
                <td>${x2}</td>
                <td>${y2}</td>
                <td>${xy}</td>
            </tr>
        `;
    }

    // Regressão (y = ax + b)
    let a = (n * somaXY - somaX * somaY) / (n * somaX2 - somaX * somaX);
    let b = (somaY - a * somaX) / n;

    // R²
    let mediaY = somaY / n;
    let sqTotal = 0, sqRes = 0;

    for (let i = 0; i < n; i++) {
        let yEst = a * x[i] + b;
        sqTotal += Math.pow(y[i] - mediaY, 2);
        sqRes += Math.pow(y[i] - yEst, 2);
    }

    let r2 = 1 - (sqRes / sqTotal);

    // Resultado
    let interpretacao = "";

    // Interpretação da inclinação (a)
    if (a > 0) {
        interpretacao += "Interpretação da inclinação (a) => Tendência de crescimento ao longo do tempo.<br>";
    } else if (a < 0) {
        interpretacao += "Interpretação da inclinação (a) => Tendência de queda ao longo do tempo.<br>";
    } else {
        interpretacao += "Interpretação da inclinação (a) => Não há tendência clara.<br>";
    }

    // Interpretação do R²
    if (r2 > 0.9) {
        interpretacao += "Interpretação do R² => O modelo explica muito bem os dados.<br>";
    } else if (r2 > 0.7) {
        interpretacao += "Interpretação do R² => O modelo explica bem os dados.<br>";
    } else if (r2 > 0.5) {
        interpretacao += "Interpretação do R² => O modelo tem explicação razoável.<br>";
    } else {
        interpretacao += "Interpretação do R² => O modelo não explica bem os dados.<br>";
    }

    // Resultado final exibido
    document.getElementById("resultado").innerHTML = `
        <strong>Resultado Matemático:</strong><br>
        Equação: y = ${a.toFixed(2)}x + ${b.toFixed(2)}<br>
        R² = ${r2.toFixed(4)}<br><br>

        <strong>Interpretação:</strong><br>
        ${interpretacao}
    `;

    // Tabela
    document.getElementById("tabela").innerHTML = `
        <br><table>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>X²</th>
                <th>Y²</th>
                <th>XY</th>
            </tr>

            ${linhas}

            <tr>
                <th>${somaX}</th>
                <th>${somaY}</th>
                <th>${somaX2}</th>
                <th>${somaY2}</th>
                <th>${somaXY}</th>
            </tr>
        </table>
    `;
}