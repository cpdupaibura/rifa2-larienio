export interface RaffleNumber {
  number: number;
  sold: boolean;
  buyer?: string;
  status?: "Pago ✅" | "Pendente 🙏";
}

/**
 * Lista dos números vendidos e suas informações
 * – Você só edita aqui
 */
const soldNumbers: { [key: number]: { buyer: string; status: "Pago ✅" | "Pendente 🙏" } } = {
  1: { buyer: "Danilo Barbosa", status: "Pago ✅" },
  3: { buyer: "Eullys Alves", status: "Pago ✅" },
  4: { buyer: "Fernanda Socorro", status: "Pendente 🙏" },
  5: { buyer: "Cassi Trajano", status: "Pago ✅" },
  10: { buyer: "Anderson Silva", status: "Pendente 🙏" },
  11: { buyer: "Silas Batalha", status: "Pago ✅" },
  12: { buyer: "Cassi Trajano", status: "Pago ✅" },
  13: { buyer: "Yasmin", status: "Pago ✅" },
  16: { buyer: "Gleison Santos", status: "Pendente 🙏" },
  17: { buyer: "Jéssica Geórgia", status: "Pago ✅" },
  19: { buyer: "Jocasta", status: "Pago ✅" },
  21: { buyer: "Danilo Barbosa", status: "Pago ✅" },
  22: { buyer: "Danilo Barbosa", status: "Pago ✅" },
  25: { buyer: "Micaella Leite", status: "Pago ✅" },
  26: { buyer: "Gleison Santos", status: "Pendente 🙏" },
  27: { buyer: "Emanuelle Priscila", status: "Pago ✅" },
  28: { buyer: "Henrique Barbosa", status: "Pago ✅" },
  29: { buyer: "Paula Renata", status: "Pago ✅" },
  30: { buyer: "Silas Batalha", status: "Pago ✅" },
  33: { buyer: "Jhon Kennedy", status: "Pendente 🙏" },
  36: { buyer: "Gleison Santos", status: "Pendente 🙏" },
  37: { buyer: "Danilo Barbosa", status: "Pago ✅" },
  39: { buyer: "Emanuelle Priscila", status: "Pago ✅" },
  44: { buyer: "Jhon Kennedy", status: "Pendente 🙏" },
  46: { buyer: "Gleison Santos", status: "Pendente 🙏" },
  47: { buyer: "Anderson Silva", status: "Pendente 🙏" },
  49: { buyer: "Wesliany", status: "Pendente 🙏" },
  56: { buyer: "Gleison Santos", status: "Pendente 🙏" },
  74: { buyer: "Danilo Barbosa", status: "Pago ✅" },
  77: { buyer: "Jhon Kennedy", status: "Pendente 🙏" },
  87: { buyer: "Marcus IFPE", status: "Pago ✅" },
  90: { buyer: "Dona Rosa", status: "Pago ✅" },
  91: { buyer: "Dona Rosa", status: "Pago ✅" },
  92: { buyer: "Dona Rosa", status: "Pago ✅" },
  93: { buyer: "Dona Rosa", status: "Pago ✅" },
  94: { buyer: "Dona Rosa", status: "Pago ✅" },
  95: { buyer: "Dona Rosa", status: "Pago ✅" },
  96: { buyer: "Dona Rosa", status: "Pago ✅" },
  97: { buyer: "Dona Rosa", status: "Pago ✅" },
  98: { buyer: "Dona Rosa", status: "Pago ✅" },
  99: { buyer: "Dona Rosa", status: "Pago ✅" },
};

/**
 * Gera a lista de 1 a 100, na ordem correta
 * e aplica as informações dos que foram vendidos
 */
export const raffleNumbers: RaffleNumber[] = Array.from(
  { length: 100 },
  (_, i) => {
    const n = i + 1;

    if (soldNumbers[n]) {
      return {
        number: n,
        sold: true,
        buyer: soldNumbers[n].buyer,
        status: soldNumbers[n].status,
      };
    }

    return {
      number: n,
      sold: false,
    };
  }
);
