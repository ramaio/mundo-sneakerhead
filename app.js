function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  console.log(section); // Loga o elemento no console para fins de depuração

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = "<p>Digite algo</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado da pesquisa
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Constrói o HTML para cada resultado
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>`;
    }
  }

  if (!resultados) {
    section.innerHTML = "<p>Sem resultados</p>";
    return;
  }

  // Atualiza o conteúdo da seção com os resultados
  section.innerHTML = resultados;
}
