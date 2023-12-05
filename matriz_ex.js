let leituraMatriz = (mat) => {
    for(let i=0;i<4;i++){
        mat[i] = []
        for(let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Digite um numero: `))
        }
    }
}

let imprimeMatriz = (mat) => {
    console.log(mat);
}

let diagonalPrincipal = () => {
    for(let i=0;i<4;i++){
        soma = soma + mat[i][i]
    }
    console.log(`A soma da diagonal principal é: ${soma}`)
}

let diagonalSegundaria = (mat) => {
    for(let i=0;i<4;i++){
        soma = soma + mat[i][3-i]
    }
    console.log(`A soma da diagonal segundaria é: ${soma}`)
}

let principal = () => { 
    let mat = []
    leituraMatriz(mat)
    imprimeMatriz(mat)
    diagonalPrincipal(mat)
    diagonalSegundaria(mat)
}

principal()