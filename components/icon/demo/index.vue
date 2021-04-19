<template>
    <div>
        <Icon type="check-circle"/>
        <Icon type="loading"/>
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
