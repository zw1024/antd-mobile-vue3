<template>
    <svg :class="iconClass"  :style="{fill: color}">
        <use :xlink:href="`#${type}`"/>
    </svg>
</template>

<script lang='ts'>
    import loadSprite from './load-spirte.js'
    import { computed, defineComponent } from 'vue'
    import { PropType } from 'vue'
    type IconSize = PropType<'xxs' | 'xs' | 'sm' | 'md' | 'lg'>

    export default defineComponent({
        name: 'Icon',
        props: {
            prefixCls: {
                type: String,
                default: 'am-icon'
            },
            type: {
                type: String,
                default: ''
            },
            size: {
                type: String as IconSize,
                default: 'md',
                validator: (val: string) => {
                    return ['md', 'small'].includes(val)
                }
            },
            color: {
                type: String,
                default: '',
            }
        },
        setup(props, ctx) {
            loadSprite()
            const iconClass = classnames({
                props
            })

            return {
                iconClass
            }
        }
    })
    const classnames = ({ props }) => {
        return computed(() => {
            return [
                `${props.prefixCls}`,
                props.type ? `${props.prefixCls}-${props.type}` : '',
                props.size ? `${props.prefixCls}-${props.size}` : ''
             ]
        })
    }
</script>
