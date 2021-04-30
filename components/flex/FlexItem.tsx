
import {defineComponent, h} from "vue";

export default defineComponent({
  name: 'FlexItem',
  props: {
    prefixCls: {
      type: String,
      default: 'am-flexbox'
    }
  },
  setup(props, {slots}) {
    return () => {
      const wrapCls = [`${props.prefixCls}-item`]
      return (
          <div class={wrapCls}>
            {slots.default}
          </div>
      )
    }
  }
})
