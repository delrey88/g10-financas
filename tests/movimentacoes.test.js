import test from "node:test";
import assert from "node:assert";
import { validarMovimentacao } from "../src/movimentacoes.js";

test("deve aceitar uma movimentação válida", () => {
  const movimentacao = {
    tipo: "receita",
    descricao: "Venda de produto",
    valor: 150,
    data: "2026-11-13",
    categoria: "Vendas"
  };

  assert.strictEqual(validarMovimentacao(movimentacao), true);
});

test("não deve aceitar um tipo inválido", () => {
  const movimentacao = {
    tipo: "transferencia",
    descricao: "Pagamento",
    valor: 100,
    data: "2026-11-13",
    categoria: "Contas"
  };

  assert.strictEqual(validarMovimentacao(movimentacao), false);
});

test("não deve aceitar um valor negativo", () => {
  const movimentacao = {
    tipo: "despesa",
    descricao: "Conta de luz",
    valor: -50,
    data: "2026-11-13",
    categoria: "Moradia"
  };

  assert.strictEqual(validarMovimentacao(movimentacao), false);
});

test("não deve aceitar uma descrição vazia", () => {
  const movimentacao = {
    tipo: "despesa",
    descricao: " ",
    valor: 50,
    data: "2026-11-13",
    categoria: "Moradia"
  };

  assert.strictEqual(validarMovimentacao(movimentacao), false);
});
