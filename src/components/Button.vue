<template>
  <div :class="[$style.wrapper]">
      <button @click="onClick">ADD NEW COST<span>+</span></button>
  </div>
</template>

<script>
export default {
    name: 'Button',
    methods: {
        onClick(){
            this.$emit('clicked');
        }
    }
}
</script>

<style lang="scss" module>
.wrapper {
    margin: 20px 0;
}
</style>