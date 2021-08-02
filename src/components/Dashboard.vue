<template>
    <v-row>
        <v-col>
            <div class="text-h5 text-sm-h4 ma-5">My personal costs</div>
            <v-dialog v-model="dialog">
                <template v-slot:activator="{on}">
                    <Button :nameBtn="nameBtn" @clicked="dialog = !dialog" v-on="on"/>
                </template>
                <v-card>
                    <AddPaymentForm @addNewPayment="addData"/>
                </v-card>
            </v-dialog>
            <PaymentsDisplay :list="paymentsList"/>
        </v-col>
        <v-col>
            <Chart :chart-data="datacollection" :options="chartOptions"/>
        </v-col>
    </v-row>
</template>

<script>
import AddPaymentForm from './AddPaymentForm.vue'
import Button from './Button.vue'
import PaymentsDisplay from './PaymentsDisplay.vue'
import { mapMutations, mapGetters, mapActions } from 'vuex'
import Chart from './Chart.vue'

export default {
    name: 'Dashboard',
    components: {
        AddPaymentForm,
        Button,
        PaymentsDisplay,
        Chart
    },
    data(){
        return {
            dialog: false,
            nameBtn: 'ADD NEW COST',
            datacollection: null,
            chartOptions: null,
            food: 0
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
            this.addValue(data)
        },
        fillData(){
            this.datacollection = {
                labels: this.categories, //['Food', 'Sport', 'Transport', 'Education', 'Entertainment']
                datasets: [
                    {
                        label: 'Dataset',
                        data: [this.food, 100, 200, 50 ,100],
                        backgroundColor: [
                            '#8e5ea2',
                            '#c4584f',
                            '#3f95cd',
                            '#3bba9f',
                            '#ecd046',
                        ],
                        hoverOffset: 4
                    }
                ]
            },
            this.chartOptions = {
                responsive: false,
                maintainAspectRatio: false,
            }
        },
        addValue(data){
            if(data.type == 'Food') {
                this.food += data.value;
                this.fillData()
            }
        },
        getValue(){
            this.paymentsList.forEach((item) => {
                if(item.type == 'Food') {
                    this.food += item.value;
                    this.fillData()
                }
            })
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
        this.fillData()
    },
    mounted(){
        this.getValue()
    },
}
</script>

<style lang="scss" module>

</style>