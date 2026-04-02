# ANÁLISE DE VENDAS DE TINTAS COM REGRESSÃO LINEAR

## DESCRIÇÃO DO PROJETO

Este projeto apresenta uma análise preditiva simples sobre vendas de produtos de uma loja de tintas, utilizando **regressão linear simples**.

A aplicação foi desenvolvida com **HTML, CSS e JavaScript**, exibindo:

- a base de dados original em tabela
- os resultados separados por produto em accordions
- a equação da reta `(y = ax + b)`
- o coeficiente de determinação `(R²)`
- a previsão dos próximos 3 meses `(13, 14 e 15)`
- a soma das vendas previstas por trimestre
- a tendência de cada produto
- uma planilha final com paginação usando **DataTables.js**
- um gráfico de tendência para cada produto

---

## TIPO DE ANÁLISE

Este projeto utiliza **aprendizado supervisionado**.

### Por que é supervisionado?

Porque o modelo trabalha com dados históricos já conhecidos, nos quais existe uma variável de entrada e uma variável de saída:

- **X = mês**
- **Y = vendas**

Ou seja, o algoritmo aprende a relação entre os meses e a quantidade vendida com base em exemplos já rotulados, para então prever valores futuros.

---

## TÉCNICA UTILIZADA

A técnica utilizada foi **Regressão Linear Simples**.

A regressão linear simples busca encontrar uma reta que melhor representa a relação entre duas variáveis numéricas, por meio da fórmula:

```text
y = ax + b