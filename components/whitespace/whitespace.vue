<template>
    <div :class="wrapCls">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
    import { computed, defineComponent } from 'vue'
    import { PropType } from 'vue'
    type WhiteSpaceSize = PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>

    export default defineComponent({
        name: 'WhiteSpace',
        props: {
            prefixCls: {
                type: String,
                default: 'am-whitespace'
            },
            size: {
                type: String as WhiteSpaceSize,
                default: 'md',
                validator: (val: string) => {
                    return ['xs','sm','md','lg','xl'].includes(val)
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

</script>
