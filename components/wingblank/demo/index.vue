<template>
    <div>
        <wing-blank style="background-color: red">lg</wing-blank>
        <wing-blank size="sm" style="background-color: green">sm</wing-blank>
        <wing-blank size="md" style="background-color: yellow">md</wing-blank>
    </div>
</template>

<script>
  export default {
    setup() {
      const handleClick = evt => {
        console.log('点击按钮')
      }
      return {
        handleClick
      }
    }
  }
</script>

<style scoped>

</style>
