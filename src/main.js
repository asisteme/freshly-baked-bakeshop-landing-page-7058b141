const productGallery = [
  {
    title: "Pan de Masa Madre",
    desc: "Corteza crujiente, miga suave y sabor profundo. Hecho con fermentación natural.",
    price: "$60",
    img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&h=300&fit=crop"
  },
  {
    title: "Croissant Artesanal",
    desc: "Hojaldre dorado, mantequilla premium y textura delicada.",
    price: "$45",
    img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&h=300&fit=crop"
  },
  {
    title: "Baguette Clásica",
    desc: "Tradición francesa, corteza fina y aroma irresistible.",
    price: "$35",
    img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&h=300&fit=crop"
  },
  {
    title: "Pan Integral con Semillas",
    desc: "Rico en fibra, semillas seleccionadas y sabor auténtico.",
    price: "$55",
    img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&h=300&fit=crop"
  }
];

const menuSpecials = [
  {
    title: "Brioche de Naranja y Almendra",
    desc: "Esponjoso, con ralladura de naranja y almendras tostadas.",
    price: "$50",
    img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&h=300&fit=crop"
  },
  {
    title: "Focaccia de Romero",
    desc: "Aceite de oliva extra virgen, romero fresco y sal marina.",
    price: "$40",
    img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&h=300&fit=crop"
  }
];

const methodology = [
  {
    icon: "🍞",
    title: "Ingredientes Naturales",
    desc: "Solo utilizamos harinas seleccionadas, agua purificada y masa madre natural. Sin aditivos ni conservadores."
  },
  {
    icon: "⏳",
    title: "Fermentación Lenta",
    desc: "Respetamos los tiempos de la masa para lograr sabores y texturas incomparables."
  },
  {
    icon: "👐",
    title: "Hecho a Mano",
    desc: "Cada pieza es formada y horneada artesanalmente, cuidando cada detalle."
  }
];

const testimonials = [
  {
    quote: "El mejor pan que he probado. Se nota la dedicación y el amor en cada bocado.",
    author: "María López",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "Las especialidades del día siempre sorprenden. ¡Recomiendo la focaccia!",
    author: "Carlos Méndez",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

const hours = [
  { day: "Lunes - Viernes", time: "7:00 - 19:00" },
  { day: "Sábado", time: "8:00 - 15:00" },
  { day: "Domingo", time: "Cerrado" }
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function createHeader() {
  return `
    <header>
      <nav class="navbar">
        <div class="navbar-logo">
          <img src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000755043561854468/Fresh-baked-bakery-logo-vector.jpg" alt="Freshly Baked Logo" />
          <span class="navbar-title">Freshly Baked Bakeshop</span>
        </div>
        <div class="navbar-links">
          <a href="#story" onclick="scrollToSection('story');return false;">Nuestra Historia</a>
          <a href="#gallery" onclick="scrollToSection('gallery');return false;">Productos</a>
          <a href="#menu" onclick="scrollToSection('menu');return false;">Especiales</a>
          <a href="#methodology" onclick="scrollToSection('methodology');return false;">Metodología</a>
          <a href="#testimonials" onclick="scrollToSection('testimonials');return false;">Testimonios</a>
          <a href="#hours" onclick="scrollToSection('hours');return false;">Horarios</a>
          <button class="cta-btn" onclick="scrollToSection('menu')">Ver Menú</button>
        </div>
      </nav>
    </header>
  `;
}

function createHero() {
  return `
    <section class="hero">
      <img class="hero-logo" src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000755043561854468/Fresh-baked-bakery-logo-vector.jpg" alt="Freshly Baked Logo" />
      <h1 class="hero-title">Freshly Baked Bakeshop</h1>
      <div class="hero-tagline">Panadería artesanal con alma, sabor y tradición.<br>Descubre la calidez de lo hecho a mano.</div>
      <div class="hero-cta">
        <button class="cta-btn" onclick="scrollToSection('menu')">Ver Especiales del Día</button>
      </div>
    </section>
  `;
}

function createStory() {
  return `
    <section class="section" id="story">
      <h2 class="section-title">Nuestra Historia</h2>
      <div class="story">
        Nacimos del amor por el pan auténtico y la pasión por la tradición artesanal. En Freshly Baked Bakeshop, cada día es una oportunidad para compartir calidez, aromas y sabores que evocan recuerdos y crean nuevos momentos. Creemos en la honestidad de los ingredientes, el respeto por los procesos y la alegría de hornear para nuestra comunidad.
      </div>
    </section>
  `;
}

function createGallery() {
  return `
    <section class="section" id="gallery">
      <h2 class="section-title">Nuestros Productos</h2>
      <div class="gallery">
        ${productGallery.map(item => `
          <div class="gallery-item">
            <img src="${item.img}" alt="${item.title}" />
            <div class="item-title">${item.title}</div>
            <div class="item-desc">${item.desc}</div>
            <div class="item-price">${item.price}</div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function createMenu() {
  return `
    <section class="section" id="menu">
      <h2 class="section-title">Especiales del Día</h2>
      <div class="menu-specials">
        ${menuSpecials.map(item => `
          <div class="menu-item">
            <img src="${item.img}" alt="${item.title}" />
            <div class="menu-item-details">
              <div class="menu-item-title">${item.title}</div>
              <div class="menu-item-desc">${item.desc}</div>
              <div class="menu-item-price">${item.price}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function createMethodology() {
  return `
    <section class="section" id="methodology">
      <h2 class="section-title">Nuestra Metodología</h2>
      <div class="methodology">
        ${methodology.map(step => `
          <div class="methodology-step">
            <span class="methodology-step-icon">${step.icon}</span>
            <div class="methodology-step-content">
              <div class="methodology-step-title">${step.title}</div>
              <div class="methodology-step-desc">${step.desc}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function createTestimonials() {
  return `
    <section class="section" id="testimonials">
      <h2 class="section-title">Testimonios</h2>
      <div class="testimonials">
        ${testimonials.map(t => `
          <div class="testimonial">
            <img class="testimonial-avatar" src="${t.avatar}" alt="${t.author}" />
            <div class="testimonial-content">
              <div class="testimonial-quote">"${t.quote}"</div>
              <div class="testimonial-author">- ${t.author}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function createHours() {
  return `
    <section class="section" id="hours">
      <h2 class="section-title">Horarios</h2>
      <div class="hours">
        ${hours.map(h => `
          <div class="hours-row">
            <span>${h.day}</span>
            <span>${h.time}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function createFooter() {
  return `
    <footer>
      <div class="footer-content">
        <img class="footer-logo" src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000755043561854468/Fresh-baked-bakery-logo-vector.jpg" alt="Freshly Baked Logo" />
        <div class="footer-socials">
          <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram"><svg width="24" height="24" fill="currentColor"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"/></svg></a>
          <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook"><svg width="24" height="24" fill="currentColor"><path d="M17 2.5A4.5 4.5 0 0 1 21.5 7v10A4.5 4.5 0 0 1 17 21.5h-10A4.5 4.5 0 0 1 2.5 17V7A4.5 4.5 0 0 1 7 2.5h10zm-2.25 4.25h-1.5c-.41 0-.75.34-.75.75v1.5h2.25l-.25 2H12.5v6h-2.25v-6H8.5v-2h1.75v-1.25A2.25 2.25 0 0 1 12.5 6.75h2.25v2z"/></svg></a>
          <a href="mailto:info@freshlybaked.com" aria-label="Email"><svg width="24" height="24" fill="currentColor"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13l8-6.99V6H4zm16 2.236l-7.447 6.5a1 1 0 0 1-1.106 0L4 8.236V18h16V8.236z"/></svg></a>
        </div>
        <div class="footer-copy">
          &copy; ${new Date().getFullYear()} Freshly Baked Bakeshop. Hecho con amor y masa madre.
        </div>
      </div>
    </footer>
  `;
}

function render() {
  document.getElementById("app").innerHTML = `
    ${createHeader()}
    ${createHero()}
    ${createStory()}
    ${createGallery()}
    ${createMenu()}
    ${createMethodology()}
    ${createTestimonials()}
    ${createHours()}
    ${createFooter()}
  `;
}

window.scrollToSection = scrollToSection;
render();
