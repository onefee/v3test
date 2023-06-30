<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <button class="button" @click="btnExport()">导出Excel</button>
  </div>
</template>

<script>
import { JsonToExcel } from '@/util/excel.js';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      excelData: [
        //测试数据
        { name: '红烧鱼', size: '大', taste: '微辣', price: '40', remain: '100' },
        { name: '麻辣小龙虾', size: '大', taste: '麻辣', price: '138', remain: '200' },
        { name: '清蒸小龙虾', size: '大', taste: '清淡', price: '138', remain: '200' },
      ],
    };
  },
  methods: {
    //导出
    btnExport() {
      const field = ['userCode', 'userName', 'department', 'major', 'position'],
        dt = [
          {
            userCode: '合并居中',
          },
          {
            userCode: '工号',
            userName: '姓名',
            department: '部门',
            major: '专业',
            position: '职位/职称',
          },
          {
            userCode: 'N1001',
            userName: '张三',
            department: '综合管理部',
            major: '计算机科学与技术',
            position: '项目经理',
          },
        ],
        obj = {
          data: dt,
          key: field,
          filename: '导出示例',
          autoWidth: true,
        };
      JsonToExcel(obj);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
