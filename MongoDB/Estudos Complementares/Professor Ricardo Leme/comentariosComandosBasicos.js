// Inserindo dados via MongoDB Playground
// Selecionar o database a ser utilizado
use('projetos')

// Exemplo de insert com o insertOne
db.filmes.insertOne({
    "titulo":"Tubarão",
    "ano":1975,
    "direor":"Steven Spielberg"
    })

// Exemplo de insert com o insertMany
db.filmes.insertMany(
    [
        {"titulo":"O Exorcista", "ano":1973, "direor":"William Friedkin"},
        {"titulo":"007: Sem Tempo Para Morrer", "ano":2020,
        "direor":"Carry Fukunaga", "genero":"ação"}
    ]
)

use('projetos')
// Select * from filmes
db.filmes.find()

use('projetos')
// Select * from filmes where ano = 1978
db.filmes.find({"ano": 1978}, {"_id":0, "ano":0})

use('projetos')
// Select titulo, diretor form filmes where titulo like '%estrelas%'
db.filmes.find({"titulo": /estrela/i}, {"_id":0, "ano":0})