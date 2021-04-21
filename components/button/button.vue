<template>
    <a
            :type="type"
            :class="classes"
            v-feedback="{'activeClass': activeClass,'disabled':disabled}"
            @click="handleClick">
        <icon :class=iconClass aria-hidden="true" v-if="icon || loading" :type="loading ? 'loading':icon" :size="size === 'small' ? 'xxs' : 'md'" ></icon>
        <span><slot></slot></span>
    </a>
</template>

<script lang='ts'>
    import { computed, defineComponent } from 'vue'
    import { PropType } from 'vue'
    import feedback from '../feedback/index'
    type IButtonType = PropType<'primary' | 'ghost' | 'warning'>
    type IButtonSize = 'large' | 'small'

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
                    return [
                        'primary',
                        'ghost',
                        'warning'
                    ].includes(val)
                },
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
                default: '',
            },
            loading: Boolean,
            inline: Boolean,
            disabled: Boolean
        },
        emits: ['click'],
        directives: { feedback: feedback },
        setup(props, ctx) {
            const buttonSize = computed(() => {
                return props.size
            })
            const buttonDisabled = computed(() => {
                return props.disabled
            })
            const iconClass = computed(() => {
                return [
                    `${props.prefixCls}-${'icon'}`
                ]
            })
            const classes = classnames({
                props,
                size: props.size,
                disabled: props.disabled
            })
            const activeClass =  computed (() =>{
                return props.activeClassName || (props.activeStyle !== false ? `${props.prefixCls}-active` : undefined)
            })
            //methods
            const handleClick = evt => {
                ctx.emit('click', evt)
            }

            return {
                buttonSize,
                buttonDisabled,
                classes,
                iconClass,
                activeClass,
                handleClick,
            }
        }
    })
    const classnames = ({ props, size, disabled }) => {
        return computed(() => {
            return {
                [`${props.prefixCls}`]: true,
                [`${props.prefixCls}-primary`]: props.type === 'primary',
                [`${props.prefixCls}-ghost`]: props.type === 'ghost',
                [`${props.prefixCls}-warning`]: props.type === 'warning',
                [`${props.prefixCls}-small`]: props.size === 'small',
                [`${props.prefixCls}-inline`]: props.inline,
                [`${props.prefixCls}-disabled`]: props.disabled,
                [`${props.prefixCls}-loading`]: props.loading,
                [`${props.prefixCls}-icon`]: props.icon || props.loading
            }
        })
    }
</script>
