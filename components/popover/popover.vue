<template>
  <div>
    <div>
      <tooltip :placement="placement" :visible="visible" @update="update" :mask="mask">
        <template v-slot:outlet>
          <slot name="outlet"></slot>
        </template>
        <template v-slot:tooltip>
          <slot name="tooltip"></slot>
        </template>
      </tooltip>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs, reactive, watch } from 'vue'
import { PropType } from 'vue'
type IPlacement = PropType<'left' | 'right' | 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'>

export default defineComponent({
  name: 'Popover',
  props: {
    prefixCls: {
      type: String,
      default: 'am-popover'
    },
    placement: {
      type: String as IPlacement,
      default: 'right',
      validator: (val: string) => {
        return ['left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'].includes(val)
      }
    },
    visible: Boolean,
    mask: Boolean
  },
  emits: ['update:visible'],
  setup(props, { emit }) {
    const state = reactive({
      showMask: false
    })
    const { prefixCls } = toRefs(props)
    const cls = computed(() => {
      return {
        [`${prefixCls.value}-inner-wrapper`]: true
      }
    })
    const itemCls = computed(() => {
      return {
        // [`${prefixCls.value}-inner-wrapper`]: true
      }
    })
    const update = () => {
      emit('update:visible', false)
    }
    return {
      state,
      cls,
      update,
      itemCls
    }
  }
})
</script>
