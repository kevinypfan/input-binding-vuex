<template>
  <div id="app">
    <h1>Sign up</h1>
    <div class="form-group">
      <label for="exampleInputEmail1">Email</label>
      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" :value="email" @input="bindEmail" required>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword" placeholder="Enter password" :value="password" @input="bindPassword" required>
    </div>
    <div class="form-group">
      <label for="exampleInputPhone">Phone</label>
      <input type="text" class="form-control" id="exampleInputPhone" placeholder="Enter Phone" :value="phone" @input="bindPhone" required>
    </div>
    <button class="btn btn-primary" @click="nextPage">Next</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      email: state => state.email,
      password: state => state.password,
      phone: state => state.phone
    })
  },
  methods: {
    bindPhone (event) {
      this.$store.commit('setPhone', event.target.value)
    },
    bindEmail (event) {
      this.$store.commit('setEmail', event.target.value)
    },
    bindPassword (event) {
      this.$store.commit('setPassword', event.target.value)
    },
    nextPage () {
      this.$router.push('/next')
    }
  }
}
</script>

<style>
#app {
  margin: 20px auto;
  width: 70%;
  text-align: center;
}


</style>
