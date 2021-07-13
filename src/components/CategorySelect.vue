<template>
    <div >
        <select v-model="selected">
            <option v-for="option in categories" :key="option" :value="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'CategorySelect',
    props: {
        categories: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {
            selected: ''
        }
    }
}
</script>

<style lang="scss" module>


</style>