<template>
    <div>
        <Button @click="handleClick">primary</Button><br>
        <Button disabled>disabled</Button><br>
        <Button type="ghost">ghost</Button><br>
        <Button type="warning">warning</Button><br>
        <Button size="small">small</Button><br>
        <Button inline>inline1</Button>
        <Button inline>inline2</Button><br>
        <Button loading>aaaa</Button><br>
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
