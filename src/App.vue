<template>
  <a-layout :style="{ background: '#fff' }">
    <a-layout-header
      :style="{ position: 'responsive', zIndex: 1, width: '100%' }"
    >
      <a-row>
        <a-col :span="2">
          <div style="cursor: pointer" @click="this.$router.push('/')">
            <img
              alt="App logo"
              class="logo"
              src="@/assets/logo.svg"
              width="100"
              height="50"
            />
          </div>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 25px', marginTop: '25px' }">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '600px' }">
        <RouterView />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView,
  },

  data() {
    return {
      selectedKeys: ["2"],
    };
  },

  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>
