function carregarJSON(url, callback) {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`Erro ao carregar ${url}`);
        return response.json();
      })
      .then(data => callback(data))
      .catch(error => console.error("Erro ao ler JSON:", error));
}
  