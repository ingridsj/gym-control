exports.post = function(req, res){

    const keys = Object.keys(req.body) // cria um array com as chaves do nosso objeto body

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Por favor, preencha os campos corretamente.")
        }
    }

    return res.send(req.body)
}