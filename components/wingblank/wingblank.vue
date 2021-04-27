<template>
    <div :class="wrapCls">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
    import { computed, defineComponent } from 'vue'
    import { PropType } from 'vue'
    type WingblankSize = PropType<'sm' | 'md' | 'lg'>

    export default defineComponent({
        name: 'WingBlank',
        props: {
            prefixCls: {
                type: String,
                default: 'am-wingblank'
            },
            size: {
                type: String as WingblankSize,
                default: 'lg',
                validator: (val: string) => {
                    return ['md', 'small', 'lg'].includes(val)
                }
            }
        },
        setup(props) {
            const wrapCls = computed(() => {
                return [
                    `${props.prefixCls}`,
                    props.size ? `${props.prefixCls}-${props.size}` : ''
                ]
            })

            return {
                wrapCls
            }
        }
    })
    const classnames = ({ props }) => {
        return computed(() => {
            return [
                `${props.prefixCls}`,
                props.size ? `${props.prefixCls}-${props.size}` : ''
             ]
        })
    }
</script>
