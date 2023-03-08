const faturamento_mensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const total_faturamento = Object.values(faturamento_mensal).reduce((acc, curr) => acc + curr);
  
  const percentuais = {};
  for (const estado in faturamento_mensal) {
    const percentual = (faturamento_mensal[estado] / total_faturamento) * 100;
    percentuais[estado] = percentual.toFixed(2);
  }
  
  console.log('Percentual de representação do faturamento mensal por estado:');
  for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
  }
  