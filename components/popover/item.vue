<template>
  <div v-feedback="{ activeClass: activeClass, disabled: disabled }" :class="cls">
    <div :class="`${prefixCls}-item-container`">
      <span :class="`${prefixCls}-item-icon`" aria-hidden="true">
        <slot name="icon" />
      </span>
      <span :class="`${prefixCls}-item-content`"><slot /></span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import feedback from '../feedback'

export default defineComponent({
  name: 'PopoverItem',
  props: {
    prefixCls: {
      type: String,
      default: 'am-popover'
    },
    activeClassName: {
      type: String,
      default: ''
    },
    activeStyle: {
      type: [Object, Boolean],
      default: () => {
        return {}
      }
    },
    disabled: Boolean
  },
  directives: { feedback: feedback },
  setup(props, ctx) {
    const { prefixCls, activeClassName, activeStyle, disabled } = toRefs(props)
    const iconClass = computed(() => {
      return [`${prefixCls.value}-icon`]
    })
    const cls = computed(() => {
      return {
        [`${prefixCls.value}-item`]: true,
        [`${prefixCls.value}-disabled`]: disabled.value
      }
    })
    const activeClass = computed(() => {
      return activeClassName.value || (activeStyle.value !== false ? `${prefixCls.value}-active` : undefined)
    })
    //methods
    const handleClick = (evt: Event) => {
      ctx.emit('click', evt)
    }
    return {
      cls,
      activeClass,
      handleClick
    }
  }
})
</script>

<style scoped></style>
