<template>
  <div id="app" class="container">
    <header>
      <h2 :class="[$style.title]">My personal costs</h2>
    </header>
    <main>
      <Button @clicked="show =! show"/>
      <AddPaymentForm v-show="show" @addNewPayment="addData"/>
      <PaymentsDisplay :list="paymentsList"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import Button from './components/Button.vue'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Button,
  },
  data(){
    return {
      //paymentsList: [],
      show: false
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
</style>
