<template>
    <v-row>
        <v-col>
            <div class="text-h5 text-sm-h4" :class="[$style.title]">My personal costs</div>
            <v-dialog v-model="dialog">
                <template v-slot:activator="{on}">
                    <v-btn color="teal" dark v-on="on">
                        ADD NEW COST <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <!-- FUTURE CONTENT --> 
                </v-card>
            </v-dialog>
            <Button @clicked="show =! show"/>
            <AddPaymentForm v-show="show" @addNewPayment="addData"/>
            <PaymentsDisplay :list="paymentsList"/>
        </v-col>
        <v-col>Diagram</v-col>
    </v-row>
</template>

<script>
import AddPaymentForm from './AddPaymentForm.vue'
import Button from './Button.vue'
import PaymentsDisplay from './PaymentsDisplay.vue'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
    name: 'Dashboard',
    components: {
        AddPaymentForm,
        Button,
        PaymentsDisplay
    },
    data(){
        return {
            show: false,
            page: '',
            modalShow: false,
            modalSettings: {},
            dialog: false,
        }
    },
    methods: {
        ...mapMutations([
            'addDataToPaymentsList',
            'setPaymentsListData'
        ]),
        ...mapActions([
            'fetchCategories'
        ]),

        addData(data){
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
        // this.$store.dispatch('fetchData');
        if(!this.categories.length){
            this.fetchCategories()
        }
    },
    mounted(){

    }
}
</script>

<style lang="scss" module>
.wrapper {
    margin-bottom: 50px;
}

.title {
  margin: 20px;
}
</style>