<template>
  <div :class="[$style.wrapper]">
      <button :class="[$style.btn]" @click="onClick">ADD NEW COST<span>+</span></button>
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

.btn {
    padding: 10px;
    border: none;
    background: #19b16b;
    color: white;
    cursor: pointer;
}

.btn span {
    margin-left: 15px;
}
</style>