<template>
  <div id="app" class="container">
    <nav :class="[$style.nav]">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/calc">Calculator</router-link>
      <router-link to="/addpayment/Food?value=200">Add payment</router-link>
    </nav>
    <main>
      <router-view />

      <!-- <Dashboard v-if="page === 'dashboard'" />
      <About v-if="page === 'about'" />
      <NotFound v-if="page === 'notFound'" /> -->
    </main>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {},
  data(){
    return {
      //paymentsList: [],
      modalShow: false,
      modalSettings: {}
    }
  },
  methods: {
    ...mapMutations([
      'setPaymentsListData',
      'addDataToPaymentsList'
    ]),
    ...mapActions([
      'fetchCategories'
    ]),
    setPage(){
      this.page = location.pathname.slice(1)
    },

    onShow(settings){
      this.modalSettings = settings
      console.log(settings)
    },
    onHide(){
      this.modalSettings = {}
    }
  },
  computed: {
    ...mapGetters({
      paymentsList: 'getPaymentsList',
      categories: 'getCategoryList'
    }),
  },
  created(){
    //this.$store.commit('setPaymentsListData', this.fetchData())
    // this.setPaymentsListData(this.fetchData());
  },
  mounted(){
    this.$modal.EventBus.$on('show', this.onShow);
    this.$modal.EventBus.$on('hide', this.onHide)
    // this.setPage();
    // const links = document.querySelectorAll('a');
    // links.forEach(link => {
    //   link.addEventListener('click', event => {
    //     event.preventDefault();
    //     history.pushState({}, '', link.href);
    //     this.setPage();
    //   })
    // });
    // window.addEventListener('popstate', this.setPage);
    // window.addEventListener('hashchange', () => {
    //   this.setPage()
    // })
  }
}
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  margin-bottom: 15px;
}

.nav a {
  margin-right: 17px;
}
</style>
