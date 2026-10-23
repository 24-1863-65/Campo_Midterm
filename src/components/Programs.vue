
<template>
  <section id="programs" class="programs-section">
    <div class="section-heading">
      <p>ACADEMIC PROGRAMS</p>

      <h2>Programs Offered</h2>

      <div class="heading-line"></div>

      <span>
        Explore the academic programs offered by the College of Computer
        Studies and discover opportunities to build your future in technology.
      </span>
    </div>

    <div class="programs-container">
      <article
        v-for="program in programs"
        :key="program.shortName"
        class="program-card"
      >
        <div class="program-logo">
          <img
            :src="program.logo"
            :alt="program.shortName + ' logo'"
            @error="imageError"
          />
        </div>

        <span class="program-code">
          {{ program.shortName }}
        </span>

        <h3>{{ program.name }}</h3>

        <p>{{ program.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Program {
  name: string
  shortName: string
  description: string
  logo: string
}

const programs: Program[] = [
  {
    name: 'Information Technology',
    shortName: 'BSIT',
    description:
      'The Bachelor of Science in Information Technology program develops practical skills in software development, information systems, networking, databases, and modern technologies.',
    logo: '/images/itso.jpg'
  },
  {
    name: 'Computer Science',
    shortName: 'BSCS',
    description:
      'The Bachelor of Science in Computer Science program focuses on computing concepts, algorithms, programming, software development, and computer systems.',
    logo: '/images/css.jpg'
  },
  {
    name: 'Digital Media and Interactive Arts',
    shortName: 'BSDMIA',
    description:
      'The Bachelor of Science in Digital Media and Interactive Arts program combines creativity and technology through digital media, multimedia, interactive design, and emerging technologies.',
    logo: '/images/dmia.jpg'
  },
  {
    name: 'Library and Information Science',
    shortName: 'BLIS',
    description:
      'The Bachelor of Library and Information Science program prepares students in information organization, management, research, digital resources, and library services.',
    logo: '/images/lisso.jpg'
  }
]

const imageError = (event: Event) => {
  const image = event.target as HTMLImageElement

  console.error('Could not load program logo:', image.src)
  image.style.visibility = 'hidden'
}
</script>

<style scoped>
.programs-section {
  padding: 120px 5%;
  background: #ffffff;
}

.section-heading {
  max-width: 850px;
  margin: 0 auto 70px;
  text-align: center;
}

.section-heading > p {
  color: #0251b0;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 3px;
}

.section-heading h2 {
  margin: 10px 0;
  color: #102a43;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(38px, 5vw, 58px);
  font-weight: 800;
}

.heading-line {
  width: 60px;
  height: 4px;
  margin: 20px auto;
  background: #d1ff42;
  border-radius: 4px;
}

.section-heading > span {
  display: block;
  color: #526579;
  font-size: 17px;
  line-height: 1.8;
}

.programs-container {
  width: min(1300px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 25px;
}

.program-card {
  min-width: 0;
  min-height: 450px;
  padding: 30px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background: #ffffff;
  border: 1px solid #d9e2ec;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(16, 42, 67, 0.07);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.program-card:hover {
  transform: translateY(-8px);
  border-color: #0251b0;
  box-shadow: 0 18px 40px rgba(2, 81, 176, 0.15);
}

/* Program logos */

.program-logo {
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.program-logo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Program code */

.program-code {
  margin-bottom: 10px;
  color: #0251b0;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

/* Program title */

.program-card h3 {
  min-height: 60px;
  margin: 0 0 15px;
  color: #102a43;
  font-family: 'Montserrat', sans-serif;
  font-size: 21px;
  line-height: 1.35;
  font-weight: 700;
}

/* Description */

.program-card > p {
  margin: 0;
  color: #526579;
  font-size: 13px;
  line-height: 1.8;
}

/* Tablet */

@media (max-width: 1050px) {
  .programs-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Mobile */

@media (max-width: 650px) {
  .programs-section {
    padding: 80px 6%;
  }

  .section-heading {
    margin-bottom: 45px;
  }

  .section-heading > span {
    font-size: 15px;
  }

  .programs-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .program-card {
    min-height: auto;
    padding: 30px 25px;
  }

  .program-logo {
    width: 140px;
    height: 140px;
  }

  .program-card h3 {
    min-height: auto;
  }
}
</style>
