import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'foreveross',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
      // polyfills: ['ie9'],
    }],
  ],
  targets: {
    ie: 9,
  }
}

export default config;
