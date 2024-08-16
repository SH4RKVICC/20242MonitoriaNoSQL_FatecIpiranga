use('projetos')
db.clientes.find()
// Quais clientes calçam 42?
db.clientes.find( {numeroCalcado: 42})

use('projetos')
// Quais clientes tem o primeiro nome Gertrude?
db.clientes.find({"nomePrimeiro": /gertrude/i})

use('projetos')
// Quais clientes calçam entre 36 e 40?
db.clientes.find( {numeroCalcado: { 
    $gte: 36, $lte: 40
}})

use('projetos')
// Quais clientes são do sexo feminino e torcem para o Ituano?
db.clientes.find({ $and: [
    {sexo: { $eq: 'feminino'}},
    {timeFutebol:{ $eq: 'Ituano'}}
]
})

use('projetos')
// Quais clientes são do sexo feminino e NÃO torcem para o Ituano?
db.clientes.find({ $and: [
    {sexo: { $eq: 'feminino'}},
    {timeFutebol:{ $ne: 'Ituano'}}
]
})

use('projetos')
// Quais clientes são do sexo feminino OU torcem para o Ituano?
db.clientes.find({ $or: [
    {sexo: { $eq: 'feminino'}},
    {timeFutebol:{ $ne: 'Ituano'}}
]
})

use('projetos')
// Quais clientes tiveram um total de vendas > que 85k
db.clientes.find({ $or: [
    {totalVendas: {$gt: "85000"}},
    {empresa: /xixan/i}
]
})

use('projetos')
// Quais clientes tem o nome ou sobrenome Gertrude e moram
// em uma latitude maior ou igual a 48?
db.clientes.find({ $and: [
    {latitude: {$gte: "48"}},
    {
        $or: [
        {"nome.primeiro": "Gertrude"},
        {"nome.sobrenome": "Gertrude"}
    ] }
]
})
