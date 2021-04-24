<template>
    <div>
        <Flex>
            <FlexItem>123123</FlexItem>
            <FlexItem>aaaa</FlexItem>
        </Flex>
        <Flex>
            <FlexItem>aa</FlexItem>
            <FlexItem>bb</FlexItem>
            <FlexItem>ccc</FlexItem>
        </Flex>
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
.bg{
    background-color: #cccccc;
}
</style>
