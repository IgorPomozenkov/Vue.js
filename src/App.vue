<template>
  <div id="app" class="container">
    <header>
      <h2 :class="[$style.title]">My personal costs</h2>
    </header>
    <nav :class="[$style.nav]">
      <!-- <router-link to="/dashboard">Dashboard</router-link> -->
      <router-link to="/about">About</router-link>
      <router-link to="/addpayment/Food?value=200">Add payment</router-link>

      <!-- <a href="dashboard">Dashboard</a>
      <a href="about">About</a>
      <a href="notFound">Not Found</a> -->
    </nav>
    <main>
      <router-view />

      <!-- <Dashboard v-if="page === 'dashboard'" />
      <About v-if="page === 'about'" />
      <NotFound v-if="page === 'notFound'" /> -->

      <Button @clicked="show =! show" />
      <AddPaymentForm v-show="show" @addNewPayment="addData"/>
      <PaymentsDisplay :list="paymentsList"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import Button from './components/Button.vue'
// import Dashboard from './components/Dashboard.vue'
// import About from './components/About.vue'
// import NotFound from './components/NotFound.vue'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Button,
    // Dashboard,
    // About,
    // NotFound
  },
  data(){
    return {
      //paymentsList: [],
      show: false,
      page: '',
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
    addData(data){
      //this.paymentsList.push(data);
      //this.paymentsList = [...this.paymentsList, data]
      this.addDataToPaymentsList(data)
    },
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
    this.$store.dispatch('fetchData');
    if(!this.categories.length){
      this.fetchCategories()
    }
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

.title {
  margin: 20px;
}

.nav {
  margin-bottom: 15px;
}

.nav a {
  margin-right: 17px;
}
</style>
