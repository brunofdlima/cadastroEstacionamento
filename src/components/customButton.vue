<template>
  <button><slot></slot></button>
</template>

<script>

export default {
  name: 'customButton',
  props: {
    placeholder: String,
  }
}

</script>

<style scoped>

button {
  height: 1.875rem;
  width: 80%;
  border-radius: 0.625rem;
  outline: none;
  border: none;
  margin-top: 1.25rem;
  cursor: pointer;
}

</style>