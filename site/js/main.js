/* Mariana Costa Arquitetura — interações */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================================================
     Dados das galerias
     ============================================================ */
  var PROJETOS = {
    cura: {
      nome: 'Cobertura Cura',
      spec: 'Residencial · 310 m² · Florianópolis — SC · 2024',
      fotos: [
        ['img/projetos/cura-01.webp', 'Sala de jantar com mesa para oito lugares e luminária em latão'],
        ['img/projetos/cura-02.webp', 'Estar com sofás em tom mostarda e painel vazado em madeira'],
        ['img/projetos/cura-03.webp', 'Cozinha em tons neutros com bancada de travertino'],
        ['img/projetos/cura-07.webp', 'Adega e aparador canelado sob persiana de madeira'],
        ['img/projetos/cura-04.webp', 'Mesa de reunião em tronco maciço sob pendente escultórico'],
        ['img/projetos/cura-05.webp', 'Área externa com spa, deck em madeira e pergolado metálico'],
        ['img/projetos/cura-06.webp', 'Detalhe de estante iluminada na suíte master'],
        ['img/projetos/cura-08.webp', 'Banheiro da suíte master com box de perfis dourados e bancada dupla'],
        ['img/projetos/cura-10.webp', 'Suíte com cabeceira estofada, painel verde-oliva e obra de arte'],
        ['img/projetos/cura-11.webp', 'Banheiro da suíte com bancada em mármore e box de vidro'],
        ['img/projetos/cura-12.webp', 'Lavabo com cuba de ônix retroiluminada e parede espelhada'],
        ['img/projetos/cura-13.webp', 'Hall social com nicho iluminado em mármore e marcenaria'],
        ['img/projetos/cura-14.webp', 'Suíte master com pendentes em latão e criado-mudo arredondado'],
        ['img/projetos/cura-15.webp', 'Penteadeira da suíte master com espelho circular retroiluminado'],
        ['img/projetos/cura-16.webp', 'Suíte master vista da janela, com cabeceira estofada e closet ao fundo'],
        ['img/projetos/cura-17.webp', 'Suíte master com estante iluminada e acesso ao closet'],
        ['img/projetos/cura-18.webp', 'Banheiro da master com bancada dupla e metais dourados'],
        ['img/projetos/cura-19.webp', 'Suíte com home office embutido e painel de TV em marcenaria'],
        ['img/projetos/cura-20.webp', 'Escrivaninha em nicho verde-oliva com prateleiras iluminadas'],
        ['img/projetos/cura-21.webp', 'Banheiro da suíte com cuba verde e revestimento canelado'],
        ['img/projetos/cura-22.webp', 'Suíte em tons de rosa com espelho oval e nichos laterais'],
        ['img/projetos/cura-23.webp', 'Suíte com boiserie clara e criados-mudos espelhados'],
        ['img/projetos/cura-24.webp', 'Painel de TV com boiserie e estante em latão na suíte'],
        ['img/projetos/cura-25.webp', 'Detalhe do criado-mudo com arandela e cabeceira estofada']
      ]
    },
    bv: {
      nome: 'Apto Boas-Vindas',
      spec: 'Residencial · Florianópolis — SC · 2024',
      fotos: [
        ['img/projetos/bv-01.webp', 'Hall de entrada com espelho orgânico, aparador em mármore e luminária linear'],
        ['img/projetos/bv-02.webp', 'Living integrado ao jantar, com cortina de piso a teto e painel de TV'],
        ['img/projetos/bv-03.webp', 'Estar com sofá claro, mesa lateral em madeira e tapete de fibra'],
        ['img/projetos/bv-04.webp', 'Sala de jantar com mesa redonda e pendente de anéis'],
        ['img/projetos/bv-05.webp', 'Jantar visto da cozinha, com cristaleira espelhada ao fundo'],
        ['img/projetos/bv-06.webp', 'Cozinha integrada com bancada em pedra e marcenaria clara'],
        ['img/projetos/bv-07.webp', 'Vista do living a partir do hall, com enfiada de ambientes'],
        ['img/projetos/bv-08.webp', 'Detalhe da marcenaria do living com nichos iluminados'],
        ['img/projetos/bv-09.webp', 'Lavabo com parede verde, cuba esculpida em mármore e espelho redondo'],
        ['img/projetos/bv-10.webp', 'Lavabo visto da porta, com ripado de madeira e pendente'],
        ['img/projetos/bv-11.webp', 'Suíte com cabeceira geométrica, pendente e criado-mudo em tom terracota'],
        ['img/projetos/bv-12.webp', 'Suíte com painel ripado e espelho vertical ao lado da cama'],
        ['img/projetos/bv-13.webp', 'Vista ampla da suíte com cortina clara e marcenaria sob medida'],
        ['img/projetos/bv-14.webp', 'Closet da suíte com prateleiras abertas e iluminação embutida'],
        ['img/projetos/bv-15.webp', 'Banheiro da suíte com bancada suspensa e espelho iluminado'],
        ['img/projetos/bv-16.webp', 'Detalhe do banheiro com revestimento em tom neutro'],
        ['img/projetos/bv-17.webp', 'Box do banheiro com nicho embutido e metais escovados'],
        ['img/projetos/bv-18.webp', 'Segunda suíte com cabeceira clara e arandela esférica'],
        ['img/projetos/bv-19.webp', 'Segunda suíte vista da porta, com marcenaria de piso a teto'],
        ['img/projetos/bv-20.webp', 'Detalhe do criado-mudo com luminária e vaso decorativo'],
        ['img/projetos/bv-21.webp', 'Home office com marcenaria iluminada e trilho de spots'],
        ['img/projetos/bv-22.webp', 'Bancada do home office com prateleiras em madeira'],
        ['img/projetos/bv-23.webp', 'Vista do home office integrado ao estar']
      ]
    },
    essencia: {
      nome: 'Apto Essência',
      spec: 'Residencial · 142 m² · Florianópolis — SC · 2024',
      fotos: [
        ['img/projetos/essencia-01.webp', 'Sala de jantar com painel verde, adega espelhada e cadeiras claras'],
        ['img/projetos/essencia-05.webp', 'Vista do estar integrado ao jantar com paleta clara'],
        ['img/projetos/essencia-08.webp', 'Living integrado ao jantar, com painel ripado iluminado ao fundo'],
        ['img/projetos/essencia-03.webp', 'Hall de entrada com espelho de piso a teto e enfiada de ambientes'],
        ['img/projetos/essencia-02.webp', 'Cozinha linear com bancada em quartzito e metais dourados'],
        ['img/projetos/essencia-04.webp', 'Suíte do casal com lustre de cristal e closet espelhado'],
        ['img/projetos/essencia-07.webp', 'Suíte com painel ripado, penteadeira e espelho retroiluminado'],
        ['img/projetos/essencia-06.webp', 'Lavabo com cuba esculpida e iluminação rebaixada'],
        ['img/projetos/essencia-09.webp', 'Suíte com pendente circular, cortina leve e painel ripado'],
        ['img/projetos/essencia-10.webp', 'Banheiro em tons de azul com bancada ampla e espelho redondo'],
        ['img/projetos/essencia-11.webp', 'Corredor com marcenaria clássica e nichos iluminados em caramelo'],
        ['img/projetos/essencia-12.webp', 'Lavabo com revestimento hexagonal, metais dourados e espelho circular']
      ]
    },
    milao: {
      nome: 'Office Milão',
      spec: 'Corporativo · 96 m² · Florianópolis — SC · 2023',
      fotos: [
        ['img/projetos/milao-01.webp', 'Escritório com brise de madeira, estações de trabalho e estante iluminada'],
        ['img/projetos/milao-02.webp', 'Sala de atendimento com marcenaria em madeira nobre e quadros emoldurados'],
        ['img/projetos/milao-03.webp', 'Vista do corredor interno do escritório'],
        ['img/projetos/milao-04.webp', 'Lavabo do escritório com revestimento escuro e cuba suspensa'],
        ['img/projetos/milao-05.webp', 'Estações de trabalho com brise de madeira e marcenaria sob medida'],
        ['img/projetos/milao-06.webp', 'Copa integrada ao escritório, com boiserie e bancada compacta'],
        ['img/projetos/milao-07.webp', 'Sala de reunião com estante iluminada e quadros emoldurados'],
        ['img/projetos/milao-08.webp', 'Mesa de reunião em madeira maciça sob teto ripado'],
        ['img/projetos/milao-09.webp', 'Vista das estações de trabalho a partir da recepção'],
        ['img/projetos/milao-10.webp', 'Sala de reunião com parede de pastilhas e iluminação linear'],
        ['img/projetos/milao-11.webp', 'Lavabo com revestimento escuro, cuba preta e bancada de madeira']
      ]
    },
    meta: {
      nome: 'Apto Metamorfose',
      spec: 'Residencial · 74 m² · Florianópolis — SC · 2023',
      fotos: [
        ['img/projetos/meta-03.webp', 'Living com boiserie clara e marcenaria ripada'],
        ['img/projetos/meta-02.webp', 'Hall de entrada com espelho orgânico retroiluminado'],
        ['img/projetos/meta-01.webp', 'Cozinha compacta com bancada em pedra e iluminação linear no teto'],
        ['img/projetos/meta-04.webp', 'Quarto com cabeceira estofada e nichos laterais'],
        ['img/projetos/meta-05.webp', 'Banheiro com revestimento contínuo e bancada suspensa'],
        ['img/projetos/meta-06.webp', 'Painel de TV com marcenaria ripada e prateleiras suspensas'],
        ['img/projetos/meta-07.webp', 'Sala de jantar com cadeiras clássicas e lustre circular'],
        ['img/projetos/meta-08.webp', 'Cozinha com iluminação linear embutida e marcenaria clara'],
        ['img/projetos/meta-09.webp', 'Banheiro com bancada suspensa e revestimento contínuo'],
        ['img/projetos/meta-10.webp', 'Quarto com nicho iluminado e marcenaria de piso a teto'],
        ['img/projetos/meta-11.webp', 'Copa com porta de correr ripada e bancada alta'],
        ['img/projetos/meta-12.webp', 'Cozinha vista da sala, com bancada em pedra e banquetas']
      ]
    }
  };

  /* ============================================================
     Nav: estado sólido ao sair do hero
     ============================================================ */
  var nav = document.getElementById('nav');
  var hero = document.querySelector('.hero');

  function onScroll() {
    var past = window.scrollY > (hero ? hero.offsetHeight - 90 : 120);
    nav.classList.toggle('is-stuck', past);
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { onScroll(); ticking = false; });
  }, { passive: true });
  onScroll();

  /* ============================================================
     Menu mobile
     ============================================================ */
  var burger = document.getElementById('burger');
  var drawer = document.getElementById('drawer');

  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    drawer.setAttribute('aria-hidden', String(!open));
    lockScroll(open || lb.classList.contains('is-open'));
  }

  burger.addEventListener('click', function () {
    setMenu(!document.body.classList.contains('menu-open'));
  });

  drawer.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 980 && document.body.classList.contains('menu-open')) setMenu(false);
  });

  /* trava de rolagem compartilhada entre menu e lightbox */
  var scrollLocked = false, savedY = 0;
  function lockScroll(on) {
    if (on === scrollLocked) return;
    scrollLocked = on;
    if (on) {
      savedY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = -savedY + 'px';
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, savedY);
    }
  }

  /* ============================================================
     Lightbox
     ============================================================ */
  var lb = document.getElementById('lightbox');
  var lbImg = lb.querySelector('.lb__img');
  var lbTitle = lb.querySelector('.lb__title');
  var lbSpec = lb.querySelector('.lb__spec');
  var lbCur = lb.querySelector('.lb__cur');
  var lbTot = lb.querySelector('.lb__tot');
  var lbCap = lb.querySelector('.lb__caption');
  var lbDots = lb.querySelector('.lb__dots');
  var lbFig = lb.querySelector('.lb__figure');

  var atual = null;   // projeto aberto
  var idx = 0;        // foto atual
  var lastFocus = null;

  function preload(src) { var i = new Image(); i.src = src; }

  function mostrar(n, dir) {
    if (!atual) return;
    var fotos = atual.fotos;
    idx = (n + fotos.length) % fotos.length;
    var f = fotos[idx];

    // transição curta
    lbFig.classList.remove('slide-l', 'slide-r');
    if (dir && !reduced) {
      void lbFig.offsetWidth;
      lbFig.classList.add(dir > 0 ? 'slide-r' : 'slide-l');
    }

    lbImg.src = f[0];
    lbImg.alt = f[1];
    lbCap.textContent = f[1];
    lbCur.textContent = String(idx + 1);

    [].forEach.call(lbDots.children, function (d, i) {
      d.classList.toggle('is-on', i === idx);
      d.setAttribute('aria-selected', String(i === idx));
    });

    // pré-carrega vizinhas
    preload(fotos[(idx + 1) % fotos.length][0]);
    preload(fotos[(idx - 1 + fotos.length) % fotos.length][0]);
  }

  function abrir(chave, origem) {
    atual = PROJETOS[chave];
    if (!atual) return;
    lastFocus = origem || document.activeElement;

    lbTitle.textContent = atual.nome;
    lbSpec.textContent = atual.spec;
    lbTot.textContent = String(atual.fotos.length);

    // monta os indicadores
    lbDots.innerHTML = '';
    atual.fotos.forEach(function (f, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'lb__dot';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', 'Foto ' + (i + 1) + ' de ' + atual.fotos.length);
      b.addEventListener('click', function () { mostrar(i, i > idx ? 1 : -1); });
      lbDots.appendChild(b);
    });

    mostrar(0, 0);
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    lockScroll(true);
    lb.querySelector('.lb__close').focus();
  }

  function fechar() {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    atual = null;
    lockScroll(document.body.classList.contains('menu-open'));
    if (lastFocus) lastFocus.focus();
  }

  // abre pela faixa
  document.querySelectorAll('.reel__item').forEach(function (item) {
    var btn = item.querySelector('.reel__btn');
    btn.addEventListener('click', function () {
      abrir(item.getAttribute('data-project'), btn);
    });
  });

  lb.querySelector('.lb__close').addEventListener('click', fechar);
  lb.querySelector('.lb__nav--prev').addEventListener('click', function () { mostrar(idx - 1, -1); });
  lb.querySelector('.lb__nav--next').addEventListener('click', function () { mostrar(idx + 1, 1); });

  // clique no fundo fecha
  lb.addEventListener('click', function (e) {
    if (e.target === lb || e.target.classList.contains('lb__stage')) fechar();
  });

  // teclado
  document.addEventListener('keydown', function (e) {
    if (lb.classList.contains('is-open')) {
      if (e.key === 'Escape') { fechar(); return; }
      if (e.key === 'ArrowRight') { mostrar(idx + 1, 1); return; }
      if (e.key === 'ArrowLeft') { mostrar(idx - 1, -1); return; }
      if (e.key === 'Tab') trapFocus(e);
      return;
    }
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) setMenu(false);
  });

  // mantém o foco dentro do lightbox
  function trapFocus(e) {
    var f = lb.querySelectorAll('button:not([disabled])');
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  // arrastar / deslizar
  var x0 = null, y0 = null;
  lb.addEventListener('touchstart', function (e) {
    x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
  }, { passive: true });

  lb.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    var dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      mostrar(idx + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
    }
    x0 = y0 = null;
  }, { passive: true });

  /* ============================================================
     Faixa de projetos: arrastar com o mouse
     ============================================================ */
  var reel = document.getElementById('reel');
  if (reel) {
    var down = false, startX = 0, startScroll = 0, moved = 0;

    reel.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'touch') return;   // toque usa o scroll nativo
      down = true; moved = 0;
      startX = e.clientX; startScroll = reel.scrollLeft;
      reel.classList.add('is-grabbing');
    });

    window.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      reel.scrollLeft = startScroll - dx;
    });

    window.addEventListener('pointerup', function () {
      if (!down) return;
      down = false;
      reel.classList.remove('is-grabbing');
    });

    // impede que o arrasto vire clique
    reel.addEventListener('click', function (e) {
      if (moved > 8) { e.preventDefault(); e.stopPropagation(); }
    }, true);

    // esconde a dica quando a faixa é rolada
    var hint = document.querySelector('.reel__hint');
    if (hint) {
      reel.addEventListener('scroll', function () {
        if (reel.scrollLeft > 24) hint.classList.add('is-gone');
      }, { passive: true });
    }
  }

  /* ============================================================
     Reveal no scroll
     ============================================================ */
  var targets = document.querySelectorAll('[data-reveal]');

  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    targets.forEach(function (el) { io.observe(el); });
  }

  /* ano no rodapé */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
