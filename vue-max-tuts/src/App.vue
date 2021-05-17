<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h2>Sending and fetching HTTP Requests</h2>
        <div class="form-group">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.username" placeholder="Enter fullname" />
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input class="form-control" type="email" v-model="user.email"  placeholder="Enter email"/>
        </div>
        <br />
        <button class="btn btn-primary" v-on:click="submit">Submit</button>
        <hr />
        <h3>Fetching JSON data</h3>
        <br>
        <button class="btn btn-primary" v-on:click="fetchData">Get Data</button>
        <br> <br>
        <ul class="list-group">
          <li class="list-group-item" v-for="(u, index) in users" :key="index">
            <strong> Username:</strong>  {{ u.username }} - <br> <strong>Email</strong> {{ u.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: []
    };
  },
  methods: {
    // post data
    submit() {
      this.$http.post("",this.user).then(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
      // console.log(this.user);
    },
    // get/fetch data
    fetchData: function() {
      this.$http.get("").then(response => {
          return response.json();
          console.log(data);
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    }
  }
};
</script>

<style></style>
