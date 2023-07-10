<template>
  <div class="main"></div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'DomainView',
  data() {
    return {};
  },
  created() {
    this.getStatus();
  },
  methods: {
    async getStatus() {
      const res = await axios.get('http://panda.www.net.cn/cgi-bin/check.cgi?area_domain=dbing.com');
      console.debug('st', res);
    },
  },
};
</script>
