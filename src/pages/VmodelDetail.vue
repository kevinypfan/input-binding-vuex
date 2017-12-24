<template>
  <div id="app">
    <h1>Sign up</h1>
    <div class="form-group">
      <label for="exampleInputEmail1">Email</label>
      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" v-model="email" required>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword" placeholder="Enter password" v-model="password" required>
    </div>
    <div class="form-group">
      <label for="exampleInputPhone">Phone</label>
      <input type="text" class="form-control" id="exampleInputPhone" placeholder="Enter Phone" :value="phone" @input="phone = $event.target.value" required>
    </div>
    <button class="btn btn-primary" @click="nextPage">Next</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      phone: ''
    }
  },
  methods: {
    nextPage () {
      this.$router.push('/next')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 20px auto;
  width: 70%;
  text-align: center;
}


</style>
