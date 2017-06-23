"use strict";

var express = require("express");
var http = require("https");
var port = 3000;

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var pages = {
  login: __dirname + "/security/html/login.html",
  app: __dirname + "/dist/main/html/main.html"
}

function getOptions(path)
{
  return {
      "method": "GET",
      "hostname": "api.cartolafc.globo.com",
      "port": null,
      "path": path,
      "headers": {
        "cache-control": "no-cache",
        "user-agent": "cartolada2"
      }
  };
}

function request(options, res) {
  var rq = http.request(options, function (r) {
    var chunks = [];
    r.on("data", function (chunk) {
      chunks.push(chunk);
    });
    r.on("end", function () {
      var body = Buffer.concat(chunks);
      res.send(body.toString());
    });
  });
  rq.end();
}

app.get("/cartola/mercado/status", function(req, res, next){
  request(getOptions("/mercado/status"), res);
});

app.get("/cartola/mercado/destaques", function(req, res, next){
  request(getOptions("/mercado/destaques"), res);
});

app.get("/cartola/pos-rodada/destaques", function(req, res, next){
  request(getOptions("/pos-rodada/destaques"), res);
});

app.get("/cartola/partidas", function(req, res, next){
  request(getOptions("/partidas"), res);
});

app.get("/cartola/atletas/mercado", function(req, res, next){
  request(getOptions("/atletas/mercado"), res);
});

app.get("/cartola/atletas/pontuados", function(req, res, next){
  request(getOptions("/atletas/pontuados"), res);
});

app.use(express.static('dist'));

app.listen(port);

console.log("Servidor executando na porta " + port + "...");

/*
- Url's da API obtidas do site oficial do CartolaFC 2017.

https://github.com/wgenial/cartrolandofc/blob/master/nova-api.md

amigos_cartola: "//api.cartolafc.globo.com/auth/amigos",
atleta_pontuacao: "//api.cartolafc.globo.com/auth/mercado/atleta/{idAtleta}/pontuacao",
atletas_parciais: "//api.cartolafc.globo.com/atletas/pontuados",
auth: "//api.cartolafc.globo.com/auth/time/info",
banir_times: "//api.cartolafc.globo.com/auth/liga/{slugLiga}/banir",
busca_ligas: "//api.cartolafc.globo.com/ligas?q=",
busca_times: "//api.cartolafc.globo.com/times?q=",
campeoes_ligas_nacionais: "//api.cartolafc.globo.com/logged/ligas/campeoes-nacionais",
check_slug_time: "//api.cartolafc.globo.com/logged/time/?search=",
check_slug_liga: "//api.cartolafc.globo.com/logged/liga/?search=",
clear_cartoleiro_pro: "//api.cartolafc.globo.com/auth/time/pro",
clubes: "//api.cartolafc.globo.com/clubes",
convidar_times: "//api.cartolafc.globo.com/auth/liga/{slugLiga}/convidar",
convite: "//api.cartolafc.globo.com/auth/mensagem/{id}/",
criar_time: "//api.cartolafc.globo.com/logged/time/criar",
historico_transacoes: "//api.cartolafc.globo.com/auth/time/historico/",
liga: "//api.cartolafc.globo.com/auth/liga/{slug}",
liga_associacao: "//api.cartolafc.globo.com/auth/liga/{slug}/associacao",
liga_criar: "//api.cartolafc.globo.com/auth/liga/criar",
ligas_do_usuario: "//api.cartolafc.globo.com/auth/ligas",
ligasPatrocinadores: "//api.cartolafc.globo.com/patrocinadores",
mercado_destaques: "//api.cartolafc.globo.com/mercado/destaques",
mercado: "//api.cartolafc.globo.com/atletas/mercado",
noticias: "//api.cartolafc.globo.com/auth/noticias",
partidas: "//api.cartolafc.globo.com/partidas/{rodada}",
performance_atletas: "//api.cartolafc.globo.com/logged/stats/atletas",
performance_time: "//api.cartolafc.globo.com/auth/stats/historico",
posrodada_destaques: "//api.cartolafc.globo.com/pos-rodada/destaques",
reativar_ligas_acao: "//api.cartolafc.globo.com/auth/reativar/liga/{slug}",
reativar_ligas: "//api.cartolafc.globo.com/auth/reativar/ligas",
rodadas: "//api.cartolafc.globo.com/rodadas",
salvarTime: "//api.cartolafc.globo.com/auth/time/salvar",
status_mercado: "//api.cartolafc.globo.com/mercado/status",
time_adv: "//api.cartolafc.globo.com/time/slug/{slug}",
time_id: "//api.cartolafc.globo.com/time/id/{id}",
time: "//api.cartolafc.globo.com/auth/time",
validarAssinaturaUsuarioSemTime: "//api.cartolafc.globo.com/logged/time/validar-pro"
*/

