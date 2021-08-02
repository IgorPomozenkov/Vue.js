<template>
    <v-card class="pa-8">
        <v-text-field type='date' v-model="date" label="Date"></v-text-field>
        <v-select class="text-center" v-model="type" label="Category" :items="categories"></v-select>
        <v-text-field type='number' v-model.number="value" label="Value"></v-text-field>
        <Button :nameBtn="nameBtn" @clicked="onSaveClick"/>
    </v-card>
</template>

<script>
import Button from './Button.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
    name: 'AddPaymentForm',
    components: {
        Button
    },
    data(){
        return {
            date: '',
            type: '',
            value: null,
            idPay: 0,
            nameBtn: 'ADD'
        }
    },
    methods: {
        ...mapMutations([
            'addDataToPaymentsList'
        ]),
        onSaveClick(){
            const { type, value} = this;
            if(type && value) {
                const data = {
                    date: this.date || this.getCurrentDate,
                    type,
                    value,
                    idPay: this.idPay
                }
                this.$emit('addNewPayment', data);
                if(this.$route.params.type){
                    this.addDataToPaymentsList(data);
                }
            }
        },
    },
    computed: {
        ...mapGetters({
            categories: 'getCategoryList'
        }),
        getCurrentDate(){
            const today = new Date();
            const d = today.getDate();
            const m = today.getMonth() + 1;
            const y = today.getFullYear();
            return `${d}-0${m}-${y}`
        }
    },
    mounted(){
        this.value = Number(location.search.slice(7)) || '';
        this.type = this.$route.params.type || '';
    }
}
</script>

<style lang="scss" module>

</style>