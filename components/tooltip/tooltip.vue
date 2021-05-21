<template>
  <div class="hsy-tooltip" ref="el">
    <div class="outlet">
      <slot name="outlet"></slot>
    </div>
    <div class="tooltip am-popover" :style="tooltipStyle">
      <div class="inner am-popover-inner">
        <div class="am-popover-inner-wrapper" @click="hide">
          <slot name="tooltip"></slot>
        </div>
      </div>
      <div class="arrow" :style="state.arrowStyle"></div>
    </div>
    <teleport to="body">
      <div class="mask" v-show="state.showMask" @click="mask"></div>
    </teleport>
  </div>
</template>

<script>
import { reactive, defineComponent, toRefs, computed, ref, watch } from 'vue'
const EMPTY_FN = () => {}
export default defineComponent({
  name: 'Tooltip',
  props: {
    // top|top-left|top-right
    // right|right-top|right-bottom
    // bottom|bottom-left|bottom-right
    // left|left-top|left-bottom
    placement: {
      type: String,
      default: 'top'
    },
    minWidth: {
      type: Number,
      default: 0
    },
    maxWidth: {
      type: Number,
      default: 0
    },
    nowrap: {
      type: Boolean,
      default: true
    },
    arrowWidth: {
      type: Number,
      default: 10
    },
    arrowHeight: {
      type: Number,
      default: 6
    },
    visible: Boolean,
    mask: Boolean
  },
  emits: ['update'],
  setup(props, { emit }) {
    const el = ref(null)
    const state = reactive({
      arrowStyle: {},
      isShowing: false,
      showMask: false
    })
    const { placement, minWidth, maxWidth, nowrap, arrowWidth, arrowHeight } = toRefs(props)
    const tooltipStyle = computed(() => {
      let s = {}
      if (minWidth > 0) {
        s.minWidth = minWidth + 'px'
      }
      if (maxWidth > 0) {
        s.maxWidth = maxWidth + 'px'
      }
      if (nowrap) {
        s.whiteSpace = 'nowrap'
      }
      return s
    })
    const outletEl = computed(() => {
      return el.value.querySelector('.outlet')
    })
    const outletInnerEl = computed(() => {
      return el.value.querySelector('.outlet > *')
    })
    const tooltipEl = computed(() => {
      return el.value.querySelector('.tooltip')
    })
    const updateArrowStyle = () => {
      let s = {}
      let tooltipRect = rect(tooltipEl.value)
      // top|bottom
      if (placement.value.toLowerCase().indexOf('top') === 0 || placement.value.toLowerCase().indexOf('bottom') === 0) {
        if (placement.value.toLowerCase().indexOf('top') === 0) {
          s.borderTopColor = 'rgba(256, 256, 256, 1)'
          s.borderLeftColor = 'transparent'
          s.borderRightColor = 'transparent'
          s.borderBottomColor = 'transparent'
          s.borderLeftWidth = arrowWidth.value / 2
          s.borderRightWidth = s.borderLeftWidth + 'px'
          s.borderLeftWidth += 'px'
          s.borderTopWidth = arrowHeight.value + 'px'
          s.borderBottomWidth = '0px'
          s.bottom = -arrowHeight.value + 'px'
        } else {
          s.borderTopColor = 'transparent'
          s.borderLeftColor = 'transparent'
          s.borderRightColor = 'transparent'
          s.borderBottomColor = 'rgba(256, 256, 256, 1)'
          s.borderLeftWidth = arrowWidth.value / 2
          s.borderRightWidth = s.borderLeftWidth + 'px'
          s.borderLeftWidth += 'px'
          s.borderTopWidth = '0px'
          s.borderBottomWidth = arrowHeight.value + 'px'
          s.top = -arrowHeight.value + 'px'
        }
        if (placement.value.toLowerCase().indexOf('left') !== -1) {
          s.left = arrowWidth.value + 'px'
        } else if (placement.value.toLowerCase().indexOf('right') !== -1) {
          s.right = arrowWidth.value + 'px'
        } else {
          s.left = (tooltipRect.width - arrowWidth.value) / 2 + 'px'
        }
        state.arrowStyle = s
        return
      }
      // left
      if (placement.value.toLowerCase().indexOf('left') === 0 || placement.value.toLowerCase().indexOf('right') === 0) {
        if (placement.value.toLowerCase().indexOf('left') === 0) {
          s.borderTopColor = 'transparent'
          s.borderLeftColor = 'rgba(0, 0, 0, 1)'
          s.borderRightColor = 'transparent'
          s.borderBottomColor = 'transparent'
          s.borderLeftWidth = arrowHeight + 'px'
          s.borderRightWidth = '0px'
          s.borderTopWidth = arrowWidth / 2
          s.borderBottomWidth = s.borderTopWidth + 'px'
          s.borderTopWidth += 'px'
          s.right = -arrowHeight + 'px'
        } else {
          s.borderTopColor = 'transparent'
          s.borderLeftColor = 'transparent'
          s.borderRightColor = 'rgba(0, 0, 0, 1)'
          s.borderBottomColor = 'transparent'
          s.borderLeftWidth = '0px'
          s.borderRightWidth = arrowHeight + 'px'
          s.borderTopWidth = arrowWidth / 2
          s.borderBottomWidth = s.borderTopWidth + 'px'
          s.borderTopWidth += 'px'
          s.left = -arrowHeight + 'px'
        }
        if (placement.value.toLowerCase().indexOf('top') !== -1 && tooltipRect.height > 30) {
          s.top = arrowWidth + 'px'
        } else if (placement.value.toLowerCase().indexOf('bottom') !== -1 && tooltipRect.height > 30) {
          s.bottom = arrowWidth + 'px'
        } else {
          s.top = (tooltipRect.height - arrowWidth) / 2 + 'px'
        }
        state.arrowStyle = s
        return
      }
    }
    const place = () => {
      let containerRect = el.value.getBoundingClientRect()
      let outletInnerRect = outletInnerEl.value.getBoundingClientRect()
      let tooltipRect = rect(tooltipEl.value)
      // top|bottom
      if (placement.value.toLowerCase().indexOf('top') === 0 || placement.value.toLowerCase().indexOf('bottom') === 0) {
        let top
        let left
        if (placement.value.toLowerCase().indexOf('top') === 0) {
          top = outletInnerRect.top - containerRect.top - tooltipRect.height - arrowHeight - 5 + 'px'
        } else {
          top = outletInnerRect.bottom - containerRect.top + arrowHeight + 5 + 'px'
        }
        if (placement.value.toLowerCase().indexOf('left') !== -1) {
          left = outletInnerRect.left - containerRect.left + 'px'
        } else if (placement.value.toLowerCase().indexOf('right') !== -1) {
          left = outletInnerRect.right - containerRect.left - tooltipRect.width + 'px'
        } else {
          left = outletInnerRect.left - containerRect.left + (outletInnerRect.width - tooltipRect.width) / 2 + 'px'
        }
        tooltipEl.value.style.top = top
        tooltipEl.value.style.left = left
        return
      }
      // left
      if (placement.value.toLowerCase().indexOf('left') === 0 || placement.value.toLowerCase().indexOf('right') === 0) {
        let top
        let left
        if (placement.value.toLowerCase().indexOf('left') === 0) {
          left = outletInnerRect.left - containerRect.left - tooltipRect.width - arrowHeight - 5 + 'px'
        } else {
          left = outletInnerRect.right - containerRect.left + arrowHeight + 5 + 'px'
        }
        if (placement.value.toLowerCase().indexOf('top') !== -1) {
          top = outletInnerRect.top - containerRect.top + 'px'
        } else if (placement.value.toLowerCase().indexOf('bottom') !== -1) {
          top = outletInnerRect.bottom - containerRect.top - tooltipRect.height + 'px'
        } else {
          top = outletInnerRect.top - containerRect.top + (outletInnerRect.width - tooltipRect.width) / 2 + 'px'
        }
        tooltipEl.value.style.top = top
        tooltipEl.value.style.left = left
        return
      }
    }
    const rect = (el) => {
      let rect = el.getBoundingClientRect()
      if (rect.width !== 0 || rect.height !== 0) {
        return rect
      }
      let style = window.getComputedStyle(el)
      let display = style.getPropertyValue('display')
      let top = style.getPropertyValue('top')
      let left = style.getPropertyValue('left')
      el.style.top = '-1000px'
      el.style.left = '-1000px'
      el.style.display = 'block'
      rect = el.getBoundingClientRect()
      el.style.display = display
      el.style.top = top
      el.style.left = left
      return rect
    }
    const show = () => {
      if (state.isShowing) return
      state.isShowing = true
      state.showMask = props.mask
      tooltipEl.value.style.display = 'block'
      updateArrowStyle()
      place()
    }
    const hide = () => {
      if (!state.isShowing) return
      tooltipEl.value.style.display = 'none'
      state.isShowing = false
      state.showMask = false
      emit('update')
    }
    const mask = (event) => {
      console.log(10)
      event.preventDefault()
      event.stopPropagation()
    }
    watch(
      () => props.visible,
      (value) => {
        if (value) {
          show()
        } else {
          hide()
        }
      }
    )
    return {
      state,
      tooltipStyle,
      outletEl,
      outletInnerEl,
      tooltipEl,
      updateArrowStyle,
      show,
      hide,
      mask,
      el
    }
  }
})
</script>

<style>
.hsy-tooltip {
  position: relative;
  font: 10px 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif;
}
.hsy-tooltip > .outlet,
.hsy-tooltip > .tooltip {
  font-size: 1.4em;
}
.hsy-tooltip > .tooltip {
  display: none;
  position: absolute;
  color: #fff;
  border-radius: 5px;
  border: 0px;
  outline: none;
  z-index: 1000;
}
.hsy-tooltip .arrow {
  position: absolute;
  width: 0px;
  height: 0px;
  border-style: solid;
}
.mask {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  z-index: 999;
}
</style>
