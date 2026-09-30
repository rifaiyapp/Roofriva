(() => {
  const section = document.querySelector('.reviews-section');
  const track = section?.querySelector('.reviews-grid');
  if (!section || !track) return;

  const seedCards = Array.from(track.querySelectorAll('.review-card'));
  if (!seedCards.length) return;

  const reviews = [
    {
      name: 'Alex M.',
      quote: 'The process was straightforward, communication was clear, and the roofing options were easy to understand.',
      image: '/assets/home/new-roof.webp'
    },
    {
      name: 'Jordan T.',
      quote: 'The service information made it simple to understand the difference between repair and replacement.',
      image: '/assets/home/roof-inspector.webp'
    },
    {
      name: 'Morgan R.',
      quote: 'The quote request process was quick, clear and worked well on my phone.',
      image: '/assets/home/crew-cutout.webp'
    },
    {
      name: 'Taylor S.',
      quote: 'Everything was explained clearly from the first conversation through the final roofing recommendations.',
      image: '/assets/home/about-reference.webp'
    },
    {
      name: 'Casey L.',
      quote: 'The team made the planning process easy to follow and kept the project details organized from start to finish.',
      image: '/assets/home/roof-repair.webp'
    },
    {
      name: 'Jamie P.',
      quote: 'A clean, professional experience with helpful communication and a simple way to request the next step.',
      image: '/assets/home/project-home.webp'
    }
  ];

  while (track.children.length < reviews.length) {
    track.appendChild(seedCards[track.children.length % seedCards.length].cloneNode(true));
  }

  const cards = Array.from(track.querySelectorAll('.review-card')).slice(0, reviews.length);
  Array.from(track.querySelectorAll('.review-card')).slice(reviews.length).forEach(card => card.remove());

  cards.forEach((card, index) => {
    const review = reviews[index];
    const quote = card.querySelector('blockquote');
    const name = card.querySelector('figcaption > strong');
    const image = card.querySelector('.review-avatar img');
    if (quote) quote.textContent = review.quote;
    if (name) name.textContent = review.name;
    if (image) {
      image.setAttribute('src', review.image);
      image.setAttribute('alt', '');
      image.setAttribute('loading', 'lazy');
    }
  });

  const controls = document.createElement('div');
  controls.className = 'review-carousel-controls';
  controls.setAttribute('aria-label', 'Testimonial carousel controls');

  const prev = document.createElement('button');
  prev.type = 'button';
  prev.className = 'review-carousel-arrow review-carousel-prev';
  prev.setAttribute('aria-label', 'Previous testimonials');
  prev.textContent = '←';

  const dots = document.createElement('div');
  dots.className = 'review-carousel-dots';

  const next = document.createElement('button');
  next.type = 'button';
  next.className = 'review-carousel-arrow review-carousel-next';
  next.setAttribute('aria-label', 'Next testimonials');
  next.textContent = '→';

  controls.append(prev, dots, next);
  track.insertAdjacentElement('afterend', controls);

  let page = 0;

  const visibleCount = () => {
    if (window.matchMedia('(max-width: 600px)').matches) return 1;
    if (window.matchMedia('(max-width: 900px)').matches) return 2;
    return 3;
  };

  const pageCount = () => Math.ceil(reviews.length / visibleCount());

  const renderDots = () => {
    const count = pageCount();
    dots.innerHTML = '';
    page = Math.min(page, count - 1);
    for (let i = 0; i < count; i += 1) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `review-carousel-dot${i === page ? ' is-active' : ''}`;
      dot.setAttribute('aria-label', `Show testimonial group ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dots.appendChild(dot);
    }
  };

  const goTo = (nextPage) => {
    const count = pageCount();
    page = (nextPage + count) % count;
    const visible = visibleCount();
    const target = cards[Math.min(page * visible, cards.length - 1)];
    if (target) {
      track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    }
    renderDots();
  };

  prev.addEventListener('click', () => goTo(page - 1));
  next.addEventListener('click', () => goTo(page + 1));

  let resizeTimer;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      renderDots();
      goTo(page);
    }, 140);
  });

  renderDots();
})();
