<template>
    <div :class="[$style.form]">
        <input type="date" placeholder="Payment date" v-model="date"/>
        <input type="text" placeholder="Payment description" v-model="type"/>
        <input type="number" placeholder="Payment amount" v-model.number="value"/>
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

<style lang="scss" module>
.form {
    display: flex;
    flex-direction: column;
    width: 300px;
}

.form input {
    margin-bottom: 11px;
    padding: 5px;
    border: 2px solid #c0c0c082;
    outline: none;
}

.form button {
    width: 130px;
    align-self: flex-end;
}
</style>