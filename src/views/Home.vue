<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="message">This message is only visible for signed in user.</div>
    <button class="button" @click="signOut">Sign Out</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/signin');
        });
    },
  },
});
</script>

<style scoped>
.message {
  font-size: 32px;
  line-height: 3;
  font-weight: bold;
}

.button {
  width: 160px;
  font-size: 18px;
  -webkit-appearance: none;
  border-radius: 8px;
}
</style>

