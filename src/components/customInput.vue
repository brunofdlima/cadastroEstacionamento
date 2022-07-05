<template>
  <input 
  :placeholder="placeholder"
  />
</template>

<script>

export default {
  name: 'customInput',
  props: {
    placeholder: String,
  }
}

</script>

<style scoped>

input {
  border: 0.3125rem;
  border-radius: 0.625rem;
  height: 2.5rem;
  text-align: center;
}

</style>