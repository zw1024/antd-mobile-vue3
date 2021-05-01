<template>
  <div :class="wrapCls">
    <div className="{`${prefixCls}-left`}" role="button" onClick="{onLeftClick}">
      {icon ? (
      <span className="{`${prefixCls}-left-icon`}" aria-hidden="true"> {icon} </span>
      ) : null} {leftContent}
    </div>
    <div className="{`${prefixCls}-title`}">{children}</div>
    <div className="{`${prefixCls}-right`}">{rightContent}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { PropType } from 'vue'
type NavBarMode = PropType<'dark' | 'light'>

export default defineComponent({
  name: 'NavBar',
  props: {
    prefixCls: {
      type: String,
      default: 'am-wingblank'
    },
    mode: {
      type: String as NavBarMode,
      default: 'lg',
      validator: (val: string) => {
        return ['md', 'small', 'lg'].includes(val)
      }
    }
  },
  setup(props) {
    const wrapCls = computed(() => {
      return [`${props.prefixCls}`, props.mode ? `${props.prefixCls}-${props.mode}` : '']
    })

    return {
      wrapCls
    }
  }
})
const classnames = ({ props }) => {
  return computed(() => {
    return [`${props.prefixCls}`, props.size ? `${props.prefixCls}-${props.size}` : '']
  })
}
</script>
