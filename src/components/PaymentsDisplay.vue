<template>
    <div :class="[$style.wrapper]">
        <div :class="[$style.items]" v-for="(item, idx) in list" :key="idx">
            <span>{{idx += 1}}</span>
            <span>{{item.date}}</span>
            <span>{{item.type}}</span>
            <span>{{item.value}}</span>
            <p :class="[$style.btn]" @click="modalCheck(idx)">&#8942;</p>
            <transition name="fade">
                <ModalWindow v-if="modalShow == idx " />
            </transition>
        </div>
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

.btn {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 30px;
    font-weight: 700;
    line-height: 15px;
    cursor: pointer;
    user-select: none;
}
</style>