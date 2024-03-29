const fs = require('fs')
const data = require("./data.json")

exports.post = function(req, res){

    const keys = Object.keys(req.body) // cria um array com as chaves do nosso objeto body

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Por favor, preencha os campos corretamente.")
        }
    }

    data.instructors.push(req.body)

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err){
            return res.send("Erro na gravação dos dados!")
        }
        return res.redirect("/instructors")
    })

    //return res.send(req.body)
}