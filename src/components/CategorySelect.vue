<template>
    <div>
        <select :class="[$style.select]" v-model="selected" @click="onClick">
            <option disabled value="">Выберите категорию</option>
            <option v-for="option in categories" :key="option" :value="option" >
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
    },
    methods: {
        onClick(){
            const data = this.selected;
            this.$emit('addSelect', data);
        }
    }
}
</script>

<style lang="scss" module>
.select {
    width: 100%;
    border: 2px solid #c0c0c082;
    margin-bottom: 11px;
    padding: 5px;
    outline: none;
}
</style>