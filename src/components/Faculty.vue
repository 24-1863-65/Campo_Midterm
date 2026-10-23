<template>
  <section id="faculty" class="faculty-section">

    <div class="section-heading">
      <p>THE PEOPLE BEHIND CCS</p>
      <h2>Faculty & Staff</h2>
      <div class="heading-line"></div>

      <span>
        Meet the dedicated educators and professionals who guide,
        mentor, and inspire the CCS community.
      </span>
    </div>

  
    <div class="department">

      <div class="department-heading">
        <span>01</span>
        <div>
          <p>DEPARTMENT</p>
          <h3>Computer Science</h3>
        </div>
      </div>

      <div class="faculty-grid">

        <article
          v-for="person in computerScience"
          :key="person.name"
          class="faculty-card"
        >
          <div class="faculty-image">
            <img
              :src="person.photo"
              :alt="person.name"
              @error="imageError"
            />
          </div>

          <div class="faculty-info">
            <span>{{ person.position }}</span>
            <h4>{{ person.name }}</h4>
            <p>{{ person.education }}</p>
          </div>
        </article>

      </div>
    </div>

  
    <div class="department">

      <div class="department-heading">
        <span>02</span>
        <div>
          <p>DEPARTMENT</p>
          <h3>Information Technology</h3>
        </div>
      </div>

      <div class="faculty-grid">

        <article
          v-for="person in informationTechnology"
          :key="person.name"
          class="faculty-card"
        >
          <div class="faculty-image">
            <img
              :src="person.photo"
              :alt="person.name"
              @error="imageError"
            />
          </div>

          <div class="faculty-info">
            <span>{{ person.position }}</span>
            <h4>{{ person.name }}</h4>
            <p>{{ person.education }}</p>
          </div>
        </article>

      </div>
    </div>

  
    <div class="department">

      <div class="department-heading">
        <span>03</span>
        <div>
          <p>DEPARTMENT</p>
          <h3>Digital Media & Interactive Arts</h3>
        </div>
      </div>

      <div class="faculty-grid">

        <article
          v-for="person in digitalMedia"
          :key="person.name"
          class="faculty-card"
        >
          <div class="faculty-image">
            <img
              :src="person.photo"
              :alt="person.name"
              @error="imageError"
            />
          </div>

          <div class="faculty-info">
            <span>{{ person.position }}</span>
            <h4>{{ person.name }}</h4>
            <p>{{ person.education }}</p>
          </div>
        </article>

      </div>
    </div>

  
    <div class="department">

      <div class="department-heading">
        <span>04</span>
        <div>
          <p>DEPARTMENT</p>
          <h3>Library & Information Science</h3>
        </div>
      </div>

      <div class="faculty-grid">

        <article
          v-for="person in libraryScience"
          :key="person.name"
          class="faculty-card"
        >
          <div class="faculty-image">
            <img
              :src="person.photo"
              :alt="person.name"
              @error="imageError"
            />
          </div>

          <div class="faculty-info">
            <span>{{ person.position }}</span>
            <h4>{{ person.name }}</h4>
            <p>{{ person.education }}</p>
          </div>
        </article>

      </div>
    </div>

  </section>
</template>

<script setup lang="ts">

interface FacultyMember {
  name: string
  position: string
  education: string
  photo: string
}


const computerScience: FacultyMember[] = [
  {
    name: 'Leo Paulo B. Beldia',
    position: 'Faculty Member',
    education: 'Highest Educational Attainment',
    photo: '/images/q.jpg'
  },
  {
    name: 'Antonio M. Montano',
    position: 'Faculty Member',
    education: 'Highest Educational Attainment',
    photo: '/images/w.jpg'
  }
]

const informationTechnology: FacultyMember[] = [
  {
    name: 'A.M.P Latter P. Taasan',
    position: 'Faculty Member',
    education: 'Highest Educational Attainment',
    photo: '/images/e.jpg'
  },
  {
    name: 'Chriselda Elaine Ador',
    position: 'Faculty Member',
    education: 'Highest Educational Attainment',
    photo: '/images/Chriselda.jpg'
  }
]

const digitalMedia: FacultyMember[] = [
  {
    name: 'Chrislyn C. Castano',
    position: 'Faculty Member',
    education: 'Highest Educational Attainment',
    photo: '/images/t.jpg'
  },
  {
    name: 'Rodolfo C. Eregia Jr.',
    position: 'Faculty Member',
    education: 'Highest Educational Attainment',
    photo: '/images/y.jpg'
  }
]

const libraryScience: FacultyMember[] = [
  {
    name: 'Rose Leah Joy A. Ojacastro',
    position: 'Faculty Member',
    education: 'Highest Educational Attainment',
    photo: '/images/Rose.jpg'
  },
  {
    name: 'Donna May Rivera',
    position: 'Faculty Member',
    education: 'Highest Educational Attainment',
    photo: '/images/donna.jpg'
  }
]

const imageError = (event: Event) => {
  const image = event.target as HTMLImageElement

  image.style.display = 'none'
}

</script>

<style scoped>
.faculty-section {
  padding: 120px 5%;

  background: #f8f5f6;
}

.section-heading {
  max-width: 850px;

  margin: 0 auto 80px;

  text-align: center;
}

.section-heading p {
  color: #f5a900;

  font-size: 14px;
  font-weight: 800;

  letter-spacing: 3px;
}

.section-heading h2 {
  margin: 10px 0;

  color: #123b3c;

  font-size: clamp(38px, 5vw, 58px);
}

.heading-line {
  width: 60px;
  height: 4px;

  margin: 20px auto;

  background: #f5a900;
}

.section-heading span {
  color: #777;

  font-size: 17px;
  line-height: 1.8;
}

.department {
  width: min(1400px, 100%);

  margin: 0 auto 90px;
}

.department-heading {
  display: flex;
  align-items: center;

  gap: 20px;

  margin-bottom: 35px;
}

.department-heading > span {
  color: #f5a900;

  font-size: 35px;
  font-weight: 900;
}

.department-heading p {
  margin: 0;

  color: #999;

  font-size: 11px;
  letter-spacing: 3px;
  font-weight: 700;
}

.department-heading h3 {
  margin: 5px 0 0;

  color: #123b3c;

  font-size: 30px;
}

.faculty-grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 25px;
}

.faculty-card {
  overflow: hidden;

  background: #f8f8f6;

  border-radius: 6px;

  transition: 0.3s ease;
}

.faculty-card:hover {
  transform: translateY(-8px);

  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12);
}

.faculty-image {
  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  background:
    linear-gradient(
      135deg,
      #b0bbbb,
      #edf1f1
    );
}

.faculty-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.faculty-info {
  padding: 25px;
}

.faculty-info span {
  color: #f5a900;

  font-size: 11px;

  font-weight: 800;

  text-transform: uppercase;

  letter-spacing: 1px;
}

.faculty-info h4 {
  margin: 8px 0;

  color: #123b3c;

  font-size: 20px;
}

.faculty-info p {
  margin: 0;

  color: #888;

  font-size: 14px;

  line-height: 1.6;
}

@media (max-width: 1100px) {
  .faculty-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .faculty-section {
    padding: 80px 6%;
  }

  .faculty-grid {
    grid-template-columns: 1fr;
  }

  .faculty-image {
    height: 350px;
  }

  .department-heading h3 {
    font-size: 23px;
  }
}
</style>