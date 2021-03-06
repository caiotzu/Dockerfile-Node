const express = require('express');
const app = express();

app.use(express.json());

let arrMotos = [
    {
        "id": 1,
        "descricao": "Yamaha MT-03",
        "_marca": {
            "rel": "consultar",
            "mathod": "GET",
            "link": "api/v1/marca/1"
        },
        "_categoria": {
            "rel": "consultar",
            "mathod": "GET",
            "link": "api/v1/categoria/3"
        },
        "_ficha": {
            "rel": "consultar",
            "mathod": "GET",
            "link": "api/v1/ficha/1"
        }
    },
    {
        "id": 2,
        "descricao": "Yamaha MT-07",
        "_marca": {
            "rel": "consultar",
            "mathod": "GET",
            "link": "api/v1/marcas/1"
        },
        "_categoria": {
            "rel": "consultar",
            "mathod": "GET",
            "link": "api/v1/categorias/3"
        },
        "_ficha": {
            "rel": "consultar",
            "mathod": "GET",
            "link": "api/v1/fichas/2"
        }
    },
    {
        "id": 3,
        "descricao": "Yamaha MT-09",
        "_marca": {
            "rel": "consultar",
            "mathod": "GET",
            "link": "api/v1/marcas/1"
        },
        "_categoria": {
            "rel": "consultar",
            "mathod": "GET",
            "link": "api/v1/categorias/3"
        },
        "_ficha": {
            "rel": "consultar",
            "mathod": "GET",
            "link": "api/v1/fichas/3"
        }
    },
    {
        "id": 4,
        "descricao": "BMW S 1000 RR",
        "_marca": {
            "rel": "consultar",
            "mathod": "GET",
            "link": "api/v1/marcas/2"
        },
        "_categoria": {
            "rel": "consultar",
            "mathod": "GET",
            "link": "api/v1/categorias/4"
        },
        "_ficha": {
            "rel": "consultar",
            "mathod": "GET",
            "link": "api/v1/fichas/4"
        }
    }
];

let arrMarcas = [
    {
        "id": 1,
        "descricao": "Yamaha",
        "historia": "Quando a Yamaha surgiu no Jap??o em 1955, j?? existiam mais de 100 fabricantes de motocicletas no pa??s. Isso motivou o nosso fundador, Genichi Kawakami, a querer construir as melhores motos, com os preceitos de qualidade e inova????o pulsando na alma para melhor satisfazer o consumidor. Foi assim que conquistamos logo de largada posi????es de lideran??a em importantes competi????es de motociclismo e fomos aprimorando nossos produtos.",
        "_motos": [
            {
                "rel": "consultar",
                "mathod": "GET",
                "link": "api/v1/motos/1"
            },
            {
                "rel": "consultar",
                "mathod": "GET",
                "link": "api/v1/motos/2"
            },
            {
                "rel": "consultar",
                "mathod": "GET",
                "link": "api/v1/motos/3"
            }
        ]
    },
    {
        "id": 2,
        "descricao": "BMW",
        "historia": "A BMW foi fundada no dia 7 de mar??o de 1916, na Alemanha, a partir da fus??o de duas fabricantes de motores de avi??o: a Rapp Motorenwerke e a Gustav Otto Flugmaschinfabrik. Com a derrota alem?? na I Guerra Mundial, o Tratado de Versalhes proibiu a fabrica????o de avi??es no pa??s, o que fez com que a BMW passasse a trabalhar em outros setores.",
        "_motos": [
            {
                "rel": "consultar",
                "mathod": "GET",
                "link": "api/v1/motos/4"
            }
        ]
    }
];

let arrCategorias = [
    {
        "id": 1,
        "descricao": "Street",
        "conceito": "S??o motos que apresentam conforto e mobilidade para serem utilizadas no tr??nsito urbano, geralmente de 125 cc. A posi????o de pilotagem ?? sentada, apresentam desenho simples, com banco para garupa e n??o possuem muitos acess??rios.A maioria das street apresentam velocidade m??xima, por volta de 110 Km/h.",
        "_motos": []
    },
    {
        "id": 2,
        "descricao": "Custom",
        "conceito": "As custom s??o motos estradeiras que n??o priorizam a velocidade, mas o conforto. A altura do banco ?? baixa, as pedaleiras s??o avan??adas e o tanque ?? grande e paralelo ao ch??o, de forma a proporcionar uma posi????o confort??vel para pilotagem. O piloto fica recostado para tr??s, com os p??s para a frente, com as costas geralmente apoiadas em encostos chamados de Sissy Bar",
        "_motos": []
    },
    {
        "id": 3,
        "descricao" : "Naked",
        "conceito": "As naked s??o motos que t??m bom desempenho em rela????o ao motor, e conjunto mec??nico. Permitem uma posi????o de pilotagem menos ???deitado???, melhorando o conforto para condu????o em vias urbanas, seu guid??o ?? mais alto do que nas esportivas e n??o possuem carenagem.",
        "_motos": [
            {
                "rel": "consultar",
                "mathod": "GET",
                "link": "api/v1/motos/1"
            },
            {
                "rel": "consultar",
                "mathod": "GET",
                "link": "api/v1/motos/2"
            },
            {
                "rel": "consultar",
                "mathod": "GET",
                "link": "api/v1/motos/3"
            }
        ]
    },
    {
        "id": 4,
        "descricao": "Sport",
        "conceito": "As esportivas s??o motos com design futurista e mec??nica de excelente desempenho. Os motores geralmente possuem mais de 600 cilindradas, o que permite maior acelera????o, algumas alcan??ando velocidades superiores a 300 Km/h.",
        "_motos": [
            {
                "rel": "consultar",
                "mathod": "GET",
                "link": "api/v1/motos/4"
            }
        ]
    }
];

let arrFichas = [
    {
        // MT 03
        "id": 1,
        "tipo": "DOHC, 8 v??lvulas, 4 tempos, Refrigera????o l??quida",
        "potenciaMaxima": "42,0 cv (10.750 rpm)",
        "torqueMaximo": "3,0 kgf.m (9.000 rpm)",
        "cilindros": "2",
        "cilindrada": "321 cc",
        "diametroXCurso": "68,0 mm X 44,1 mm",
        "taxaDeCompressao": "11,2 : 1",
        "alimentacao": "Inje????o eletr??nica",
        "combustivel": "Gasolina",
        "_moto": {
            "rel": "consultar",
            "mathod": "GET",
            "link": "api/v1/motos/1"
        }
    },
    {
        // MT 07
        "id": 2,
        "tipo": "DOHC, 8 v??lvulas, 4 tempos, Refrigera????o l??quida",
        "potenciaMaxima": "74,8 cv (9.000 rpm)",
        "torqueMaximo": "6,9 kgf.m (6.500 rpm)",
        "cilindros": "2",
        "cilindrada": "689 cc",
        "diametroXCurso": "80,0 mm X 68,6 mm",
        "taxaDeCompressao": "11,5 : 1",
        "alimentacao": "Inje????o eletr??nica",
        "combustivel": "Gasolina",
        "_moto": {
            "rel": "consultar",
            "mathod": "GET",
            "link": "api/v1/motos/2"
        }
    },
    {
        // MT 09
        "id": 3,
        "tipo": "DOHC, 12 v??lvulas, 4 tempos, Refrigera????o l??quida",
        "potenciaMaxima": "115,0 cv (10.000 rpm)",
        "torqueMaximo": "8,9 kgf.m (8.500 rpm)",
        "cilindros": "3",
        "cilindrada": "847 cc",
        "diametroXCurso": "78,0 mm X 59,1 mm",
        "taxaDeCompressao": "11,5 : 1",
        "alimentacao": "Inje????o eletr??nica",
        "combustivel": "Gasolina",
        "_moto": {
            "rel": "consultar",
            "mathod": "GET",
            "link": "api/v1/motos/3"
        }
    },
    {
        // BMW S 1000 RR
        "id": 4,
        "tipo": "Motor tetracil??ndrico em linha, quatro tempos com refrigera????o l??quida/??leo, quatro v??lvulas por cilindro em tit??nio.",
        "potenciaMaxima": "199 cv (146 kW) ?? 13.500 rpm",
        "torqueMaximo": "11,5 kgf.m a 10.500 rpm",
        "cilindros": "4",
        "cilindrada": "999 cc",
        "diametroXCurso": "80 mm x 49,7 mm",
        "taxaDeCompressao": "13.0:1",
        "alimentacao": "Inje????o eletr??nica, coletores de admiss??o vari??veis",
        "combustivel": "Gasolina",
        "_moto": {
            "rel": "consultar",
            "mathod": "GET",
            "link": "api/v1/motos/4"
        }
    },

];

// Busca as motos
app.get('/api/v1/motos', (req, res) => {
    let pagina = parseInt(req.query.pagina) || 1;
    let limite = parseInt(req.query.limite) || 10;
    let startIndex = (pagina - 1) * limite;
    let dados = arrMotos.sort((a,b) => a.id - b.id).slice(startIndex, startIndex + limite);

    let total = arrMotos.length;

    let response = {
        _metadata: {
            paginacao: {
                pagina,
                limite,
                total,
            }
        },
        dados
    };

    res.send(response);
});

app.get('/api/v1/motos/:id', (req, res) => {
    let moto = arrMotos.find(moto => moto.id == req.params.id);
    
    if (!moto) {
        res.status(404).send({
            error: 'Moto n??o encontrada'
        });
        return;
    }

    res.send(moto);
});

// Busca as Marcas
app.get('/api/v1/marcas', (req, res) => {
    let pagina = parseInt(req.query.pagina) || 1;
    let limite = parseInt(req.query.limite) || 10;
    let startIndex = (pagina - 1) * limite;
    let dados = arrMarcas.sort((a,b) => a.id - b.id).slice(startIndex, startIndex + limite);

    let total = arrMarcas.length;

    let response = {
        _metadata: {
            paginacao: {
                pagina,
                limite,
                total,
            }
        },
        dados
    };

    res.send(response);
});

app.get('/api/v1/marcas/:id', (req, res) => {
    let marca = arrMarcas.find(marca => marca.id == req.params.id);
    
    if (!marca) {
        res.status(404).send({
            error: 'Marca n??o encontrada'
        });
        return;
    }

    res.send(marca);
});

// Busca as Categorias
app.get('/api/v1/categorias', (req, res) => {
    let pagina = parseInt(req.query.pagina) || 1;
    let limite = parseInt(req.query.limite) || 10;
    let startIndex = (pagina - 1) * limite;
    let dados = arrCategorias.sort((a,b) => a.id - b.id).slice(startIndex, startIndex + limite);

    let total = arrCategorias.length;

    let response = {
        _metadata: {
            paginacao: {
                pagina,
                limite,
                total,
            }
        },
        dados
    };

    res.send(response);
});

app.get('/api/v1/categorias/:id', (req, res) => {
    let categoria = arrCategorias.find(categoria => categoria.id == req.params.id);
    
    if (!categoria) {
        res.status(404).send({
            error: 'Categoria n??o encontrada'
        });
        return;
    }

    res.send(categoria);
});

// Busca as Fichas
app.get('/api/v1/fichas', (req, res) => {
    let pagina = parseInt(req.query.pagina) || 1;
    let limite = parseInt(req.query.limite) || 10;
    let startIndex = (pagina - 1) * limite;
    let dados = arrFichas.sort((a,b) => a.id - b.id).slice(startIndex, startIndex + limite);

    let total = arrFichas.length;

    let response = {
        _metadata: {
            paginacao: {
                pagina,
                limite,
                total,
            }
        },
        dados
    };

    res.send(response);
});

app.get('/api/v1/fichas/:id', (req, res) => {
    let ficha = arrFichas.find(ficha => ficha.id == req.params.id);
    
    if (!ficha) {
        res.status(404).send({
            error: 'Ficha n??o encontrada'
        });
        return;
    }

    res.send(ficha);
});


app.listen(3000, () => console.log('Listening on port 3000'));