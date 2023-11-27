var Banco = {
  conta: "123456",
  saldo: 1000,
  tipoConta: "Corrente",
  agencia: "7890",

  buscarSaldo: function() {
      return this.saldo;
  },

  deposito: function(valor) {
      this.saldo += valor;
      return "Depósito realizado. Novo saldo: " + this.saldo;
  },

  saque: function(valor) {
      if (valor <= this.saldo) {
          this.saldo -= valor;
          return "Saque realizado. Novo saldo: " + this.saldo;
      } else {
          return "Saldo insuficiente para saque.";
      }
  },

  numeroConta: function() {
      return this.conta;
  }
};

// Exemplos de uso
console.log("Saldo atual: " + Banco.buscarSaldo());
console.log(Banco.deposito(500));
console.log(Banco.saque(200));
console.log("Número da conta: " + Banco.numeroConta());
