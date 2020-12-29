<template>
  <v-container>
    <v-row class="text-left">
      <v-col class="text-left">
        <h1 class="heading-name">
          Jason Scharf
        </h1>
        <br />

        <h2 class="heading-job-title">
          Civic Technologist
        </h2>
        <br />

        <h3 class="heading-3">
          <a href="mailto:jasonscharf3@gmail.com">
          jasonscharf3@gmail.com</a>
|
          <a href="sms:3154474501">
(315) 447-4501
  </a>
        </h3>
                 <br />

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
        <h2 class="heading-2">Experience</h2>
        <br />

        <h3 class="heading-3">
          Onondaga County Dept. of Child & Family Services, Syracuse, NY —
          Caseworker
        </h3>
        <h5 class = "heading-5">
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
          Hack Upsate - Caereers in Code Bootcamp, Syracuse, NY — Student
          Success Coordinator
        </h3>
        <h5 class = "heading-5">
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
        <h2 class="heading-2">Education</h2>
        <br />

        <h3 class="heading-3">
          Easter Gateway Community College
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
          <a href="www.github.com/JDScharf/Stonethrowers"
            target="_blank">github.com/JDScharf/Stonethrowers</a>
        </p>
        <br />
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
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3 class="heading-3">
          Salt City Security - Vue.JS App
          <br />
          <br />
        </h3>

        <p>
          &bull; Created an App to register Users, authenticate their login
          information using a JWT bearer token, and access alarm signal data
          from a mock API. <br />
          &bull; App can be tested at:
          <a href="https://signal-vuetify.herokuapp.com/RegisterUser"
            target="_blank">signal-vuetify.herokuapp.com</a
          >
          <br />
          &bull; Code can be found at:
          <a href="www.github.com/JDScharf/vue-app"
            target="_blank">github.com/JDScharf/vue-app</a
          >
        </p>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col>
          <a href="https://signal-vuetify.herokuapp.com/RegisterUser"
            target="_blank"><v-img
          :src="require('../assets/Salt-City.png')"
          class="my-3"
          contain
          height="500"
        /></a>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3 class="heading-3">
          Police Officer Complaint Chatbot — Twilio and Javascript
        </h3>
          <br />
        <p>
          &bull; Helped develop a beta chatbot that would assist individuals who
          wanted to report inappropriate officer behavior via text. <br />

          &bull; Code can be found at:
          <a
            href="https://github.com/code-for-syracuse/CitizensReviewBoardChatBot"
            target="_blank">github.com/code-for-syracuse/CitizensReviewBoardChatBot</a
          ><br />          
          &bull; Bot can be tested by texting “Hi” to (315) 284-8090         
          </p>
          <br />

    <div class = "text-center">
          <v-btn href="sms:3152848090?&body=Hi"
  depressed
  elevation="10"
  color="primary"
  raised
  rounded
  dark
  >
Test Chatbot
  </v-btn>
  </div>
                  <br />
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

.heading-name {
  color: #9A293D;
  font-size: 50px;
}

.heading-job-title {
  color: #2c3e50;
  font-size: 35px;
}

.heading-2 {
  color: #9A293D;
  font-size: 40px;
}

.heading-3 {
  color: #10696B;
  font-size: 30px;
}

.heading-4 {
  color: #10696B;
  font-size: 25px;
}
.heading-5 {
  color: #10696B;
  font-size: 20px;
}

</style>
