<template>
    <div :class="[$style.wrapper]">
        <div class="" v-for="(item, idx) in list" :key="idx">
            {{idx + 1}} - {{item.date}} - {{item.type}} - {{item.value}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentsDisplay',
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {
            
        }
    },
}
</script>

<style lang="scss" module>
.wrapper {
    color: rgb(19, 25, 102);
}

</style>