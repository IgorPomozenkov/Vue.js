<template>
    <div :class="[$style.wrapper]">
        <AddPaymentForm @addNewPayment="addData"/>
    </div>
</template>

<script>
import AddPaymentForm from './AddPaymentForm.vue'
import { mapMutations } from 'vuex'

export default {
    name: 'Dashboard',
    components: {
        AddPaymentForm,
    },
    methods: {
        ...mapMutations([
            'addDataToPaymentsList'
        ]),
        addData(data){
            this.addDataToPaymentsList(data)
        }
    },
}
</script>

<style lang="scss" module>
.wrapper {
    margin-bottom: 50px;
}
</style>