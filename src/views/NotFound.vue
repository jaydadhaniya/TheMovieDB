<template>
  <main>
    <h1>404 Page Not Found!</h1>
    <p>
      <a href="/">Go home?</a>
    </p>
  </main>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
main {
  margin: 15px;
  text-align: center;
}

h1 {
  color: var(--border);
  font-size: 2em;
}

a {
  font-size: 2em;
}
</style>
