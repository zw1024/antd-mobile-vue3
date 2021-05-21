<template>
  <div>
    <nav-bar>
      <template v-slot> Titel </template>
      <template v-slot:rightContent>
        <Popover v-model:visible="state.visible" placement="bottomRight" :mask="true">
          <template v-slot:tooltip>
            <PopoverItem>
              <template v-slot:icon> <Icon type="check-circle-o" size="xs" /> </template>123123</PopoverItem
            >
            <PopoverItem>
              <template v-slot:icon>
                <Icon type="cross-circle" size="xs" />
              </template>
              456
            </PopoverItem>
          </template>
          <template v-slot:outlet>
            <Icon type="ellipsis" @click="handleOpen" />
          </template>
        </Popover>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import { reactive, watch } from 'vue'
export default {
  setup(props, { emit }) {
    const state = reactive({
      visible: false
    })
    const handleOpen = () => {
      state.visible = true
    }
    return {
      state,
      handleOpen
    }
  }
}
</script>

<style scoped></style>
