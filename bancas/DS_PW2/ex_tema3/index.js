const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const mysql = require('mysql');
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'irrf'
});

app.get('/irrf/read', (req, res) => {
    let string = 'select * from funcionarios';
    con.query(string, (err, result) => {
        res.json(result);
    })
})

app.post('/irrf/create', (req, res) => {
    if (req.body != "") {
        let matricula = req.body.matricula
        let nome = '\'' + req.body.nome + '\''
        let data = '\'' + req.body.data + '\''
        let salario = req.body.salario
        //Template String
        let string = `insert into funcionarios values(${matricula},${nome},${data},${salario})`;
        con.query(string, (err, result) => {
            if (err == null) {
                res.status(201).end()
            } else {
                res.status(401).json({ "erro": err.sqlMessage }).end()
            }
        })
    }
})

app.put('/irrf/update', (req, res) => {
    let matricula = req.body.matricula
    let nome = '\'' + req.body.nome + '\''
    let data = '\'' + req.body.data + '\''
    let salario = req.body.salario
    //Template String
    let string = `update funcionarios set nome_completo = ${nome}, data_desligamento = ${data}, ultimo_salario = ${salario} where matricula = ${matricula}`;
    con.query(string, (err, result) => {
        if (result.affectedRows == 1) {
            res.status(200).end()
        } else {
            res.status(404).json({ "erro": result.message }).end()
        }
    })
})

app.delete('/irrf/delete/:matricula', (req, res) => {
    //Template String
    let string = `delete from funcionarios where matricula = ${req.params.matricula}`;
    con.query(string, (err, result) => {
        if (result.affectedRows == 1) {
            res.status(200).end()
        } else {
            res.status(404).json({ "erro": "matricula não encontrada"}).end()
        }
    })
})

app.listen(3000, () => {
    console.log('Rodando na porta 3000');
})

