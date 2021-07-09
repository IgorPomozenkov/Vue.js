<template>
    <div class="form">
        <input type="date" placeholder="Date" v-model="date" />
        <input type="text" placeholder="Type" v-model="type" />
        <input type="number" placeholder="Value" v-model.number="value" />
        <button @click="onSaveClick">ADD<span>+</span></button>
  </div>
</template>

<script>
export default {
    name: 'AddPaymentForm',
    data(){
        return {
            date: '',
            type: '',
            value: null
        }
    },
    methods: {
        onSaveClick(){
            const { type, value} = this;
            const data = {
                date: this.date || this.getCurrentDate,
                type,
                value
            }
            this.$emit('addNewPayment', data);
        }
    },
    computed: {
        getCurrentDate(){
            const today = new Date();
            const d = today.getDate();
            const m = today.getMonth() + 1;
            const y = today.getFullYear();
            return `${d}.${m}.${y}`
        }
    },

}
</script>

<style>

</style>