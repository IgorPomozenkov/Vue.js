<template>
    <div :class="[$style.wrapper]">
        <div :class="[$style.items]" v-for="(item, idx) in list" :key="idx">
            <span>{{idx + 1}}</span>
            <span>{{item.date}}</span>
            <span>{{item.type}}</span>
            <span>{{item.value}}</span>
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
}
</script>

<style lang="scss" module>
.wrapper {
    width: 400px;
    margin-top: 50px;
    color: rgb(19, 25, 102);
}

.items {
    border-bottom: 1px solid silver;
    margin-bottom: 10px;
    padding: 4px;
}

.items span {
    margin-top: 10px;
    margin-right: 50px;
}

</style>