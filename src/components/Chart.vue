
<script>
import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    name: 'Chart',
    extends: Doughnut,
    mixins: [reactiveProp],
    props: {
        options: {
            type: Object,
            default: null
        }
    },
    mounted(){
        this.renderChart(this.chartData, this.options)
    }
}
</script>

<style>

</style>