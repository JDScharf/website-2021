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
          Civic Technologist
        </h2>
        <br />
      </v-col>

      <v-col class="text-center">
        <v-card max-width="350" id="rounded-card">
          <v-img
            :src="require('../assets/jason.jpg')"
            class="my-3"
            contain
            height="100%"
            max-height="300px"
          />
        </v-card>
      </v-col>

      <v-col class="text-right">
        <br />
        <br />

        <h3 class="subheading font-weight-regular">
          I am a hard worker, who enjoys learning and facing new challenges. I
          am skilled at managing multiple projects, meeting deadlines, while
          always striving to provide excellent service. Through college courses
          and volunteer work, I have been improving my skills in data analysis
          and software development.
        </h3>
        <br />
        <h6 class="heading-4">
          <a href="mailto:jasonscharf3@gmail.com"> jasonscharf3@gmail.com</a>
          |
          <a href="sms:3154474501">
            (315) 447-4501
          </a>
        </h6>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />

    <v-row>
      <v-col>
        <h2 class="heading-2">Projects</h2>
        <br />

        <h3 class="heading-3">
          Stonethrowers of Syracuse Video Game — C#/Unity3D Project
        </h3>
        <br />

        <p>
          &bull; Created a functioning video game with Unity’s video game engine
          <br />
          &bull; Code can be found at:
          <a href="www.github.com/JDScharf/Stonethrowers" target="_blank"
            >github.com/JDScharf/Stonethrowers</a
          >
        </p>
        <br />
      </v-col>
    </v-row>

    <div class="game-container">
      <iframe
        src="https://i.simmer.io/@JDScharf/stonethrowers-of-syracuse"
        style="position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;"
      ></iframe>
    </div>
    <v-row>
      <v-col>
        <p>
          <b>Controls:</b> Hold the <u> space bar </u> to increase the force of
          your throw.<br />
          Use the &#8593; and &#8595; arrow to change the direction your rock
          will be thrown. <br />
          The goal is to break the <i class="fas fa-traffic-light"></i> and
          bring glory and honor to Ireland!
        </p>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />

    <v-row>
      <v-col>
        <h3 class="heading-3">
          Salt City Security - Vue.JS App
        </h3>
        <br />

        <p>
          &bull; Created an App to register Users, authenticate their login
          information using a JWT bearer token, and access alarm signal data
          from a mock API. <br />
          &bull; App can be tested at:
          <a
            href="https://signal-vuetify.herokuapp.com/RegisterUser"
            target="_blank"
            >signal-vuetify.herokuapp.com</a
          >
          <br />
          &bull; Code can be found at:
          <a href="www.github.com/JDScharf/vue-app" target="_blank"
            >github.com/JDScharf/vue-app</a
          >
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <a
          href="https://signal-vuetify.herokuapp.com/RegisterUser"
          target="_blank"
          ><v-img
            :src="require('../assets/Salt-City.png')"
            class="my-3"
            contain
            width="100%"
        /></a>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />

    <v-row>
      <v-col>
        <h3 class="heading-3">
          Police Officer Complaint Chatbot — Twilio & Javascript
        </h3>
        <br />
        <p>
          &bull; Helped develop a beta chatbot that would assist individuals who
          wanted to report inappropriate officer behavior via text. <br />

          &bull; Code can be found at:
          <a
            href="https://github.com/code-for-syracuse/CitizensReviewBoardChatBot"
            target="_blank"
            >github.com/code-for-syracuse/CitizensReviewBoardChatBot</a
          ><br />
          &bull; Bot can be tested by texting “Hi” to (315) 284-8090
        </p>
        <br />

        <div class="text-button">
          <v-btn
            href="sms:3152848090?&body=Hi"
            depressed
            elevation="10"
            color="#7EB4B3"
            raised
            rounded
            dark
          >
            Test Chatbot
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-img
          :src="require('../assets/android-phone.png')"
          class="my-3"
          contain
          width="100%"
          max-height="750"
        />
      </v-col>
    </v-row>
    <br />
    <br />
    <br />

    <v-row>
      <v-col>
        <h3 class="heading-3">
          Data Visualization Projects - Tableau & R Programming
        </h3>
        <br />
        <p>
          &bull; Created data visualization and analysis projects using publicly
          available data sources. <br />

          &bull; My Tableau public profile can be viewed here:
          <a
            href="https://public.tableau.com/profile/jason.scharf#!/"
            target="_blank"
          >
            Tableau Profile.</a
          >
        </p>
        <br />

        <div class="text-button">
          <!--  <router-link to="/about">Data Visualization</router-link> -->
          <v-btn
            router-link
            to="/about"
            depressed
            elevation="10"
            color="#7EB4B3"
            raised
            rounded
            dark
          >
            Browse Gallery
          </v-btn>
        </div>
        <br />
        <v-img
          :src="require('../assets/skateboard.png')"
          class="my-3"
          contain
          width="100%"
          max-height="750px"
        />
      </v-col>
    </v-row>
    <br />
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
          &bull; Javascript <br />
          &bull; Vue.JS <br />
          &bull; HTML/CSS <br />
          &bull; Git/GitHub <br />
        </h5>
      </v-col>

      <v-col>
        <h4 class="heading-4">Intermediate</h4>
        <br />
        <h5 class="heading-5">
          &bull; R <br />
          &bull; Tableau <br />
          &bull; Twilio <br />
          &bull; Figma <br />
          &bull; C#/Unity3D <br />
          &bull; Excel <br />
        </h5>
      </v-col>

      <v-col>
        <h4 class="heading-4">Basic</h4>
        <br />
        <h5 class="heading-5">
          &bull; SQL <br />
          &bull; Postman <br />
          &bull; C++ <br />
          &bull; Heroku <br />
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
          Onondaga County Dept. of Child & Family Services, Syracuse, NY —
          Caseworker
        </h3>
        <h5 class="heading-5">
          February 2012 - Present
        </h5>
        <br />

        <p>
          &bull; Helping ensure safety and permanency in foster care, I have
          reached 99% successful monthly contacts, surpassing federal standards
          of 95%.
        </p>
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
          &bull; Helping to organize and guide a team of software and web
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
          Spring 2020 - Present
        </h5>
        <br />
        <p>
          &bull; Coursework includes Data Wrangling & Visualization (Learning R
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
  </v-container>
</template>

<script></script>

<style>
#rounded-card {
  border-radius: 50%;
  min-height: 230px;
  min-width: 230px;
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
  color: #7eb4b3;
  font-size: 35px;
}

.heading-2 {
  color: #7eb4b3;
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
  color: #7eb4b3;
}
.game-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 35px;
  height: 0;
  overflow: hidden;
}
</style>
