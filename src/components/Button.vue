<template>
  <div :class="[$style.wrapper]">
      <v-btn color="#19b16b" dark @click="onClick">{{ nameBtn }} <v-icon>mdi-plus</v-icon></v-btn>
  </div>
</template>

<script>
export default {
    name: 'Button',
    props: ['nameBtn'],
    methods: {
        onClick(){
            this.$emit('clicked');
        }
    }
}
</script>

<style lang="scss" module>
.wrapper {
    margin-bottom: 20px;
}
</style>