<template>
  <div id="music"></div>
</template>

<script>
  // import axios from 'axios'
  import 'APlayer/dist/APlayer.min.css'
  // import APlayer from 'APlayer'


  export default {
    name: 'music',
    data() {
      return {
        mid: '',
        baseURL: '',
        mlist: []
      }
    },
    methods: {
      play(m) {
        console.log(Aplayer)
        const ap = new APlayer({
          container: document.getElementById('music'),
          autoplay: true,
          order: 'random',
          audio: m
        })
      }
    },
    mounted() {
      const APlayer = require('aplayer') ||require('Aplayer')
      const axios = require('axios')

      axios.get('http://101.132.236.21:3000/test').then((res) => {
        console.log(res)

        if (res.data.code !== 200) return console.error('error')
        console.log('mlist:', res.data.data.arr)
        const ap = new APlayer({
          container: document.getElementById('music'),
          autoplay: true,
          order: 'random',
          audio: res.data.data.arr
        })
        ap.play()
      })
    }
  }
</script>

<style>
  #music {
    margin-top: 50px;
    box-shadow: 0 5px 5px #ccc;
  }
</style>