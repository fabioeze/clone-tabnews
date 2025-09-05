function status(request, response) {
  response
    .status(200)
    .json({ chave: "Teste de caracteres, ã, é, esse teste é o máximo" });
}

export default status;
