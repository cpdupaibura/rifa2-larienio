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
  3: { buyer: "Eullys Alves", status: "Pago ✅" },
  5: { buyer: "Cassi Trajano", status: "Pago ✅" },
  12: { buyer: "Cassi Trajano", status: "Pago ✅" },
  13: { buyer: "Yasmin", status: "Pago ✅" },
  16: { buyer: "Gleison Santos", status: "Pendente 🙏" },
  17: { buyer: "Jéssica Geórgia", status: "Pago ✅" },
  19: { buyer: "Jocasta", status: "Pago ✅" },
  26: { buyer: "Gleison Santos", status: "Pendente 🙏" },
  27: { buyer: "Emanuelle Priscila", status: "Pago ✅" },
  28: { buyer: "Henrique de Jesus", status: "Pago ✅" },
  29: { buyer: "Paula Renata", status: "Pago ✅" },
  36: { buyer: "Gleison Santos", status: "Pendente 🙏" },
  39: { buyer: "Emanuelle Priscila", status: "Pago ✅" },
  46: { buyer: "Gleison Santos", status: "Pendente 🙏" },
  56: { buyer: "Gleison Santos", status: "Pendente 🙏" },
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
