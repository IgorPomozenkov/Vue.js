<template>
    <div :class="[$style.wrapper]">
        <v-row>
            <v-col :cols="1">#</v-col>
            <v-col :cols="4">Date</v-col>
            <v-col :cols="5">Category</v-col>
            <v-col :cols="2">Value</v-col>
        </v-row>
        <v-row :class="[$style.row]" v-for="(item, idx) in list" :key="idx">
            <v-col :cols="1">{{ idx += 1 }}</v-col>
            <v-col :cols="4">{{ item.date }}</v-col>
            <v-col :cols="5">{{ item.type }}</v-col>
            <v-col :cols="2">{{item.value}}</v-col>
            <p :class="[$style.btn]" @click="modalCheck(idx)">&#8942;</p>
            <transition name="fade">
                <ModalWindow v-if="modalShow == idx " />
            </transition>
        </v-row>
        <p>Total: {{ getFPV }}</p>
    </div>
</template>

<script>
import ModalWindow from './ModalWindow.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'PaymentsDisplay',
    components: {
        ModalWindow,
    },
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {
            modalShow: '',
            modalSettings: {}
        }
    },
    methods: {
        modalCheck(idx){
            if(this.modalShow == '') {
                this.modalShow = idx;
            }else if(this.modalShow) {
                this.modalShow = 0;
            }
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<style lang="scss" module>
.wrapper {
    margin-top: 50px;
}

.row {
    position: relative;
}
.btn {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
}
</style>