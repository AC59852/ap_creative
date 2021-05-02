<template>
  <aside>
    <div class="popupWrapper">
      <h2>Notice:</h2>
      <img src="img/svgs/airplay.svg" alt="" />
      <p>
        Although the AP Creative website is responsive, for the best experience
        on mobile, we recommend downloading the AP Creative app.
      </p>
      <div>
        <h3>Please Select Your Current Browser:</h3>
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
        <h3>Continue Without Downloading:</h3>
        <div class="popClose" @click="hidePopup()">Continue to Site</div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      // activeBrowser is set to 0, since that's the id of the first browser in the "browsers" data array
      activeBrowser: 0,

      // Data array of browsers
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

      // currentBrowser contains the data of the browser that was clicked
      currentBrowser: {},
    };
  },

  mounted() {
    // When the vue model is mounted, set the current browser as the first in the "browsers" data array
    this.currentBrowser = this.browsers[0];
  },

  methods: {
    // Set the current browser as the browser that was clicked
    setCurrentBrowser(info) {
      this.currentBrowser = info;
    },

    // Set the active browser as the browser that was clicked
    setActive(index) {
      this.activeBrowser = index;
    },

    hidePopup() {
      // On click of the close button, hide the popup
      document.getElementById("popup").classList.toggle("popupShow");

      document.querySelector("#topNav").classList.remove("hide");
      document.querySelector("#topNav").classList.remove("dark");
    },
  },
};
</script>

<style></style>
