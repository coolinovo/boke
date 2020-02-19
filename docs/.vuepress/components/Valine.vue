<template>
  <div id="notice"></div>
</template>

<script>
  export default {
    name: 'valine',
    mounted() {
      // import Valine from 'valine'
      const Valine = require('valine');
      if (typeof window !== 'undefined') {
        this.window = window
        window.AV = require('leancloud-storage')
      }
      new Valine({
        el: '#notice',
        appId: 'cCGvdI9jjFAoQNSYzME5dmal-gzGzoHsz', // your appId
        appKey: 'uSd3m7sFSWVEGeuRQtWW4tlf', // your appKey
        placeholder: '小声bb...',
        notify: true,
        avatar: 'wavatar',
        meta: ['nick', 'mail']
      })
    }
  }
</script>

<style>
  #notice {
    width: 100%;
    margin: 80px auto;
  }

  .txt-right {
    display: none;
  }
</style>