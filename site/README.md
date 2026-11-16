# Mariana Costa Arquitetura — site

Site estático (HTML/CSS/JS puro, sem build).

## Rodar localmente
```
python3 -m http.server 8000
```
Abra http://localhost:8000

## Publicar
Suba a pasta inteira em qualquer hospedagem estática
(Netlify, Vercel, GitHub Pages, Hostinger, etc.).

## Estrutura
```
index.html        página única
favicon.svg       ícone (monograma)
css/style.css     estilos
js/main.js        menu, faixa de projetos, lightbox, reveal
img/hero/         imagem de abertura (desktop + mobile)
img/capas/        capa 3:4 de cada projeto (faixa horizontal)
img/projetos/     fotos das galerias (abrem no lightbox)
img/sobre/        foto da arquiteta
```

## Como editar as galerias

As fotos de cada projeto ficam em `js/main.js`, no objeto `PROJETOS`
(início do arquivo). Cada entrada é `['caminho/da/foto.webp', 'texto alternativo']`.
Para adicionar uma foto, converta para WebP, salve em `img/projetos/`
e acrescente a linha na lista do projeto — a contagem e os
indicadores se ajustam sozinhos.

A capa que aparece na faixa é separada, em `img/capas/<projeto>.webp`,
e é referenciada direto no `index.html`.

## O que precisa ser trocado antes de ir ao ar

Busque e substitua em `index.html`:

| Placeholder | Onde aparece |
|---|---|
| `5548999999999` | links do WhatsApp (2x no corpo + 1x no menu mobile) |
| `+554899999999` / `+55 48 99999-9999` | telefone na seção Contato |
| `https://instagram.com/` | link do Instagram |
| `marianacostaarquitetura.com.br` | **domínio** — aparece no canonical, og:url, sitemap.xml e robots.txt |

Textos fictícios a revisar com a arquiteta:
- Números da faixa: 12 anos e 4.200 m² ainda são estimativas
  (150+ projetos é o número real)
- Áreas, anos e descrições dos 4 projetos
- Frase do manifesto (abaixo do hero)
- Horário de atendimento

Textos oficiais, enviados pela arquiteta — não reescrever:
- Seção "Escritório" (bio)
- Seção "Serviços" (os 6 descritivos)

A seção "Processo" (4 etapas) foi removida: era inventada e afirmava
condições comerciais que podiam não corresponder ao contrato real.

## Imagens
Todas em **WebP**, qualidade 82, geradas dos originais com `sharp`
(capas 1200x1600; galerias até 1800px no lado maior).
Total da pasta img/: 5,5 MB — contra ~39 MB dos originais.

Para reconverter, use o script em `scripts/build-images.js`
(requer `npm i sharp`).

## Identidade visual

A paleta vem do logotipo (`img/Logotipo.png`): rosé, cobre e champanhe
metálicos. São dois tons de acento por uma razão de contraste — o rosé
claro tem apenas 2.26:1 sobre o fundo claro, insuficiente para texto:

| token | hex | uso |
|---|---|---|
| `--cobre` | `#906054` | acento sobre fundo claro (4.8:1) |
| `--rose` | `#C09C9C` | acento sobre fundo escuro (7.8:1) |
| `--champanhe` | `#E4C09C` | hover de botões em fundo escuro |

As variáveis `--latao`/`--latao-cl` continuam existindo como aliases,
porque o site inteiro as referencia.

O logotipo aparece na nav e no rodapé (`img/logo.webp`). Sobre a foto do
hero recebe brightness + drop-shadow para não sumir nas áreas claras;
com a nav rolada, o filtro sai.

## SEO

Palavra-chave principal: **arquiteto em Florianópolis** (480 buscas/mês).
Aparece no H1, no title, na meta description e nos H2 das seções.

Observação sobre o gênero: a palavra que ranqueia é "arquiteto" (masculino),
mas a Mariana é arquiteta. O H1 usa a forma que as pessoas buscam; todo
texto que se refere a ela usa "arquiteta". O Google trata as duas como
variações da mesma intenção.

O que está configurado:
- `<title>` 54 caracteres, meta description 157 — ambos na faixa ideal
- canonical, robots, Open Graph completo e twitter:card
- geo tags (`geo.region`, `geo.position`, ICBM) para busca local
- JSON-LD com 3 entidades ligadas: ProfessionalService + ArchitecturalService,
  Person (a arquiteta) e WebSite — com endereço, coordenadas, horário,
  cidades atendidas e os 6 serviços
- `sitemap.xml` e `robots.txt` apontando para ele
- alt text das imagens com projeto e localidade

**Antes de publicar:** troque `marianacostaarquitetura.com.br` pelo domínio
real em `index.html` (canonical, og:url, og:image e JSON-LD), `sitemap.xml`
e `robots.txt`. Canonical apontando para o domínio errado prejudica o
ranqueamento.

Depois de publicar, cadastre o site no Google Search Console e crie/reivindique
o **perfil do Google Meu Negócio** — para busca local ele pesa mais que o site.
