
<template>
  <section id="home" class="hero">
    <div class="hero-overlay"></div>

    <div class="hero-container">
      <!-- Hero Text -->
      <div class="hero-content">
        <p class="hero-small">
          COLLEGE OF COMPUTER STUDIES
        </p>

        <h1>
          Innovate Today.<br />
          <span>Shape Tomorrow.</span>
        </h1>

        <p class="hero-tagline">
          Different People, <strong>One Goal.</strong>
        </p>

        <p class="hero-description">
          Discover the programs, people, and opportunities
          shaping the future of technology at CCS.
        </p>

        <a href="#programs" class="hero-button">
          Explore Our Programs
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <!-- CCS Logo -->
      <div class="hero-logo">
        <img
          src="/images/ccs-logo.png"
          alt="College of Computer Studies Logo"
        />
      </div>
    </div>

    <!-- Scroll Indicator -->
    <a href="#programs" class="hero-scroll" aria-label="Explore programs">
      <span>SCROLL TO EXPLORE</span>
      <div class="scroll-line"></div>
    </a>
  </section>
</template>

<style scoped>
/* =========================
   HERO SECTION
========================= */

.hero {
  position: relative;
  min-height: 100vh;
  padding: 86px 0 55px;
  overflow: hidden;

  display: flex;
  align-items: center;

  background: linear-gradient(
    110deg,
    #102a43 0%,
    #0251b0 48%,
    #073b79 100%
  );
}

/* Background Image */

.hero::before {
  content: "";
  position: absolute;
  inset: 0;

  background-image: url("/images/hero-bg.jpg");
  background-size: cover;
  background-position: center right;

  opacity: 0.3;
}

/* Blue Overlay */

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;

  background: linear-gradient(
    90deg,
    rgba(16, 42, 67, 0.94) 0%,
    rgba(2, 81, 176, 0.72) 55%,
    rgba(16, 42, 67, 0.48) 100%
  );
}

/* Main Layout */

.hero-container {
  position: relative;
  z-index: 2;

  width: min(1300px, 90%);
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
}

/* =========================
   HERO TEXT
========================= */

.hero-content {
  flex: 1;
  max-width: 680px;
  padding: 35px 0;
}

.hero-small {
  margin: 0 0 22px;

  color: #d1ff42;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  line-height: 1.7;
}

/* Main Heading */

.hero h1 {
  margin: 0;

  color: #ffffff;

  font-family: 'Montserrat', sans-serif;
  font-size: clamp(38px, 4.5vw, 64px);
  line-height: 1.12;

  font-weight: 800;
  letter-spacing: -1.8px;
}

.hero h1 span {
  color: #d1ff42;
}

/* Tagline */

.hero-tagline {
  margin: 25px 0 0;

  color: #ffffff;

  font-size: clamp(21px, 2.2vw, 29px);
  line-height: 1.5;
}

.hero-tagline strong {
  color: #d1ff42;
  font-weight: 800;
}

/* Description */

.hero-description {
  max-width: 540px;
  margin: 16px 0 0;

  color: #dce6f0;

  font-size: 16px;
  line-height: 1.9;
}

/* =========================
   HERO BUTTON
========================= */

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  margin-top: 30px;
  padding: 15px 26px;

  border: 2px solid #d1ff42;
  border-radius: 5px;

  background: #d1ff42;
  color: #102a43;

  text-decoration: none;

  font-size: 15px;
  font-weight: 700;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.hero-button span {
  font-size: 20px;
  transition: transform 0.3s ease;
}

.hero-button:hover {
  background: #ffffff;
  border-color: #ffffff;
  color: #0251b0;

  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

.hero-button:hover span {
  transform: translateX(4px);
}

/* =========================
   CCS LOGO
========================= */

.hero-logo {
  flex: 0 1 420px;
  width: 100%;
  max-width: 420px;
  aspect-ratio: 1;

  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-logo img {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: contain;

  filter: drop-shadow(
    0 15px 35px rgba(0, 0, 0, 0.3)
  );
}

/* =========================
   SCROLL INDICATOR
========================= */

.hero-scroll {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  color: #ffffff;
  text-decoration: none;
}

.hero-scroll span {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 2px;
  opacity: 0.85;
}

.scroll-line {
  width: 2px;
  height: 24px;

  background: #d1ff42;
}

/* =========================
   TABLET RESPONSIVE
========================= */

@media (max-width: 900px) {
  .hero {
    min-height: 90vh;
    padding-top: 100px;
    padding-bottom: 75px;
  }

  .hero-container {
    justify-content: center;
  }

  .hero-content {
    max-width: 680px;
    text-align: center;
  }

  .hero h1 {
    font-size: clamp(40px, 6.5vw, 58px);
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-logo {
    display: none;
  }
}

/* =========================
   MOBILE RESPONSIVE
========================= */

@media (max-width: 500px) {
  .hero {
    min-height: 100svh;
    padding: 100px 0 75px;
  }

  .hero-container {
    width: 88%;
  }

  .hero-content {
    padding: 20px 0;
  }

  .hero-small {
    margin-bottom: 18px;
    font-size: 10px;
    letter-spacing: 2px;
  }

  .hero h1 {
    font-size: clamp(36px, 10vw, 46px);
    line-height: 1.12;
    letter-spacing: -1.2px;
  }

  .hero-tagline {
    margin-top: 20px;
    font-size: 21px;
  }

  .hero-description {
    font-size: 14px;
    line-height: 1.8;
  }

  .hero-button {
    margin-top: 25px;
    padding: 14px 20px;
    font-size: 14px;
  }

  .hero-scroll {
    bottom: 12px;
  }
}
</style>
