(() => {
  const section = document.querySelector('.projects-section');
  const track = section?.querySelector('.project-track');
  if (!section || !track) return;

  const projectData = [
    { src: '/assets/home/project-cabin.webp', alt: 'Blue metal roof on a timber home', title: 'METAL ROOF PROJECT' },
    { src: '/assets/home/hero-reference.webp', alt: 'Craftsman home with a dark tiled roof', title: 'LARGE ROOF DESIGN PROJECT' },
    { src: '/assets/home/project-home.webp', alt: 'Grey bungalow with a red front door', title: 'RESIDENTIAL ROOF PROJECT' },
    { src: '/assets/home/new-roof.webp', alt: 'Roofer at work on a pitched roof', title: 'ROOF INSTALLATION' },
    { src: '/assets/home/material-metal.webp', alt: 'Modern home with metal roofing', title: 'MODERN METAL ROOF PROJECT' },
    { src: '/assets/home/material-tile.webp', alt: 'Residential home with tile roofing', title: 'TILE ROOF PROJECT' }
  ];

  const seeds = Array.from(track.querySelectorAll('.project'));
  if (!seeds.length) return;

  while (track.children.length < projectData.length) {
    track.appendChild(seeds[track.children.length % seeds.length].cloneNode(true));
  }

  const cards = Array.from(track.querySelectorAll('.project')).slice(0, projectData.length);
  Array.from(track.querySelectorAll('.project')).slice(projectData.length).forEach(card => card.remove());

  cards.forEach((card, index) => {
    const data = projectData[index];
    const image = card.querySelector('img');
    const title = card.querySelector('span');
    card.classList.remove('selected');
    card.removeAttribute('aria-pressed');
    card.dataset.projectIndex = String(index);
    card.setAttribute('aria-label', `Open ${data.title.toLowerCase()}`);
    if (image) {
      image.src = data.src;
      image.alt = data.alt;
      image.loading = 'lazy';
      image.decoding = 'async';
    }
    if (title) title.textContent = data.title;
  });

  const caption = section.querySelector('.project-caption');
  if (caption) caption.textContent = projectData[0].title;

  const carousel = section.querySelector('.project-carousel');
  const prev = section.querySelector('.gallery-arrow.previous');
  const next = section.querySelector('.gallery-arrow.next');

  const controls = document.createElement('div');
  controls.className = 'project-carousel-controls';
  controls.setAttribute('aria-label', 'Project carousel controls');

  const dots = document.createElement('div');
  dots.className = 'project-carousel-dots';

  if (prev && next && carousel) {
    controls.append(prev, dots, next);
    carousel.appendChild(controls);
  }

  let page = 0;

  const visibleCount = () => {
    if (window.matchMedia('(max-width: 600px)').matches) return 1;
    if (window.matchMedia('(max-width: 900px)').matches) return 2;
    return 4;
  };

  const pageStarts = () => {
    const visible = visibleCount();
    const maxStart = Math.max(0, projectData.length - visible);
    const starts = [];
    for (let start = 0; start <= maxStart; start += visible) starts.push(start);
    if (!starts.length) starts.push(0);
    if (starts[starts.length - 1] !== maxStart) starts.push(maxStart);
    return starts;
  };

  const renderDots = () => {
    const starts = pageStarts();
    page = Math.min(page, starts.length - 1);
    dots.innerHTML = '';
    starts.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `project-carousel-dot${index === page ? ' is-active' : ''}`;
      dot.setAttribute('aria-label', `Show project group ${index + 1}`);
      dot.addEventListener('click', () => goToPage(index));
      dots.appendChild(dot);
    });
  };

  const goToPage = (nextPage) => {
    const starts = pageStarts();
    page = (nextPage + starts.length) % starts.length;
    const startIndex = starts[page];
    const target = cards[startIndex];
    if (target) {
      track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: 'smooth' });
      if (caption) caption.textContent = projectData[startIndex].title;
    }
    renderDots();
  };

  prev?.addEventListener('click', () => goToPage(page - 1));
  next?.addEventListener('click', () => goToPage(page + 1));

  let resizeTimer;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      page = 0;
      renderDots();
      goToPage(0);
    }, 120);
  });

  const lightbox = document.createElement('div');
  lightbox.className = 'project-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Project image viewer');
  lightbox.innerHTML = `
    <div class="project-lightbox-dialog">
      <button class="project-lightbox-close" type="button" aria-label="Close project image">×</button>
      <button class="project-lightbox-nav project-lightbox-prev" type="button" aria-label="Previous project">‹</button>
      <img class="project-lightbox-image" alt="" />
      <button class="project-lightbox-nav project-lightbox-next" type="button" aria-label="Next project">›</button>
      <p class="project-lightbox-caption"></p>
    </div>`;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector('.project-lightbox-image');
  const lightboxCaption = lightbox.querySelector('.project-lightbox-caption');
  const closeButton = lightbox.querySelector('.project-lightbox-close');
  const lightboxPrev = lightbox.querySelector('.project-lightbox-prev');
  const lightboxNext = lightbox.querySelector('.project-lightbox-next');
  let activeIndex = 0;
  let lastTrigger = null;

  const renderLightbox = () => {
    const data = projectData[activeIndex];
    if (lightboxImage) {
      lightboxImage.src = data.src;
      lightboxImage.alt = data.alt;
    }
    if (lightboxCaption) lightboxCaption.textContent = data.title;
  };

  const openLightbox = (index, trigger) => {
    activeIndex = index;
    lastTrigger = trigger;
    renderLightbox();
    lightbox.classList.add('is-open');
    document.body.classList.add('lightbox-open');
    closeButton?.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
    lastTrigger?.focus?.();
  };

  const changeLightbox = (direction) => {
    activeIndex = (activeIndex + direction + projectData.length) % projectData.length;
    renderLightbox();
  };

  cards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      if (caption) caption.textContent = projectData[index].title;
    });
    card.addEventListener('focus', () => {
      if (caption) caption.textContent = projectData[index].title;
    });
    card.addEventListener('click', () => openLightbox(index, card));
  });

  closeButton?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', () => changeLightbox(-1));
  lightboxNext?.addEventListener('click', () => changeLightbox(1));
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', event => {
    if (!lightbox.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') changeLightbox(-1);
    if (event.key === 'ArrowRight') changeLightbox(1);
  });

  renderDots();
})();
