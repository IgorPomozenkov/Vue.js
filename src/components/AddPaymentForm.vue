<template>
    <div :class="[$style.form]">
        <input type="date" placeholder="Payment date" v-model="date"/>
        <!-- <input type="text" placeholder="Payment description" v-model="type"/> -->
        <CategorySelect :categories="categories" @addSelect="addSelect"/>
        <input type="number" placeholder="Payment amount" v-model.number="value"/>
        <button :class="[$style.btn]" @click="onSaveClick">ADD<span>+</span></button>
  </div>
</template>

<script>
import CategorySelect from './CategorySelect.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
    name: 'AddPaymentForm',
    components: {
        CategorySelect
    },
    data(){
        return {
            date: '',
            type: '',
            value: null
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
                    value
                }
                this.$emit('addNewPayment', data);
                if(this.$route.params.type){
                    this.addDataToPaymentsList(data);
                }
            }
        },
        addSelect(data){
            this.type = data;
        }
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
    }
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

.btn {
    padding: 10px;
    border: none;
    background: #19b16b;
    color: white;
    cursor: pointer;
}

.btn span {
    margin-left: 15px;
}
</style>