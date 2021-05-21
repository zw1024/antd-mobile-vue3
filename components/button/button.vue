<template>
  <a :type="type" :class="classes" v-feedback="{ activeClass: activeClass, disabled: disabled }" @click="handleClick">
    <icon :class="iconClass" aria-hidden="true" v-if="icon || loading" :type="loading ? 'loading' : icon" :size="size === 'small' ? 'xxs' : 'md'"></icon>
    <span><slot></slot></span>
  </a>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import { PropType } from 'vue'
import feedback from '../feedback/index'

type IButtonType = PropType<'primary' | 'ghost' | 'warning'>
type IButtonSize = PropType<'large' | 'small'>
export default defineComponent({
  name: 'Button',
  props: {
    prefixCls: {
      type: String,
      default: 'am-button'
    },
    type: {
      type: String as IButtonType,
      default: 'primary',
      validator: (val: string) => {
        return ['primary', 'ghost', 'warning'].includes(val)
      }
    },
    size: {
      type: String as IButtonSize,
      default: 'large',
      validator: (val: string) => {
        return ['large', 'small'].includes(val)
      }
    },
    icon: {
      type: String,
      default: ''
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
    loading: Boolean,
    inline: Boolean,
    disabled: Boolean
  },
  emits: ['click'],
  directives: { feedback: feedback },
  setup(props, ctx) {
    const { prefixCls, activeClassName, activeStyle, type, size, inline, disabled, loading, icon } = toRefs(props)
    const iconClass = computed(() => {
      return [`${prefixCls.value}-icon`]
    })
    const classes = computed(() => {
      return {
        [`${prefixCls.value}`]: true,
        [`${prefixCls.value}-primary`]: type.value === 'primary',
        [`${prefixCls.value}-ghost`]: type.value === 'ghost',
        [`${prefixCls.value}-warning`]: type.value === 'warning',
        [`${prefixCls.value}-small`]: size.value === 'small',
        [`${prefixCls.value}-inline`]: inline.value,
        [`${prefixCls.value}-disabled`]: disabled.value,
        [`${prefixCls.value}-loading`]: loading.value,
        [`${prefixCls.value}-icon`]: icon.value || loading.value
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
      classes,
      iconClass,
      activeClass,
      handleClick
    }
  }
})
</script>
