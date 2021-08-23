import Vue from 'vue';
import VueRouter from 'vue-router';
import HOME from '../components/Home.vue';
import Introduce from '../components/Introduce.vue'
import Page from '../components/Page.vue'


/**
◆ 라우터에서 사용 할 컴포넌트 생성
1. HOME라는 컴포넌트가 있어야하고
2. HOME 컴포넌트를 router.js에 import해줘야합니다.
3.  router를 사용하여 렌더하겠다는 것을 vue에 등록해줘야합니다.
4. router를 보여줄 공간에 <router-view>를 입력하는 것입니다.
 */

//라우터 등록
Vue.use(VueRouter);

//라우터 설정
export default new VueRouter({
    mode : 'history',
    routes : [
        { path : '/', name : 'home', component : HOME },
        { path : '/introduce', name : 'introduce', component : Introduce },
        { path : '/page', name : 'page', component : Page },

    ]
});
