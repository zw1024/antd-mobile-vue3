import { Idirection, Iwrap, Ijustify, Ialign } from './PropsType'
import { defineComponent, PropType, h } from 'vue'
interface IFlexProps {
  prefixCls: string
  direction: string
  wrap: string
  justify: string
  align: string
  alignContent: string
  disabled: boolean
}
export default defineComponent({
  name: 'Flex',
  props: {
    prefixCls: {
      type: String,
      default: 'am-flexbox'
    },
    direction: {
      type: String as PropType<Idirection>,
      validator(val: string): boolean {
        return ['row', 'row-reverse', 'column', 'column-reverse'].includes(val)
      },
      default: 'row'
    },
    wrap: {
      type: String as PropType<Iwrap>,
      validator(val: string): boolean {
        return ['nowrap', 'wrap', 'wrap-reverse'].includes(val)
      },
      default: 'nowrap'
    },
    justify: {
      type: String as PropType<Ijustify>,
      validator(val: string): boolean {
        return ['start', 'end', 'center', 'between', 'around'].includes(val)
      },
      default: 'start'
    },
    align: {
      type: String as PropType<Ialign>,
      validator(val: string): boolean {
        return ['start', 'center', 'end', 'baseline', 'stretch'].includes(val)
      },
      default: 'center'
    },
    alignContent: {
      type: String as PropType<Ialign>,
      validator(val: string): boolean {
        return ['start', 'center', 'end', 'baseline', 'stretch'].includes(val)
      },
      default: 'center'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props:IFlexProps, { slots }) {
    return () => {
      const wrapCls = {
        [`${props.prefixCls}`]: true,
        [`${props.prefixCls}-dir-row`]: props.direction === 'row',
        [`${props.prefixCls}-dir-row-reverse`]: props.direction === 'row-reverse',
        [`${props.prefixCls}-dir-column`]: props.direction === 'column',
        [`${props.prefixCls}-dir-column-reverse`]: props.direction === 'column-reverse',

        [`${props.prefixCls}-nowrap`]: props.wrap === 'nowrap',
        [`${props.prefixCls}-wrap`]: props.wrap === 'wrap',
        [`${props.prefixCls}-wrap-reverse`]: props.wrap === 'wrap-reverse',

        [`${props.prefixCls}-justify-start`]: props.justify === 'start',
        [`${props.prefixCls}-justify-end`]: props.justify === 'end',
        [`${props.prefixCls}-justify-center`]: props.justify === 'center',
        [`${props.prefixCls}-justify-between`]: props.justify === 'between',
        [`${props.prefixCls}-justify-around`]: props.justify === 'around',

        [`${props.prefixCls}-align-start`]: props.align === 'start',
        [`${props.prefixCls}-align-center`]: props.align === 'center',
        [`${props.prefixCls}-align-end`]: props.align === 'end',
        [`${props.prefixCls}-align-baseline`]: props.align === 'baseline',
        [`${props.prefixCls}-align-stretch`]: props.align === 'stretch',

        [`${props.prefixCls}-align-content-start`]: props.alignContent === 'start',
        [`${props.prefixCls}-align-content-end`]: props.alignContent === 'end',
        [`${props.prefixCls}-align-content-center`]: props.alignContent === 'center',
        [`${props.prefixCls}-align-content-between`]: props.alignContent === 'between',
        [`${props.prefixCls}-align-content-around`]: props.alignContent === 'around',
        [`${props.prefixCls}-align-content-stretch`]: props.alignContent === 'stretch'
      }
      return <div class={wrapCls}>{slots}</div>
    }
  }
})
