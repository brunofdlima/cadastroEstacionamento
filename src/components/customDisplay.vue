<template>
  <input :placeholder="placeholder" />
</template>

<script>
export default {
  name: "customDisplay",
  props: {
    placeholder: String,
  },
};
</script>

<style scoped>

input {
  height: 1.875rem;
  width: 100%;
  height: 2.5rem;
  border-radius: 0.625rem;
  outline: none;
  border: none;
  margin-top: 1.25rem;
  cursor: pointer;
  text-align: center;
}

</style>