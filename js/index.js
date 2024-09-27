data = {
  pudimDeLeiteCondensado: {
    titulo: "100g",
    nome: "Pudim de Leite Condensado",
    calorias: {
      valorNutricional: "174kcal",
      valorDiario: "8.7%",
    },
    carboidratosLiquidos: {
      valorNutricional: "28g",
      valorDiario: "-",
    },
    carboidratos: {
      valorNutricional: "28g",
      valorDiario: "9.33%",
    },
    proteinas: {
      valorNutricional: "5g",
      valorDiario: "1.67%",
    },
    gordurasTotais: {
      valorNutricional: "5g",
      valorDiario: "9.1%",
    },
    gordurasSaturadas: {
      valorNutricional: "2g",
      valorDiario: "9.1%",
    },
    fibraAlimentar: {
      valorNutricional: "0g",
      valorDiario: "0%",
    },
    sodio: {
      valorNutricional: "78mg",
      valorDiario: "3.25%",
    },
  },
  boloDeCenoura: {
    titulo: "60g",
    nome: "Bolo de Cenoura",
    calorias: {
      valorNutricional: "109.63kcal",
      valorDiario: "5.48%",
    },
    carboidratosLiquidos: {
      valorNutricional: "16.98g",
      valorDiario: "-",
    },
    carboidratos: {
      valorNutricional: "16.98g",
      valorDiario: "5.66%",
    },
    proteinas: {
      valorNutricional: "3.28g",
      valorDiario: "1.09%",
    },
    gordurasTotais: {
      valorNutricional: "3.17g",
      valorDiario: "5.76%",
    },
    gordurasSaturadas: {
      valorNutricional: "1.67g",
      valorDiario: "7.59%",
    },
    fibraAlimentar: {
      valorNutricional: "0.00g",
      valorDiario: "0.00%",
    },
    sodio: {
      valorNutricional: "44.34mg",
      valorDiario: "1.85%",
    },
  },
  cremeBrulee: {
    titulo: "100g",
    nome: "Creme Brulee",
    calorias: {
      valorNutricional: "270kcal",
      valorDiario: "13.5%",
    },
    carboidratosLiquidos: {
      valorNutricional: "27g",
      valorDiario: "-",
    },
    carboidratos: {
      valorNutricional: "27g",
      valorDiario: "9%",
    },
    proteinas: {
      valorNutricional: "5g",
      valorDiario: "1.67%",
    },
    gordurasTotais: {
      valorNutricional: "19g",
      valorDiario: "34.55%",
    },
    gordurasSaturadas: {
      valorNutricional: "11g",
      valorDiario: "50%",
    },
    fibraAlimentar: {
      valorNutricional: "0g",
      valorDiario: "0%",
    },
    sodio: {
      valorNutricional: "78mg",
      valorDiario: "3.25%",
    },
  },
  gelatinaZeroKcal: {
    titulo: "100g",
    nome: "Gelatina 0 Kcal",
    calorias: {
      valorNutricional: "0kcal",
      valorDiario: "0%",
    },
    carboidratosLiquidos: {
      valorNutricional: "0g",
      valorDiario: "-",
    },
    carboidratos: {
      valorNutricional: "0g",
      valorDiario: "0%",
    },
    proteinas: {
      valorNutricional: "1.2g",
      valorDiario: "0.4%",
    },
    gordurasTotais: {
      valorNutricional: "0g",
      valorDiario: "0%",
    },
    gordurasSaturadas: {
      valorNutricional: "0g",
      valorDiario: "0%",
    },
    fibraAlimentar: {
      valorNutricional: "0g",
      valorDiario: "0%",
    },
    sodio: {
      valorNutricional: "45mg",
      valorDiario: "1.88%",
    },
  },
};

const body = document.body;

function openModal(name) {
  const {
    titulo,
    nome,
    calorias,
    carboidratosLiquidos,
    carboidratos,
    proteinas,
    gordurasTotais,
    gordurasSaturadas,
    fibraAlimentar,
    sodio,
  } = data[name];

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.id = "modal"
  modal.innerHTML = `
        <div class="modalContainer">
        <header>
          <h1>${nome}</h1>
          <button onclick="document.getElementById('modal').remove()">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </header>
        <main>
          <table border="1" id="nutrition-table">
            <tr>
              <th>A cada ${titulo}</th>
              <th>Valor Nutricional</th>
              <th>Valor Diário</th>
            </tr>
            <tr>
              <td>Calorias</td>
              <td>${calorias.valorNutricional}</td>
              <td>${calorias.valorDiario}</td>
            </tr>
            <tr>
              <td>Carboidratos Líquidos</td>
              <td>${carboidratosLiquidos.valorNutricional}</td>
              <td>${carboidratosLiquidos.valorDiario}</td>
            </tr>
            <tr>
              <td>Carboidratos</td>
              <td>${carboidratos.valorNutricional}</td>
              <td>${carboidratos.valorDiario}</td>
            </tr>
            <tr>
              <td>Proteínas</td>
              <td>${proteinas.valorNutricional}</td>
              <td>${proteinas.valorDiario}</td>
            </tr>
            <tr>
              <td>Gorduras Totais</td>
              <td>${gordurasTotais.valorNutricional}</td>
              <td>${gordurasTotais.valorDiario}</td>
            </tr>
            <tr>
              <td>Gorduras Saturadas</td>
              <td>${gordurasSaturadas.valorNutricional}</td>
              <td>${gordurasSaturadas.valorDiario}</td>
            </tr>
            <tr>
              <td>Fibra Alimentar</td>
              <td>${fibraAlimentar.valorNutricional}</td>
              <td>${fibraAlimentar.valorDiario}</td>
            </tr>
            <tr>
              <td>Sódio</td>
              <td>${sodio.valorNutricional}</td>
              <td>${sodio.valorDiario}</td>
            </tr>
          </table>
        </main>
      </div>
    `;

  body.append(modal);
}
