function calculoMochila(itens: TItem[], capacidade: number) {
    let idxItem = 0;
    let idxPeso = 0;
    let antigoMax = 0;
    let novoMax = 0;
  
    const numItems = itens.length;
    const pesoMatriz = new Array(numItems + 1);
    const matriz = new Array(numItems + 1);
    const configDaSolucao = [];
  
    //inicialização da matriz
    for (idxItem = 0; idxItem < numItems + 1; idxItem++) {
      pesoMatriz[idxItem] = new Array(capacidade + 1);
      matriz[idxItem] = new Array(capacidade + 1);
    }
  
    // preencher a pesoMatriz de [0][0] -> [numItems-1][capacidade-1]
    for (idxItem = 0; idxItem <= numItems; idxItem++) {
      for (idxPeso = 0; idxPeso <= capacidade; idxPeso++) {
        
        // preenche a primeira linha e coluna com zero
        if (idxItem === 0 || idxPeso === 0) {
          pesoMatriz[idxItem][idxPeso] = 0;
        }
  
        // Se o peso do item couber na mochila, decide se vale a pena mante-lo na matriz.
        else if (itens[idxItem - 1].peso <= idxPeso) {
          novoMax = itens[idxItem - 1].beneficio +
            pesoMatriz[idxItem - 1][idxPeso - itens[idxItem - 1].peso];
  
          antigoMax = pesoMatriz[idxItem - 1][idxPeso];
  
          // atualiza a matriz
          if (novoMax > antigoMax) {
            pesoMatriz[idxItem][idxPeso] = novoMax;
            matriz[idxItem][idxPeso] = 1;
  
          } else {
            pesoMatriz[idxItem][idxPeso] = antigoMax;
            matriz[idxItem][idxPeso] = 0;
          }
        }
  
        // Else, o item não cabe; valor e peso são os mesmo de antes.
        else {
          pesoMatriz[idxItem][idxPeso] = pesoMatriz[idxItem - 1][idxPeso];
        }
      }
    }
  
    // formata a solução
    idxPeso = capacidade;
    idxItem = numItems;
  
    for (idxItem; idxItem > 0; idxItem--) {
      if (matriz[idxItem][idxPeso] === 1) {
        configDaSolucao.push(itens[idxItem - 1]);
        idxPeso = idxPeso - itens[idxItem - 1].peso;
      }
    }
  
    return {
      "beneficio máximo": pesoMatriz[numItems][capacidade],
      configuracao: configDaSolucao,
    };
  }
  
  type TItem = {
    peso: number;
    beneficio: number;
  };
  
  const capacidadeMaxMochila: number = 20;
  const itens: TItem[] = [
    { peso: 2, beneficio: 3 },
    { peso: 4, beneficio: 5 },
    { peso: 5, beneficio: 8 },
    { peso: 3, beneficio: 4 },
    { peso: 9, beneficio: 10 },
  ];
  
  console.log(calculoMochila(itens, capacidadeMaxMochila));
  
  
  /** 
   referencias
   
   solução youtube c++
   https://gist.github.com/marcoscastro/a39b24bfb512944b19a5
  
   solução js que me baseie 
   https://gist.github.com/danwoods/7496329
  
   outra solução js
   https://gist.github.com/lqt0223/21f033450a9d762ce8aee4da336363b1
  **/