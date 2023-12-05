let principal = () => {
    let opcao
    do {
        opcao = Number(prompt(`ENTRE \n 1. atividade 1
                                     \n 2. atividade 2
                                     \n 3. atividade 3
                                     \n 4. atividade 4
                                     \n 5. atividade 5
                                     \n 6. sair`
                    ))

        switch(opcao){
            case 1: 
                let mat1 = []
                preencherMatriz1(mat1)
                contarElementosEntre15e20(mat1)
                console.log("Matriz:");
                    for (let i = 0; i < 3; i++) {
                        console.log(mat1[i]);
                    }
                let quantidade1 = contarElementosEntre15e20(mat1)
                console.log(`A quantidade de elementos entre 15 e 20 na matriz é: ${quantidade1}`);

                break
            case 2: 
                let mat2 = []
                preencherMatriz2(mat2)
                contarElementosEntre12e20(mat2)
                calcularMediaElementosPares(mat2)
                console.log("Matriz:");
                for (let i = 0; i < 2; i++) {
                    console.log(mat2[i]);
                }
                console.log("Quantidade de elementos entre 12 e 20 em cada linha:");
                for (let i = 0; i < 2; i++) {
                    let quantidade2 = contarElementosEntre12e20(mat2[i]);
                    console.log(`Linha ${i + 1}: ${quantidade2}`);
                }
                let media = calcularMediaElementosPares(mat2);
                console.log(`Média dos elementos pares na matriz: ${media}`);

                break
            case 3: 
                let mat3 = []
                preencherMatriz3(mat3)
                encontrarMaiorElemento(mat3)
                encontrarMenorElemento(mat3)
                console.log("Matriz:");
                for (let i = 0; i < 6; i++) {
                    console.log(mat3[i]);
                }
                let maiorElemento = encontrarMaiorElemento(mat3);
                console.log(`Maior elemento: ${maiorElemento.valor}, Linha: ${maiorElemento.linha}, Coluna: ${maiorElemento.coluna}`);
                const menorElemento = encontrarMenorElemento(mat3);
                console.log(`Menor elemento: ${menorElemento.valor}, Linha: ${menorElemento.linha}, Coluna: ${menorElemento.coluna}`);

                break
            case 4: 
                let notas = []
                let nomes = []
                preencherMatriz4(notas, nomes)
                calcularMedia(notas)
                determinarSituacao(notas)
                console.log("\nSituação dos alunos:");
                let mediaClasse = 0;

                for (let i=0;i<15;i++) {
                    const mediaAluno = calcularMedia(notas[i]);
                    mediaClasse += mediaAluno;
                    const situacao = determinarSituacao(mediaAluno);

                    console.log(`${nomes[i]}: Média: ${mediaAluno.toFixed(2)} - Situação: ${situacao}`);
                }
                mediaClasse /= 15;
                console.log(`\nMédia da Classe: ${mediaClasse.toFixed(2)}`);

                break
            case 5: 
                let mat5 = []
                preencherMatrizVendas(mat5)
                let matrizVendas = preencherMatrizVendas(mat5);
                calcularTotalPorMes(matrizVendas);
                calcularTotalPorSemana(matrizVendas);
                calcularTotalAnual(matrizVendas);

                break
            case 6: alert(`Programa será encerrado`)
                break
            default: alert(`Opção inválida`)
        }
    } while (opcao != 6);
}

principal();

// atividade 1
let preencherMatriz1 = (mat1) => {
    for (let i=0;i<3;i++) {
        mat1[i] = []
        for (let j=0;j<5;j++) {
            mat1[i][j] = Number(prompt(`Digite um numero: `))
        }
    }
}

let contarElementosEntre15e20 = (mat1) =>{
    let cont = 0;
    for (let i=0;i<mat1.length;i++){
        for (let j= 0;j<mat1[i].length;j++) {
            if (mat1[i][j] >= 15 && mat1[i][j] <= 20) {
                cont++;
            }
        }
    }
    return cont;
}

// atividade 2
let preencherMatriz2 = (mat2) => {
    for (let i=0;i<2;i++) {
        mat2[i] = []
        for (let j=0;j<4;j++) {
            mat2[i][j] = Number(prompt(`Digite um numero: `))
        }
    }
}

let contarElementosEntre12e20 = (mat2) => {
    let cont = 0;
    for (let i=0;i<mat2.length;i++) {
        if (mat2[i] >= 12 && mat2[i] <= 20) {
            cont++;
        }
    }
    return cont;
}

let calcularMediaElementosPares = (mat2) => {
    let soma = 0;
    let quantidade = 0;
    for (let i=0;i<mat2.length;i++) {
        for (let j=0;j<mat2[i].length;j++) {
            if (mat2[i][j] % 2 == 0) {
                soma += mat2[i][j];
                quantidade++;
            }
        }
    }
    return quantidade > 0 ? soma / quantidade : 0;
}

// atividade 3
let preencherMatriz3 = (mat3) => {
    for (let i=0;i<6;i++) {
        mat3[i] = []
        for (let j=0;j<3;j++) {
            mat1[i][j] = Number(prompt(`Digite um numero: `))
        }
    }
}

let encontrarMaiorElemento = (mat3) => {
    let maior = mat3[0][0];
    let linhaMaior = 0;
    let colunaMaior = 0;
    
    for (let i = 0; i < mat3.length; i++) {
        for (let j = 0; j < mat3[i].length; j++) {
            if (mat3[i][j] > maior) {
                maior = mat3[i][j];
                linhaMaior = i;
                colunaMaior = j;
            }
        }
    }
    
    return { valor: maior, linha: linhaMaior, coluna: colunaMaior };
}

let encontrarMenorElemento = (mat3) => {
    let menor = mat3[0][0];
    let linhaMenor = 0;
    let colunaMenor = 0;
    
    for (let i = 0; i < mat3.length; i++) {
        for (let j = 0; j < mat3[i].length; j++) {
            if (mat3[i][j] < menor) {
                menor = mat3[i][j];
                linhaMenor = i;
                colunaMenor = j;
            }
        }
    }
    
    return { valor: menor, linha: linhaMenor, coluna: colunaMenor };
}

// atividade 4
let preencherMatriz4 = (notas, nomes) => {
    for (let i=0;i<15;i++) {
        let nomeAluno = prompt(`Digite o nome do aluno ${i + 1}:`);
        nomes.push(nomeAluno);
    
        let notasAluno = [];
        for (let j=0;j<5;j++) {
            let nota = Number(prompt(`Digite a nota do(a) ${nomeAluno} na prova ${j + 1}:`));
            notasAluno.push(nota);
        }
        notas.push(notasAluno);
    }
}

let calcularMedia = (notas) => {
    let soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return soma / 5;
}

let determinarSituacao = (mediaAluno) => {
    if (mediaAluno >= 7) {
        return "Aprovado";
    } else if (mediaAluno >= 4) {
        return "Exame";
    } else {
        return "Reprovado";
    }
}

// atividade 5
let preencherMatrizVendas = (mat5) => {
    for (let i=0;i<12;i++) {
        mat5[i] = []
        for (let j=0;j<4;j++) {
            mat5[i][j] = Number(prompt(`Digite um numero: `))
        }
    }
}

let calcularTotalPorMes = (mat5) => {
    let meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril',
      'Maio', 'Junho', 'Julho', 'Agosto',
      'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
  
    for (let i=0;i<12;i++) {
      let totalMes = 0;
      for (let j=0;j<4;j++) {
        totalMes += mat5[i][j];
      }
      console.log(`${meses[i]}: R$ ${totalMes.toFixed(2)}`);
    }
}

let calcularTotalPorSemana = (mat5) => {
    for (let semana=0;semana<4;semana++) {
      let totalSemana = 0;
      for (let mes=0;mes<12;mes++) {
        totalSemana += mat5[mes][semana];
      }
      console.log(`Semana ${semana + 1}: R$ ${totalSemana.toFixed(2)}`);
    }
}

let calcularTotalAnual = (mat5) => {
    let totalAnual = 0;
    for (let i=0;i<12;i++) {
      for (let j=0;j<4;j++) {
        totalAnual += mat5[i][j];
      }
    }
    console.log(`Total anual: R$ ${totalAnual.toFixed(2)}`);
}