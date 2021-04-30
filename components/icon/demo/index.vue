<template>
  <div>
    <Icon type="check-circle" />
    <Icon type="check" />
    <Icon type="check-circle-o" />
    <Icon type="cross-circle" />
    <Icon type="cross" />
    <Icon type="cross-circle-o" />
    <Icon type="up" />
    <Icon type="down" />
    <Icon type="left" />
    <Icon type="right" />
    <Icon type="ellipsis" />
    <Icon type="loading" />
    <Icon type="search" size="xxs" />
    <Icon type="search" size="xs" />
    <Icon type="search" size="sm" />
    <Icon type="search" size="md" />
    <Icon type="search" size="lg" />
  </div>
</template>

<script>
export default {
  setup() {
    const handleClick = (evt) => {
      console.log(evt)
      console.log('点击按钮')
    }
    return {
      handleClick
    }
  }
}
</script>

<style scoped></style>
