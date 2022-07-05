function vagaSetor() {
  const vagaSetores = [];

  for (let i = 0; i < 30; i++) {
    if (i < 10) {
      vagaSetores.push("A" + (i + 1));
    } else if (i < 20) {
      vagaSetores.push("B" + (i + 1));
    } else if (i < 30) {
      vagaSetores.push("C" + (i + 1));
    }
  }
  return vagaSetores;
}

function sorteiaVaga(vagas) {

  if (vagas.length == 0) {
    alert('Sem vagas disponíveis!')
    return
  }

  const vaga = Math.floor(Math.random() * vagas.length);
  const vagaGerada = vagas[vaga];
  vagas.splice(vagas.indexOf(vagaGerada),1);

  alert('Cadastro realizado!')

  return vagaGerada
}

export { sorteiaVaga, vagaSetor }
