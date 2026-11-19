/* Converte as fotos originais para WebP.
 *
 *   npm i sharp
 *   SRC="/caminho/para/mariana costa" node scripts/build-images.js
 *
 * SRC = pasta que contém as pastas dos projetos E a pasta site/.
 */
const sharp = require('sharp');
const path = require('path'), fs = require('fs');
const SRC = process.env.SRC, OUT = path.join(SRC, 'site/img');

// [origem, destino, larguraMax]
const jobs = [
  ['cobertura cura/Área Social-4.jpg',  'hero/hero-desktop', 2400],
  ['cobertura cura/Área Social-10.jpg', 'hero/hero-mobile',  1400],

  ['cobertura cura/Área Social-4.jpg',   'projetos/cura-01', 1800],
  ['cobertura cura/Área Social-9.jpg',   'projetos/cura-02', 1600],
  ['cobertura cura/Área Social-1.jpg',   'projetos/cura-03', 1800],
  ['cobertura cura/Área Gourmet-1.jpg',  'projetos/cura-04', 1400],
  ['cobertura cura/Área Externa-4.jpg',  'projetos/cura-05', 1800],
  ['cobertura cura/Suíte Master-1.jpg',  'projetos/cura-06', 1400],
  ['cobertura cura/Área Social-5.jpg',   'projetos/cura-07', 1400],
  ['cobertura cura/Suíte Master-8.jpg',  'projetos/cura-08', 1600],

  ['APTO ESSÊNCIA /Area Social-2.jpg',   'projetos/essencia-01', 1800],
  ['APTO ESSÊNCIA /Area Social-7.jpg',   'projetos/essencia-02', 1800],
  ['APTO ESSÊNCIA /Area Social-1.jpg',   'projetos/essencia-03', 1400],
  ['APTO ESSÊNCIA /Suite Casal-2.jpg',   'projetos/essencia-04', 1400],
  ['APTO ESSÊNCIA /Area Social-3.jpg',   'projetos/essencia-05', 1800],
  ['APTO ESSÊNCIA /Lavabo-1.jpg',        'projetos/essencia-06', 1400],
  ['APTO ESSÊNCIA /Suite Filha-4.jpg',   'projetos/essencia-07', 1400],
  ['APTO ESSÊNCIA /Area Social-10.jpg',  'projetos/essencia-08', 1800],

  ['office milão/1 Office Milão Acabamentos-1.jpg',  'projetos/milao-01', 1800],
  ['office milão/4 Office Milão Acabamentos-4.jpg',  'projetos/milao-02', 1800],
  ['office milão/7 Office Milão Acabamentos-7.jpg',  'projetos/milao-03', 1800],
  ['office milão/13 Lavabo Milão Acabamentos-13.jpg','projetos/milao-04', 1600],

  ['APTO METAMORFOSE /Living-4.jpg',   'projetos/meta-01', 1400],
  ['APTO METAMORFOSE /Living-1.jpg',   'projetos/meta-02', 1400],
  ['APTO METAMORFOSE /Living-8.jpg',   'projetos/meta-03', 1800],
  ['APTO METAMORFOSE /Quarto 1-1.jpg', 'projetos/meta-04', 1400],
  ['APTO METAMORFOSE /Bwc-4.jpg',      'projetos/meta-05', 1800],

  ['cobertura cura/Suíte Master-2.jpg',  'projetos/cura-14', 1600],
  ['cobertura cura/Suíte Master-3.jpg',  'projetos/cura-15', 1600],
  ['cobertura cura/Suíte Master-4.jpg',  'projetos/cura-16', 1600],
  ['cobertura cura/Suíte Master-5.jpg',  'projetos/cura-17', 1600],
  ['cobertura cura/Suíte Master-7.jpg',  'projetos/cura-18', 1600],
  ['cobertura cura/Suíte 1-2.jpg',       'projetos/cura-19', 1600],
  ['cobertura cura/Suíte 1-5.jpg',       'projetos/cura-20', 1600],
  ['cobertura cura/Suíte 1-6.jpg',       'projetos/cura-21', 1600],
  ['cobertura cura/Suíte 2-3.jpg',       'projetos/cura-22', 1600],
  ['cobertura cura/Suíte 2-4.jpg',       'projetos/cura-23', 1600],
  ['cobertura cura/Suíte 2-5.jpg',       'projetos/cura-24', 1600],
  ['cobertura cura/Suíte 2-6.jpg',       'projetos/cura-25', 1600],

  // Apto Boas-Vindas (as 5 fotos "Arquiteta" ficam fora: a galeria mostra o projeto)
  ['apto boas vindas/Área Social-1.jpg',  'projetos/bv-01', 1600],
  ['apto boas vindas/Área Social-7.jpg',  'projetos/bv-02', 1600],
  ['apto boas vindas/Área Social-9.jpg',  'projetos/bv-03', 1600],
  ['apto boas vindas/Área Social-5.jpg',  'projetos/bv-04', 1600],
  ['apto boas vindas/Área Social-4.jpg',  'projetos/bv-05', 1600],
  ['apto boas vindas/Área Social-6.jpg',  'projetos/bv-06', 1600],
  ['apto boas vindas/Área Social-8.jpg',  'projetos/bv-07', 1600],
  ['apto boas vindas/Área Social-10.jpg', 'projetos/bv-08', 1600],
  ['apto boas vindas/Área Social-2.jpg',  'projetos/bv-09', 1600],
  ['apto boas vindas/Área Social-3.jpg',  'projetos/bv-10', 1600],
  ['apto boas vindas/Suíte 1-1.jpg',      'projetos/bv-11', 1600],
  ['apto boas vindas/Suíte 1-2.jpg',      'projetos/bv-12', 1600],
  ['apto boas vindas/Suíte 1-3.jpg',      'projetos/bv-13', 1600],
  ['apto boas vindas/Suíte 1-4.jpg',      'projetos/bv-14', 1600],
  ['apto boas vindas/Suíte 1-5.jpg',      'projetos/bv-15', 1600],
  ['apto boas vindas/Suíte 1-6.jpg',      'projetos/bv-16', 1600],
  ['apto boas vindas/Suíte 1-7.jpg',      'projetos/bv-17', 1600],
  ['apto boas vindas/Suíte 2-1.jpg',      'projetos/bv-18', 1600],
  ['apto boas vindas/Suíte 2-2.jpg',      'projetos/bv-19', 1600],
  ['apto boas vindas/Suíte 2-3.jpg',      'projetos/bv-20', 1600],
  ['apto boas vindas/Escritório-1.jpg',   'projetos/bv-21', 1600],
  ['apto boas vindas/Escritório-2.jpg',   'projetos/bv-22', 1600],
  ['apto boas vindas/Escritório-3.jpg',   'projetos/bv-23', 1600],

  ['APTO METAMORFOSE /Arquiteta-2.jpg', 'sobre/arquiteta', 1600],
];

(async () => {
  let totalIn = 0, totalOut = 0;
  for (const [src, dest, w] of jobs) {
    const inPath = path.join(SRC, src);
    const outPath = path.join(OUT, dest + '.webp');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    await sharp(inPath)
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(outPath);
    const inSz = fs.statSync(inPath).size, outSz = fs.statSync(outPath).size;
    totalIn += inSz; totalOut += outSz;
    const m = await sharp(outPath).metadata();
    console.log(`${dest}.webp  ${m.width}x${m.height}  ${(outSz/1024).toFixed(0)}KB`);
  }
  // capas verticais 3:4 da faixa de projetos
  const capas = [
    ['cobertura cura/Área Social-10.jpg',              'cura'],
    ['APTO ESSÊNCIA /Area Social-1.jpg',               'essencia'],
    ['office milão/1 Office Milão Acabamentos-1.jpg',  'milao'],
    ['APTO METAMORFOSE /Living-7.jpg',                 'meta'],
    ['apto boas vindas/Área Social-7.jpg',             'bv'],
  ];
  for (const [src, nome] of capas) {
    const outPath = path.join(OUT, 'capas', nome + '.webp');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    await sharp(path.join(SRC, src)).rotate()
      .resize({ width: 1200, height: 1600, fit: 'cover', position: 'centre' })
      .webp({ quality: 82, effort: 6 })
      .toFile(outPath);
    totalOut += fs.statSync(outPath).size;
    console.log(`capas/${nome}.webp  1200x1600  ${(fs.statSync(outPath).size/1024).toFixed(0)}KB`);
  }

  console.log(`\nTOTAL webp: ${(totalOut/1048576).toFixed(1)} MB  (originais: ${(totalIn/1048576).toFixed(0)} MB)`);
})();
