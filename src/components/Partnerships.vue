
<template>
  <section id="partnerships" class="partnership-section">
    <!-- Section Heading -->
    <div class="section-heading">
      <p class="eyebrow">CONNECT</p>

      <h2>Our Partners and Memberships</h2>

      <span>Driving technology for education</span>
    </div>

    <!-- Partner Logos -->
    <div class="partners-container">
      <article
        v-for="partner in partners"
        :key="partner.name"
        class="partner-item"
      >
        <div class="partner-logo">
          <img
            :src="partner.logo"
            :alt="partner.name"
            @error="imageError"
          />
        </div>

        <h3>{{ partner.name }}</h3>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Partner {
  name: string
  logo: string
}

const partners: Partner[] = [
  {
    name: 'Oracle Academy',
    logo: '/images/oracle.png'
  },
  {
    name: 'Cisco Networking Academy',
    logo: '/images/cisco.png'
  },
  {
    name: 'Acer Academy',
    logo: '/images/acer.jpg'
  },
  {
    name: 'Huawei ICT Academy',
    logo: '/images/huawei.jpg'
  }
]

const imageError = (event: Event) => {
  const image = event.target as HTMLImageElement

  console.error('Unable to load partner logo:', image.src)
}
</script>

<style scoped>
/* Partnerships Section */

.partnership-section {
  width: 100%;
  padding: 90px 5% 65px;
  background: #ffffff;
  color: #102a43;
}

/* Heading */

.section-heading {
  width: 100%;
  margin: 0 auto 75px;
  text-align: center;
}

.eyebrow {
  margin: 0 0 10px;
  color: #102a43;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
}

.section-heading h2 {
  margin: 0;
  color: #7ee785;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(30px, 4vw, 42px);
  font-weight: 700;
  line-height: 1.25;
}

.section-heading > span {
  display: block;
  margin-top: 5px;
  color: #b8b8b8;
  font-size: 12px;
  line-height: 1.6;
}

/* Logo Layout */

.partners-container {
  width: min(1000px, 100%);
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
  justify-items: center;
  gap: 35px;
}

.partner-item {
  width: 100%;
  min-width: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
}

/* Logo Size */

.partner-logo {
  width: 170px;
  height: 115px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-logo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.partner-item:hover .partner-logo img {
  transform: scale(1.06);
}

/* Accessible names below logos */

.partner-item h3 {
  margin: 12px 0 0;
  color: #526579;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;
}

/* Tablet */

@media (max-width: 900px) {
  .partnership-section {
    padding: 75px 5%;
  }

  .section-heading {
    margin-bottom: 50px;
  }

  .partners-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 25px;
    row-gap: 35px;
  }

  .partner-logo {
    width: 160px;
    height: 110px;
  }
}

/* Mobile */

@media (max-width: 500px) {
  .partnership-section {
    padding: 65px 6%;
  }

  .section-heading {
    margin-bottom: 40px;
  }

  .section-heading h2 {
    font-size: 30px;
  }

  .partners-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px 15px;
  }

  .partner-logo {
    width: 100%;
    max-width: 140px;
    height: 95px;
  }

  .partner-item h3 {
    font-size: 12px;
  }
}
</style>
