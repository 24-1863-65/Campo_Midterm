
<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">

      <!-- Logo -->
      <a href="#home" class="nav-logo" @click="closeMenu">
        <img
          src="/images/ccs-logo.png"
          alt="College of Computer Studies"
        />

        <div class="logo-text">
          <span>COLLEGE OF</span>
          <strong>COMPUTER STUDIES</strong>
        </div>
      </a>

      <!-- Desktop and Mobile Navigation -->
      <nav
        class="nav-links"
        :class="{ mobileOpen: menuOpen }"
      >
        <a
          href="#home"
          :class="{ active: activeSection === 'home' }"
          @click="closeMenu"
        >
          Home
        </a>

        <a
          href="#programs"
          :class="{ active: activeSection === 'programs' }"
          @click="closeMenu"
        >
          Programs
        </a>

        <a
          href="#faculty"
          :class="{ active: activeSection === 'faculty' }"
          @click="closeMenu"
        >
          Faculty &amp; Staff
        </a>

        <a
          href="#partnerships"
          :class="{ active: activeSection === 'partnerships' }"
          @click="closeMenu"
        >
          Partnerships
        </a>
      </nav>

      <!-- Mobile Menu Toggle -->
      <button
        class="menu-toggle"
        type="button"
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('home')

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40

  const sections = [
    'home',
    'programs',
    'faculty',
    'partnerships'
  ]

  let currentSection = 'home'

  for (const section of sections) {
    const element = document.getElementById(section)

    if (!element) continue

    const rect = element.getBoundingClientRect()

    if (rect.top <= 180 && rect.bottom >= 180) {
      currentSection = section
      break
    }
  }

  activeSection.value = currentSection
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* NAVBAR */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 86px;
  z-index: 1000;

  background-color: #ffffff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);

  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}

.navbar.scrolled {
  background-color: #ffffff;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.12);
}

/* NAV CONTAINER */

.nav-container {
  width: min(1400px, 92%);
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* LOGO */

.nav-logo {
  display: flex;
  align-items: center;
  gap: 12px;

  position: relative;
  z-index: 1002;

  text-decoration: none;
  flex-shrink: 0;
}

.nav-logo img {
  width: 58px;
  height: 58px;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo-text span {
  font-size: 10px;
  color: #173c3c;
  letter-spacing: 2px;
}

.logo-text strong {
  font-size: 14px;
  color: #ffb21b;
  letter-spacing: 1px;
}

/* NAVIGATION LINKS */

.nav-links {
  display: flex;
  align-items: center;
  gap: 38px;

  position: relative;
  z-index: 1001;
}

.nav-links a {
  position: relative;
  display: inline-block;

  padding: 32px 0;

  color: #173c3c;
  text-decoration: none;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
  transition: color 0.3s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: #f5a900;
}

/* HOVER UNDERLINE */

.nav-links a::after {
  content: "";

  position: absolute;
  left: 0;
  bottom: 21px;

  width: 0;
  height: 3px;

  background-color: #ffb21b;

  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

/* MOBILE MENU BUTTON */

.menu-toggle {
  display: none;

  padding: 8px;
  border: none;
  background: transparent;

  cursor: pointer;

  position: relative;
  z-index: 1002;
}

.menu-toggle span {
  display: block;

  width: 28px;
  height: 3px;
  margin: 5px 0;

  background-color: #173c3c;
  border-radius: 2px;
}

/* TABLET */

@media (max-width: 1000px) {
  .nav-links {
    gap: 20px;
  }

  .nav-links a {
    font-size: 14px;
  }

  .logo-text {
    display: none;
  }
}

/* MOBILE */

@media (max-width: 768px) {
  .navbar {
    height: 75px;
  }

  .nav-logo img {
    width: 52px;
    height: 52px;
  }

  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 75px;
    left: 0;

    width: 100%;
    padding: 15px 25px;

    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;

    background-color: #ffffff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  .nav-links.mobileOpen {
    display: flex;
  }

  .nav-links a {
    display: block;
    width: 100%;
    padding: 16px 10px;

    color: #173c3c;
    text-align: center;
  }

  .nav-links a::after {
    bottom: 8px;
  }
}

/* ACCESSIBILITY */

.nav-links a:focus-visible,
.nav-logo:focus-visible,
.menu-toggle:focus-visible {
  outline: 2px solid #f5a900;
  outline-offset: 4px;
}
</style>
