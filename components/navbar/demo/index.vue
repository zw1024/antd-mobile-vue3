<template>
  <div>
    <nav-bar @on-left-click="handleLeftClick">
      <template v-slot:icon>
        <Icon type="left" />
      </template>
      <template v-slot:leftContent> 左侧 </template>
      <template v-slot> titel </template>
      <template v-slot:rightContent> 右侧 </template>
    </nav-bar>
    <nav-bar mode="light">
      <template v-slot:leftContent> Back </template>
      <template v-slot> NavBar </template>
      <template v-slot:rightContent>
        <Icon key="0" type="search" style="margin-right: 16px" />
        <Icon key="1" type="ellipsis" />
      </template>
    </nav-bar>
  </div>
</template>

<script>
export default {
  setup() {
    const handleLeftClick = () => {
      console.log('点击左侧按钮')
    }
    return {
      handleLeftClick
    }
  }
}
</script>

<style scoped></style>
