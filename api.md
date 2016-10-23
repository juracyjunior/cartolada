#CartolaFC API (2016)

###Status do mercado

https://api.cartolafc.globo.com/mercado/status

###Jogadores mais escalados

https://api.cartolafc.globo.com/mercado/destaques

###Patrocinadores

https://api.cartolafc.globo.com/patrocinadores

###Rodadas do campeonato

https://api.cartolafc.globo.com/rodadas

###Próximas partidas

https://api.cartolafc.globo.com/partidas

###Clubes

https://api.cartolafc.globo.com/clubes

###Todos os jogadores com todas as informações

https://api.cartolafc.globo.com/atletas/mercado

###Pontuação da rodada atual

https://api.cartolafc.globo.com/atletas/pontuados

###Time que mais pontuou na rodada anterior

https://api.cartolafc.globo.com/pos-rodada/destaques

###Busca de times, retorna dados do time

https://api.cartolafc.globo.com/times?q=[nome do time]

###Busca informações de um time pelo slug

https://api.cartolafc.globo.com/time/<slug_do_time>

###Busca informações de um time por rodada usando o slug do time e o número da rodada

https://api.cartolafc.globo.com/time/<slug_do_time>/<rodada>

###Busca ligas

https://api.cartolafc.globo.com/ligas?q=<nome_da_liga>

###Busca informações de uma liga específica pelo slug da liga (necessário token)

https://api.cartolafc.globo.com/auth/liga/<slug_da_liga>

###Retornar informações do time do usuario logado (necessário token)

https://api.cartolafc.globo.com/auth/time

https://api.cartolafc.globo.com/auth/time/info

###Retornar todas as ligas do usuário logado (necessário token)

https://api.cartolafc.globo.com/auth/ligas

###Lista os esquemas táticos (4-3-3, 3-4-3 e etc.)

https://api.cartolafc.globo.com/esquemas

###Salvar a escalação do time (necessário token)

Enviar um POST com o token no header, na chave **X-GLB-Token**.

https://api.cartolafc.globo.com/auth/time/salvar

O POST ter o formato abaixo:

```
[
    "esquema": 3,
    "atleta": [
        37788,
        71116,
        39152,
        50427,
        87225,
        62009,
        81682,
        87863,
        78435,
        68930,
        90651,
        62136
    ]
]
```
