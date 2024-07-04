<template>
  <v-container>
    <v-spacer class="custom-spacer"></v-spacer>
    <v-row>
      <v-col>
        <h2 class="heading-2">Web Development Projects</h2>
        <br />

        <h3 class="heading-3">
          Spotify Music Explorer - Vue.JS App
        </h3>
        <br />

        <p>
          &bull; Created a web application allowing users user to explore
          different musical artists based on a genre or artist they are
          interested in.<br />
          &bull; Made using Spotify's API, client side authentication, and
          RESTful API calls.<br />
          &bull; Code can be viewed at:
          <a href="https://www.github.com/JDScharf/spotify-app" target="_blank"
            >github.com/JDScharf/spotify-app</a
          >
        </p>
        <br />
        <button>
          <div class="text-button">
            <v-btn
              href="https://spotify-music-explorer.netlify.app/"
              target="_blank"
              depressed
              elevation="10"
              color="#2c8591"
              raised
              rounded
              dark
            >
              Launch Spotify Music Explorer
            </v-btn>
          </div>
        </button>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <a href="https://jason-spotify.netlify.app/" target="_blank"
          ><v-img
            :src="require('../assets/Spotify-App2.svg')"
            alt="Screenshot of a Spotify web app."
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
          <!-- &bull; Bot can be tested by texting “Hi” to (315) 284-8090 -->
          &bull; Bot is not currently working 😢 due to recent updates to Twilio's Application to Person (A2P) requirements.  I'm working on having updated by August 2024.  <br />
          &bull; Screenshot of bot interaction can be seen below.
        </p>
        <br />

        <!-- Issus with Twilio, not working now :( -->
        <!-- <button>
          <div class="text-button">
            <v-btn
              href="sms:3152848090?&body=Hi"
              depressed
              elevation="10"
              color="#2c8591"
              raised
              rounded
              dark
            >
              Test Chatbot
            </v-btn>
          </div>
        </button> -->
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-img
          :src="require('../assets/android-phone.png')"
          alt="Screenshot of a phone with sample chat correspondence."
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
          Stonethrowers of Syracuse Video Game — C#/Unity3D Project
        </h3>
        <br />

        <p>
          &bull; Created a video game with Unity’s video game engine and C#
          scripting.
          <br />
          &bull; Code can be found at:
          <a
            href="https://www.github.com/JDScharf/Stonethrowers"
            target="_blank"
            >github.com/JDScharf/Stonethrowers</a
          >
        </p>
        <!-- <button>
        <div class="text-right">
          <v-btn
            @click="muteGame()"
            depressed
            elevation="10"
            color="#2c8591"
            raised
            rounded
            dark
          >
            Mute Sound
          </v-btn>
        </div>
      </button> -->
        <br />
      </v-col>
    </v-row>

    <div class="game-container">
      <iframe
        id="gameFrame"
        title="Stone Throwers Game"
        src="https://i.simmer.io/@JDScharf/stonethrowers-of-syracuse"
        alt="Video Game Image of Man with a Rock, a Traffic Light, and someone walking back and forth."
        style="position: absolute; 
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            mute=true"
        class="mute=true"
      ></iframe>
    </div>
    <v-row>
      <v-col>
        <p>
          <b>Controls:</b> Click on the game screen to begin. Hold the
          <u> space bar </u> to increase the force of your throw. Use the
          &#8593; and &#8595; arrow to change the direction your rock will be
          thrown. <br />
          The goal is to break the <i class="fas fa-traffic-light"></i> and
          bring glory and honor to Ireland! <br />
          &bull; Game can be played on desktop or laptop, but not on mobile at
          this time.
        </p>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />

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
          Schedule Web Development Consult
        </v-btn>
      </div>
    </button>

    <br />
    <br />
    <br />
  </v-container>
</template>

<script>
export default {
  name: "Web",
  components: {},
};
</script>

<style>
.game-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 35px;
  height: 0;
  overflow: hidden;
}
</style>
