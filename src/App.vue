<template>
  <div id="app" class="container">
    <header>
      <h2 :class="[$style.title]">My personal costs</h2>
    </header>
    <main>
      <Button/>
      <AddPaymentForm @addNewPayment="addData"/>
      <PaymentsDisplay :list="paymentsList"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Button
  },
  data(){
    return {
      paymentsList: [],
    }
  },
  methods: {
    addData(data){
      //this.paymentsList.push(data);
      this.paymentsList = [...this.paymentsList, data]
    },
  },
  created(){
    //this.paymentsList = this.fetchData()
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
