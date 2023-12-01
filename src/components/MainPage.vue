<template>
  <v-container>
    <v-row>
      <v-col class="text-left">
        <br />
        <br />
        <h1 class="heading-name">
          Jason Scharf
        </h1>
        <br />
        <h2 class="heading-job-title">
          Data Program Manager
        </h2>
        <br />
      </v-col>

      <v-col id="middle-column"
      :align-self="center">
        <v-card id="rounded-card" class="justify-center" max-height="350" 
        min-height="350">
          <v-img
            :src="require('../assets/Jason-WS.jpg')"
            class="rounded-img"
            max-height="350"
            max-width="350"
          />
          </v-card>
      </v-col>

      <v-col class="text-right">
        <h3 class="subheading font-weight-regular">
         I am a hard worker, who enjoys learning and facing new challenges.  I am skilled at managing multiple projects, meeting deadlines, while always striving to provide excellent customer service to clients and stakeholders.  I would love to help your organization increase their ability to obtain, manage, and get insights from your data.
        </h3>
        <br />
        <h4 class="heading-4">e: 
          <a href="mailto:jasonscharf3@gmail.com">jasonscharf3@gmail.com</a>
        <br />
        <br />
        ph: <a href="sms:3154474501">
          (315) 447-4501
          </a>
        </h4>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />

    <v-row>
      <v-col>
        <h2 class="heading-2">Services Offered</h2>
      </v-col>
    </v-row>
    <br />

    <v-row>
      <v-col> 
  <v-img
          :src="require('../assets/icons/app-development.png')"
          alt="Image of a computer icon"
          class="my-3"
          contain
          width="100%"
          max-height="250px"
        />
        <br />
        <h3 class="heading-3">
      Web Development
    </h3>
    <br />
    <div>
    <button>
        <div class="text-button">
          <v-btn
            to="/web"
            depressed
            elevation="10"
            color="#2c8591"
            raised
            rounded
            dark
          >
            View Web Projects
          </v-btn>
        </div>
        </button>
        </div>
</v-col> 


<v-col>
  <v-img
          :src="require('../assets/icons/data-management.png')"
          alt="Image of a computer icon"
          class="my-3"
          contain
          width="100%"
          max-height="250px"
        />
        <br />
        <h3 class="heading-3">
      Data Management
    </h3>

    <br />
    <button>
        <div class="text-button">
          <v-btn
            to="/data-projects"
            depressed
            elevation="10"
            color="#2c8591"
            raised
            rounded
            dark
          >
            View Data Projects
          </v-btn>
        </div>
        </button>
</v-col>

<v-col>
  <v-img
          :src="require('../assets/icons/data-viz.png')"
          alt="Image of a computer icon"
          class="my-3"
          contain
          width="100%"
          max-height="250px"
        />
        <br />
        <h3 class="heading-3">
      Data Visualizations
    </h3>

    <br />
    <button>
        <div class="text-button">
          <v-btn
            to="/data-viz"
            depressed
            elevation="10"
            color="#2c8591"
            raised
            rounded
            dark
          >
            View Data Visualizations
          </v-btn>
        </div>
        </button>
  </v-col>

  <v-col>
  <v-img
          :src="require('../assets/icons/map-256.png')"
          alt="Image of a computer icon"
          class="my-3"
          contain
          width="100%"
          max-height="250px"
        />
        <br />
        <h3 class="heading-3">
      Geospatial Analysis
    </h3>

    <br />
    <button>
        <div class="text-button">
          <v-btn
            to="/data-viz"
            depressed
            elevation="10"
            color="#2c8591"
            raised
            rounded
            dark
          >
            View GIS Projects
          </v-btn>
        </div>
        </button>
  </v-col>
</v-row>

<br />
<br />
  
    <v-row>
      <v-col>
        <h2 class="heading-2">Development Skills</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h4 class="heading-4">Proficient</h4>
        <br />
        <h5 class="heading-5">
          &bull; ArcGIS Pro <br />
          &bull; Python (Pandas and Arcpy Libraries) <br />
          &bull; Javascript <br />
          &bull; Vue.JS <br />
          &bull; Excel <br />
          &bull; HTML/CSS <br />
          &bull; Git/GitHub <br />
          &bull; Figma <br />
        </h5>
      </v-col>

      <v-col>
        <h4 class="heading-4">Intermediate</h4>
        <br />
        <h5 class="heading-5">
          &bull; SQL <br />
          &bull; R <br />
          &bull; Postman<br />
          &bull; Tableau <br />
          &bull; Twilio <br />
          &bull; C#/Unity3D <br />
        </h5>
      </v-col>

      <v-col>
        <h4 class="heading-4">Basic</h4>
        <br />
        <h5 class="heading-5">
          &bull; ChatGPT API <br />
          &bull; C++ <br />
          &bull; Netlify <br />
          &bull; Wordpress <br />
          &bull; Squarespace <br />
          &bull; Wix <br />
        </h5>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />

    <v-row>
      <v-col>
        <h2 class="heading-2">Experience</h2>
        <br />

        <h3 class="heading-3">
          City of Syracuse API Team — Data Program Manager
        </h3>
        <h5 class="heading-5">
          January 2022 - Present
        </h5>
        <br />

        <p>
          &bull; Helping to manage <a href="https://data.syr.gov/"> Open Data Syracuse</a>, the City's Open Data Portal website.
        </p>
        <p>
          &bull; Creating Maps and Data Visualizations in ArcGIS and Tableau with public data.</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3 class="heading-3">
          Hack Upstate - Careers in Code Bootcamp, Syracuse, NY — Student
          Success Coordinator
        </h3>
        <h5 class="heading-5">
          February 2019 - Present
        </h5>
        <br />
        <p>
          &bull; Made 109 successful check ins with students of
          HTML/CSS/Javascript bootcamp, helping to achieve a 92% rate of
          successful student completion.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3 class="heading-3">
          Kirkwork Software Development, Syracuse, NY —
          Software Developer
        </h3>
        <h5 class="heading-5">
          January 2021 - November 2021 (Part-time and contract employment)
        </h5>
        <br />

        <p>
          &bull; Assisted in adding features to an interactive desktop software application using Vue.js, RESTful API’s, and Postman for API testing.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3 class="heading-3">
          Onondaga County Dept. of Child & Family Services, Syracuse, NY —
          Caseworker
        </h3>
        <h5 class="heading-5">
          February 2012 - January 2022
        </h5>
        <br />

        <p>
          &bull; Helped ensure safety and permanency in foster care, I
          reached 99% successful monthly contacts, surpassing federal standards
          of 95%.
        </p>
      </v-col>
    </v-row>

    <br />
    <br />
    <br />

    <v-row>
      <v-col>
        <h2 class="heading-2">Volunteer Experience</h2>
        <br />

        <h3 class="heading-3">
          Code for Syracuse — Brigade Co-Lead
        </h3>
        <h5 class="heading-5">
          July 2019 - December 2020
        </h5>
        <br />

        <p>
          &bull; Helped to organize and guide a team of software and web
          developers to create website based projects for local non-profit
          organizations.<br />
          &bull; Collaborated with New York City and Buffalo, NY brigades to do
          a user accessibility audit of the NYS Food Stamps Application.
        </p>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />

    <v-row>
      <v-col>
        <h2 class="heading-2">Education</h2>
        <br />

        <h3 class="heading-3">
          Eastern Gateway Community College
        </h3>
        <h5 class="heading-5">
          2020
        </h5>
        <br />
        <p>
          &bull; Coursework included Data Wrangling & Visualization (R
          “tidyverse” and Python “pandas”) and Statistical Programming.
          <br />
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3 class="heading-3">
          Roberts Wesleyan College, BA Religion and Philosophy
        </h3>
        <br />

        <p>
          &bull; Coursework included Logic, Calculus, Physics, Writing, and
          Social Work classes.
        </p>
      </v-col>
    </v-row>
    <br />

    <button>
        <div class="text-button">
          <v-btn
            to="/contact"
            depressed
            elevation="10"
            color="#2c8591"
            raised
            rounded
            dark
          >
            Schedule a Consult
          </v-btn>
        </div>
        </button>
        <br />
        <br />
        <br />

    <router-view />
  </v-container>

  <!-- <widgetbot
    server="662120704107479063"
    channel="662120704564789272"
    width="800"
    height="600"
></widgetbot> -->
</template>




<script>
//   export default {
//     name: 'MainPage',
//       data: () => ({
//         myVid: "",
//       }),
//       methods: {  
//         // 3rd Try
//         muteGame() {
//           [].slice.call(document.querySelectorAll('audio')).forEach(function(audio) {
//     audio.muted = true;
// });
//           // this.myVid=document.getElementById("gameFrame");
//           // this.myVid.muted = true;
//           // this.myVid.pause();
//         },
//   // Mute a singular HTML5 element
//         muteMe(elem) {
//             elem.muted = true;
//             elem.pause();
//         },
// // Try to mute all video and audio elements on the page
//         mutePage() {
//             var elems = document.querySelectorAll("video, audio");
//             [].forEach.call(elems, function(elem) { this.muteMe(elem); });
//         },
//           // muteSound() {
//           //   localStorage.mute = 1 
//           //   // - Number(localStorage.mute);
//           //   // this will result in `.mute` being either '0' or '1' (strings)
//           //   // perform mute operation too, if a sound is currently playing, if you want
//           // }
//       }
//   }
</script>

<style>
#rounded-card {
  border-radius: 50%; 
}
#middle-column {
  justify-content: center;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
      box-shadow: none
}
.text-right {
  padding-top: 35px;
}
.boxed {
  border: 1px solid rgb(1, 2, 1);
  max-width: 100px;
}

.heading-name {
  color: #2c8591;
  font-size: 50px;
}

.heading-job-title {
  color: #645e71;
  font-size: 35px;
}

.heading-2 {
  color: #2c8591;
  font-size: 40px;
}

.heading-3 {
  color: #645e71;
  font-size: 30px;
}

.heading-4 {
  color: #645e71;
  font-size: 25px;
}
.heading-5 {
  color: #645e71;
  font-size: 20px;
}
.text-button {
  color: #2c8591;
}
/* .game-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 35px;
  height: 0;
  overflow: hidden;
} */
</style>
