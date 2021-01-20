<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1 align="center">エロい名前か診断</h1>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
       <v-text-field
         v-model="message"
         label="診断したい名前を入力"
         type="text"
       >

       <template v-slot:append-outer>
         <v-btn color="primary" @click="judge">診断</v-btn>
       </template>
      </v-text-field>

      <h1 v-if="show" align="center">{{ message }} は {{ msg[random] }}名前です</h1>
      
      <v-btn v-if="show" color="primary" @click="tweet">結果をツイート</v-btn>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    message: '',
    msg: ['エロい','エロくない'],
    random: null,
    show: false
    //
  }),

  methods: {
    judge() {
      this.show = !this.show
      this.random = Math.floor(Math.random() * 2)
      console.log(this.msg[this.random]);
      
    },
    tweet() {
      var shareURL = "https://twitter.com/intent/tweet?text=" + this.message+"は"+this.msg[this.random]+"名前です"+"%20%23エロい名前か診断"+'&url='+"https://name-judge.web.app";
      location.href = shareURL
        // console.log(this.msg1[this.random1]+" "+this.msg2[this.random2]+" "+this.msg3[this.random3]);
    }
  },
};
</script>
