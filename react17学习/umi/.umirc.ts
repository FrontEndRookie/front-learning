import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history:{
    type:'hash'
  },
  proxy:{
    '/api':{
      target:'',
      changeOrigin:true
    }
  },
  antd:{
    mobile:false
  },
  // routes: [
    // { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
});
