export function validarMovimentacao(movimentacao) {
  const tiposValidos = ["receita", "despesa"];

  if (!tiposValidos.includes(movimentacao.tipo)) {
    return false;
  }

  if (!movimentacao.descricao || movimentacao.descricao.trim() === "") {
    return false;
  }

  if (typeof movimentacao.valor !== "number" || movimentacao.valor <= 0) {
    return false;
  }

  if (!movimentacao.data || !movimentacao.categoria) {
    return false;
  }

  return true;
}
