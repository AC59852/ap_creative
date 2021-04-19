<template>
  <aside>
    <div class="popupWrapper">
      <p>
        We noticed that you're using a mobile browser (such as Safari or Chrome)
        to load this application.
      </p>
      <p>We recommend downloading the app for the best experience</p>
      <p>Tap whichever browser you're using to view this site for help.</p>
      <div>
        <div class="popBtns">
          <div
            @click="
              setCurrentBrowser(browser);
              setActive(index);
            "
            :class="{ btnActive: activeBrowser === index }"
            v-for="(browser, index) in browsers"
            :key="browser.id"
          >
            {{ browser.name }}
          </div>
        </div>
        <div>
          <ul>
            <li v-for="step in currentBrowser.steps" :key="step.id">
              {{ step.step }}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p>
          Otherwise, Just tap the button below to continue to the website,
          enjoy!
        </p>
        <div class="popClose" @click="hidePopup()">View Site</div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      activeBrowser: 0,

      browsers: [
        {
          id: 1,
          name: "Safari",
          steps: [
            {
              id: 1,
              step:
                "Tap the middle icon in your toolbar at the bottom of your screen",
            },
            {
              id: 2,
              step: 'Scroll until you see the "Add to Home Screen" option',
            },
            {
              id: 3,
              step:
                'Tap "Add to Home Screen", then tap the "Add" button in the top right',
            },
          ],
        },
        {
          id: 2,
          name: "Chrome",
          steps: [
            {
              id: 1,
              step: "Tap the three dots in the top right of your browser",
            },
            {
              id: 2,
              step: 'Scroll until you see the "Add to Home Screen" option',
            },
            {
              id: 3,
              step:
                'Tap "Add to Home Screen", then tap the "Add" button in the bottom right',
            },
          ],
        },
      ],

      currentBrowser: {},
    };
  },

  mounted() {
    this.currentBrowser = this.browsers[0];
  },

  methods: {
    setCurrentBrowser(info) {
      this.currentBrowser = info;
    },

    setActive(index) {
      this.activeBrowser = index;
    },

    hidePopup() {
      document.getElementById("popup").classList.toggle("popupShow");

      document.querySelector("#fullpage").style.transform =
        "translate3d(0px, 0px, 0px)";

      document.querySelector("#topNav").classList.remove("hide");
      document.querySelector("#topNav").classList.remove("dark");
    },
  },
};
</script>

<style></style>
