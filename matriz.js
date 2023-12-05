// atividade 6

let preencheMat6 = (mat6, linha, coluna) => { 
    for(let i = 0; i < linha; i++){
        mat6[i] = []
        for(let j = 0; j < coluna; j++){
            mat6[i][j] =  Number(prompt(`Digite um numero: `))
        }
    }
    return mat6
}

let somaColunaMat6 = (mat6, linha, coluna) => {
    let somas = new Array(coluna).fill(0)
    for(let i = 0; i < linha; i++){
        for(let j = 0; j < coluna; j++){
            somas[j] += mat6[i][j]
        }
    }
    return somas
}
let multiplicaMat6 = (mat6, somas) => {
    let matrizResultante = mat6.map((linha) =>
        linha.map((elemento, j) => elemento * somas[j])
    )
    return matrizResultante
}
let imprimiMat6 = (mat6) => {
    mat6.forEach((linha) => console.log(linha.join(' ')))
}
let imprimiSomaMat6 = (somas) => {
    console.log("Somas das colunas:")
    console.log(somas.join(' '))
}

let mat6 = []
let matriz = preencheMat6(mat6, 20, 10)
let somas = somaColunaMat6(mat6, 20, 10)
let matrizResultante = multiplicaMat6(mat6, somas)
    console.log("Matriz original:")
    imprimiMat6(matriz)
    console.log("\nMatriz resultante após multiplicação:")
    imprimiMat6(matrizResultante)
    imprimiSomaMat6(somas)

// atividade 7

let preencheMat7 = (mat7, linha, coluna) => {
    for(let i = 0; i < linha; i++){
        mat7[i] = []
        for(let j = 0; j < coluna; j++){
            mat7[i][j] =  Number(prompt(`Digite um numero: `))
        }
    }
    return mat7
}

let imprimiMat7 = (mat7) => {
    mat7.forEach((linha) => console.log(linha.join(' ')))
}

let somaMat7 = (m, n) => {
    let resultado = []

    for(let i = 0; i < m.length; i++){
        resultado[i] = []
        for (let j = 0; j < n[0].length; j++) {
            let soma = 0
            for(let k = 0; k < n.length; k++){
                soma += m[i][k] * n[k][j]
            }
            resultado[i][j] = soma
        }
    }
    console.log("Soma das Linhas de M com as Colunas de N:")
    imprimiMat7(resultado)
}

let mat7 = []
let M = preencheMat7(mat7, 4, 6)
let N = preencheMat7(mat7, 6, 4)
    console.log("Matriz M:")
    imprimiMat7(M)
    console.log("\nMatriz N:")
    imprimiMat7(N)
    somaMat7(M, N)

// atividade 8

let preencheMat8 = (mat8, linha, coluna) => {
    for(let i = 0; i < linha; i++){
        mat8[i] = []
        for(let j = 0; j < coluna; j++){
            mat8[i][j] = Number(prompt(`Digite um numero: `))
        }
    }
    return mat8
}

let somaMat8 = (matA, matB) => {
    let resultado = []
    for(let i = 0; i < matA.length; i++){
        resultado[i] = []
        for(let j = 0; j < matA[0].length; j++){
            resultado[i][j] = matA[i][j] + matB[i][j]
        }
    }
    return resultado
}

let subtraiMat8 = (matA, matB) => {
    let resultado = []
    for(let i = 0; i < matA.length; i++){
        resultado[i] = []
        for(let j = 0; j < matA[0].length; j++){
            resultado[i][j] = matA[i][j] - matB[i][j]
        }
    }
    return resultado
}

let imprimiMat8 = (mat8) => {
    mat8.forEach((linha) => console.log(linha.join(' ')))
}
let mat8 = []
let matA = preencheMat8(mat8, 3, 8)
let matB = preencheMat8(mat8, 3, 8)
let soma = somaMat8(matA, matB)
    console.log("Matriz da Soma:")
    imprimiMat8(soma)
let diferença = subtraiMat8(matA, matB)
    console.log("\nMatriz da Diferença:")
    imprimiMat8(diferença)

// atividade 9

let preencheMat9 = (mat9, linha, coluna) => {
    for(let i = 0; i < linha; i++){
        mat9[i] = []
        for(let j = 0; j < coluna; j++){
            mat9[i][j] = Number(prompt(`Digite um numero: `))
        }
    }
    return mat9
}

let multiplicaMat9 = (matriz9, n) => {
    let resultado = []
    for(let i = 0; i < matriz9.length; i++){
        resultado[i] = []
        for(let j = 0; j < matriz9[0].length; j++){
            resultado[i][j] = matriz9[i][j] * n
        }
    }
    return resultado
}

let imprimiMat9 = (mat9) => {
    mat9.forEach((linha) => console.log(linha.join(' ')))
}

let mat9 = []
let matriz9 = preencheMat9(mat9, 3, 3)
let n = Number(prompt("Digite um número para multiplicar a matriz:"))
let resultanteMat9 = multiplicaMat9(matriz9, n)
    console.log("\nMatriz da Multiplicação:")
    imprimiMat9(resultanteMat9)

// atividade 10

let preencheMat10 = (mat10, linha, coluna) => {
    for(let i = 0; i < linha; i++){
        mat10[i] = []
        for(let j = 0; j < coluna; j++){
            mat10[i][j] = Number(prompt(`Digite um numero: `))
        }
    }
    return mat10
}

let somaLinha = (mat10, linha) => {
    return mat10[linha - 1].reduce((soma, elemento) => soma + elemento, 0)
}

let somaColuna = (mat10, coluna) => {
    return mat10.reduce((soma, linha) => soma + linha[coluna - 1], 0)
}

let somaDiagonalPrincipal = (mat10) => {
    return mat10.reduce((soma, linha, i) => soma + linha[i], 0)
}

let somaDiagonalSecundaria = (mat10) => {
    return mat10.reduce((soma, linha, i) => soma + linha[mat10.length - 1 - i], 0)
}

let somaElementos = (mat10) => {
    return mat10.flat().reduce((soma, elemento) => soma + elemento, 0)
}

let imprimiMat10 = (mat10) => {
    mat10.forEach((linha) => console.log(linha.join(' ')))
}

let mat10 = []
let matriz10 = preencheMat10(mat10, 5, 5)
let somaLinhaMat10 = somaLinha(mat10, 4)
let somaColunaMat10 = somaColuna(mat10, 2)
let somaDiagonalP = somaDiagonalPrincipal(mat10)
let somaDiagonalS = somaDiagonalSecundaria(mat10)
let SomaTodos = somaElementos(mat10)

    console.log("Matriz:")
    imprimiMat10(matriz10)
    console.log(`\nSoma dos elementos da linha 4: ${somaLinhaMat10}`)
    console.log(`\nSoma dos elementos da coluna 2: ${somaColunaMat10}`)
    console.log(`\nSoma dos elementos da diagonal principal: ${somaDiagonalP}`)
    console.log(`\nSoma dos elementos da diagonal secundária: ${somaDiagonalS}`)
    console.log(`\nSoma de todos os elementos da matriz: ${SomaTodos}`)
