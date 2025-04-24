document.addEventListener("DOMContentLoaded", () => {
    carregarJSON("./data/universidades.json", exibirUniversidades);
  });
  
  function exibirUniversidades(universidades) {
    if (!universidades || universidades.length === 0) {
      console.error("Nenhuma universidade encontrada no JSON.");
      return;
    }
  
    const container = document.getElementById("lista-universidades");
    universidades.forEach(universidade => {
      const div = document.createElement("div");
      div.classList.add("universidade");
  
      div.innerHTML = `
        <h2>${universidade.nome} (${universidade.sigla})</h2>
        ${universidade.site ? `<a href="${universidade.site}" target="_blank">${universidade.site}</a>` : ""}
        ${universidade.campus.map(c => `
          <h4>Campus: ${c.nome}</h4>
          <ul>
            ${c.cursos.map(curso => `<li>${curso}</li>`).join("")}
          </ul>
        `).join("")}
        <hr/>
      `;
  
      container.appendChild(div);
    });
  }
  