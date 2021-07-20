<template>
    <div :class="[$style.wrapper]">
        <div :class="[$style.items]" v-for="(item, idx) in list" :key="idx">
            <span>{{idx + 1}}</span>
            <span>{{item.date}}</span>
            <span>{{item.type}}</span>
            <span>{{item.value}}</span>
            <p @click="onClick">...</p>
        </div>
        <p>Total: {{ getFPV }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'PaymentsDisplay',
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        onClick(){
            this.$emit('clicked');
        }
    },
    computed: {
        ...mapGetters([
            'getFullPaymentValue',
        ]),
        getFPV(){
            //return this.$store.getters.getFullPaymentValue;
            return this.getFullPaymentValue;
        },
    },
}
</script>

<style lang="scss" module>
.wrapper {
    width: 500px;
    margin-top: 50px;
    color: rgb(19, 25, 102);
}

.items {
    border-bottom: 1px solid silver;
    margin-bottom: 10px;
    padding: 4px;
    position: relative;
}

.items span {
    margin-top: 10px;
    margin-right: 50px;
}

.items p {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 37px;
    line-height: 0px;
    cursor: pointer;
}
</style>