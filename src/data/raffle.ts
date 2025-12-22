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
  2: { buyer: "João Matheus", status: "Pago ✅" },
  3: { buyer: "Eullys Alves", status: "Pago ✅" },
  4: { buyer: "Fernanda Roberta", status: "Pago ✅" },
  5: { buyer: "Cassi Trajano", status: "Pago ✅" },
  6: { buyer: "Giovana Ingrid", status: "Pago ✅"},
  7: { buyer: "Becholina Aline", status: "Pago ✅" },
  8: { buyer: "Eduardo Silva", status: "Pago ✅" },
  9: { buyer: "Eduardo Silva", status: "Pago ✅" },
  10: { buyer: "Anderson Silva", status: "Pendente 🙏" },
  11: { buyer: "Silas Batalha", status: "Pago ✅" },
  12: { buyer: "Cassi Trajano", status: "Pago ✅" },
  13: { buyer: "Yasmin", status: "Pago ✅" },
  14: { buyer: "Silvania Batista", status: "Pago ✅" },
  15: { buyer: "Luciana Serpa", status: "Pendente 🙏" },
  16: { buyer: "Gleison Santos", status: "Pago ✅" },
  17: { buyer: "Jéssica Geórgia", status: "Pago ✅" },
  18: { buyer: "Denize", status: "Pendente 🙏"},
  19: { buyer: "Jocasta", status: "Pago ✅" },
  20: { buyer: "Carlos Junior", status: "Pendente 🙏" },
  21: { buyer: "Danilo Barbosa", status: "Pago ✅" },
  22: { buyer: "Danilo Barbosa", status: "Pago ✅" },
  23: { buyer: "Denize", status: "Pendente 🙏"},
  24: { buyer: "Emanuelle Cabral", status: "Pago ✅" },
  25: { buyer: "Micaella Leite", status: "Pago ✅" },
  26: { buyer: "Gleison Santos", status: "Pago ✅" },
  27: { buyer: "Emanuelle Priscila", status: "Pago ✅" },
  28: { buyer: "Henrique Barbosa", status: "Pago ✅" },
  29: { buyer: "Paula Renata", status: "Pago ✅" },
  30: { buyer: "Silas Batalha", status: "Pago ✅" },
  31: { buyer: "Prof Denilson PROLINFO", status: "Pago ✅"},
  32: { buyer: "Giovana Ingrid", status: "Pago ✅" },
  33: { buyer: "Jhon Kennedy", status: "Pago ✅" },
  34: { buyer: "Alana", status: "Pago ✅" },
  35: { buyer: "Gigi", status: "Pago ✅" },
  36: { buyer: "Gleison Santos", status: "Pago ✅" },
  37: { buyer: "Danilo Barbosa", status: "Pago ✅" },
  39: { buyer: "Emanuelle Priscila", status: "Pago ✅" },
  40: { buyer: "Carlos Junior", status: "Pendente 🙏" },
  41: { buyer: "Prof Denilson PROLINFO", status: "Pago ✅"},
  43: { buyer: "Prof Denilson PROLINFO", status: "Pago ✅"},
  44: { buyer: "Jhon Kennedy", status: "Pago ✅" },
  45: { buyer: "Keila Lopes", status: "Pago ✅" },
  46: { buyer: "Gleison Santos", status: "Pago ✅" },
  47: { buyer: "Anderson Silva", status: "Pendente 🙏" },
  48: { buyer: "Cris Mãe de Yago", status: "Pago ✅" },
  49: { buyer: "Wesliany", status: "Pendente 🙏" },
  50: { buyer: "Prof Denilson PROLINFO", status: "Pago ✅"},
  51: { buyer: "Fernanda Cruz", status: "Pago ✅" },
  52: { buyer: "Fernanda Cruz", status: "Pago ✅" },
  53: { buyer: "Fernanda Cruz", status: "Pago ✅" },
  54: { buyer: "Fernanda Cruz", status: "Pago ✅" },
  55: { buyer: "Fernanda Cruz", status: "Pago ✅" },
  56: { buyer: "Gleison Santos", status: "Pago ✅" },
  58: { buyer: "Warley", status: "Pendente 🙏" },
  59: { buyer: "Giovana Ingrid", status: "Pago ✅" },
  60: { buyer: "Carlos Junior", status: "Pendente 🙏" },
  61: { buyer: "Jefferson Soares", status: "Pago ✅" },
  62: { buyer: "Jefferson Soares", status: "Pago ✅" },
  63: { buyer: "Jefferson Soares", status: "Pago ✅" },
  64: { buyer: "Jefferson Soares", status: "Pago ✅" },
  65: { buyer: "Jefferson Soares", status: "Pago ✅" },
  66: { buyer: "Jefferson Soares", status: "Pago ✅" },
  67: { buyer: "Jefferson Soares", status: "Pago ✅" },
  68: { buyer: "Jefferson Soares", status: "Pago ✅" },
  69: { buyer: "Jefferson Soares", status: "Pago ✅" },
  70: { buyer: "Jefferson Soares", status: "Pago ✅" },
  71: { buyer: "João Matheus", status: "Pago ✅" },
  72: { buyer: "Ewersson Oliveira", status: "Pago ✅" },
  73: { buyer: "Ewersson Oliveira", status: "Pago ✅" },
  74: { buyer: "Danilo Barbosa", status: "Pago ✅" },
  75: { buyer: "Ewersson Oliveira", status: "Pago ✅" },
  76: { buyer: "Ewersson Oliveira", status: "Pago ✅" },
  77: { buyer: "Jhon Kennedy", status: "Pago ✅" },
  78: { buyer: "Ewersson Oliveira", status: "Pago ✅" },
  79: { buyer: "André Teixeira", status: "Pago ✅"},
  80: { buyer: "Carlos Junior", status: "Pendente 🙏" },
  82: { buyer: "Anderson Silva", status: "Pendente 🙏" },
  84: { buyer: "Prof Denilson PROLINFO", status: "Pago ✅"},
  85: { buyer: "André Teixeira", status: "Pago ✅"},
  86: { buyer: "Lilian Rodrigues", status: "Pendente 🙏" },
  87: { buyer: "Marcus IFPE", status: "Pago ✅" },
  88: { buyer: "Giovana Ingrid", status: "Pago ✅" },
  89: { buyer: "Giovana Ingrid", status: "Pago ✅" },
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
  100: { buyer: "Carlos Junior", status: "Pendente 🙏" },
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
