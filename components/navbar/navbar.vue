<template>
  <div :class="wrapCls">
    <div :class="`${prefixCls}-left`" role="button" @click="handleLeftClick">
      <span :class="`${prefixCls}-left-icon`"> <slot name="icon" /> </span>
      <slot name="leftContent" />
    </div>
    <div :class="`${prefixCls}-title`"><slot /></div>
    <div :class="`${prefixCls}-right`"><slot name="rightContent" /></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { PropType } from 'vue'
type NavBarMode = PropType<'dark' | 'light'>

export default defineComponent({
  name: 'NavBar',
  props: {
    prefixCls: {
      type: String,
      default: 'am-navbar'
    },
    mode: {
      type: String as NavBarMode,
      default: 'dark',
      validator: (val: string) => {
        return ['dark', 'light'].includes(val)
      }
    }
  },
  emits: ['on-left-click'],
  setup(props, { emit }) {
    const wrapCls = computed(() => {
      return [`${props.prefixCls}`, `${props.prefixCls}-${props.mode}`]
    })
    function handleLeftClick() {
      emit('on-left-click')
    }
    return {
      handleLeftClick,
      wrapCls
    }
  }
})
</script>
