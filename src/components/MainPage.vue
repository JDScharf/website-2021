<template>
  <v-container>
    <v-row class="text-left">
      <v-col class="text-left">
        <h1 class="text-left">
          Jason Scharf
        </h1>
        <br />
        <br />

        <h3 class="display1 font-weight-bold">
          Civic Technologist
          <br />
          <br />
        </h3>

        <h4 class="display1 font-weight-bold">
          jasonscharf3@gmail.com | (315) 447-4501
          <br />
          <br />
        </h4>

        <p class="subheading font-weight-regular">
          I am a hard worker, who enjoys learning and facing new challenges. I
          am skilled at managing multiple projects, meeting deadlines, while
          always striving to provide excellent service. Through college courses
          and volunteer work, I have been improving my skills in data analysis
          and software development.
        </p>
      </v-col>

      <v-col>
        <v-card max-width="350" id="rounded-card">
          <v-img
            :src="require('../assets/jason.jpg')"
            class="my-3"
            contain
            height="400"
          />
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3 class="display1 font-weight-bold">Experience</h3>
        <br />
        <br />

        <h4 class="display1 font-weight-bold">
          Onondaga County Dept. of Child & Family Services, Syracuse, NY —
          Caseworker
        </h4>
        <h5>
          February 2012 - Present <br />
          <br />
        </h5>
        <p>
          &bull; Helping ensure safety and permanency in foster care, I have
          reached 99% successful monthly contacts, surpassing federal standards
          of 95%.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h4 class="display1 font-weight-bold">
          Hack Upsate - Caereers in Code Bootcamp, Syracuse, NY — Student
          Success Coordinator
        </h4>
        <h5>
          February 2019 - Present
          <br />
          <br />
        </h5>

        <p>
          &bull; Made 109 successful check ins with students of
          HTML/CSS/Javascript bootcamp, helping to achieve a 92% rate of
          successful student completion.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3 class="display1 font-weight-bold">Education</h3>
        <br />
        <br />

        <h4 class="display1 font-weight-bold">
          Easter Gateway Community College
        </h4>
        <h5>
          Spring 2020 - Present <br />
          <br />
        </h5>
        <p>
          &bull; Coursework includes Data Wrangling & Visualization (Learning R
          “tidyverse” and Python “pandas”) and Statistical Programming.
          <br />
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h4 class="display1 font-weight-bold">
          Roberts Wesleyan College, BA Religion and Philosophy
        </h4>

        <p>
          &bull; Coursework included Logic, Calculus, Physics, Writing, and
          Social Work classes.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3 class="display1 font-weight-bold">Projects</h3>
        <br />
        <br />

        <h4 class="display1 font-weight-bold">
          Stonethrowers of Syracuse Video Game — C#/Unity3D Project
          <br />
          <br />
        </h4>

        <p>
          &bull; Created a functioning video game with Unity’s video game engine
          <br />
          &bull; Code can be found at:
          <a href="www.github.com/JDScharf/Stonethrowers"
            >github.com/JDScharf/Stonethrowers</a
          ><br /><br />
        </p>
      </v-col>
    </v-row>

    <iframe
      src="https://i.simmer.io/@JDScharf/stonethrowers-of-syracuse"
      style="width:960px;height:600px;border:0"
    ></iframe>
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
        <br />
        <br />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h4 class="display1 font-weight-bold">
          Salt City Security - Vue.JS App
          <br />
          <br />
        </h4>

        <p>
          &bull; Created an App to register Users, authenticate their login
          information using a JWT bearer token, and access alarm signal data
          from a mock API. <br />
          &bull; App can be tested at:
          <a href="https://signal-vuetify.herokuapp.com/RegisterUser"
            >signal-vuetify.herokuapp.com</a
          >
          <br />
          &bull; Code can be found at:
          <a href="www.github.com/JDScharf/vue-app"
            >github.com/JDScharf/vue-app</a
          ><br /><br />
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img
          :src="require('../assets/Salt-City.png')"
          class="my-3"
          contain
          height="550"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h4 class="display1 font-weight-bold">
          Police Officer Complaint Chatbot — Twilio and Javascript
          <br />
          <br />
        </h4>

        <p>
          &bull; Helped develop a beta chatbot that would assist individuals who
          wanted to report inappropriate officer behavior via text. <br />
          &bull; Bot can be tested by texting “Hi” to (315) 284-8090 <br />
          &bull; Code can be found at:
          <a
            href="https://github.com/code-for-syracuse/CitizensReviewBoardChatBot"
            >github.com/code-for-syracuse/CitizensReviewBoardChatBot</a
          ><br /><br />
        </p>
        <v-img
          :src="require('../assets/android-phone.png')"
          class="my-3"
          contain
          height="750"
        />
      </v-col>
    </v-row>
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
</style>
