<template>
    <a
            :type="type"
            :class="classes"
            v-feedback="{'activeClass': activeClass,'disabled':disabled}"
            @click="handleClick">
        <span><slot></slot></span>
    </a>
</template>

<script lang='ts'>
    import { computed, defineComponent } from 'vue'
    import { PropType } from 'vue'
    import feedback from '../feedback/index'
    type IButtonType = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'>
    type IButtonNativeType = PropType<'button' | 'submit' | 'reset'>
    type IButtonSize = 'large' | 'normal' | 'small' | 'mini';

    interface IButtonProps {
        type: string
        size: string
        icon: string
        nativeType: string
        loading: boolean
        disabled: boolean
        plain: boolean
        autofocus: boolean
        round: boolean
        circle: boolean
    }


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
                        'default',
                        'primary',
                        'success',
                        'warning',
                        'info',
                        'danger',
                        'text',
                    ].includes(val)
                },
            },
            size: {
                type: String as IButtonSize,
                default: 'button',
                validator: (val: string) => {
                    return ['button', 'submit', 'reset'].includes(val)
                },
            },
            icon: {
                type: String,
                default: '',
            },
            nativeType: {
                type: String as IButtonNativeType,
                default: 'button',
                validator: (val: string) => {
                    return ['button', 'submit', 'reset'].includes(val)
                },
            },
            loading: Boolean,
            disabled: Boolean,
            plain: Boolean,
            autofocus: Boolean,
            round: Boolean,
            circle: Boolean,
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
            const classes = useClasses({
                props,
                size: buttonSize,
                disabled: buttonDisabled
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
                activeClass,
                handleClick,
            }
        }
    })
    const useClasses = ({ props, size, disabled }) => {
        return computed(() => {
            return {
                'am-button': true,
                [`${props.prefixCls}-primary`]: props.type === 'primary',
                [`${props.prefixCls}-ghost`]: props.type === 'ghost',
                [`${props.prefixCls}-warning`]: props.type === 'warning',
                [`${props.prefixCls}-small`]: props.size === 'small',
                [`${props.prefixCls}-inline`]: props.inline,
                [`${props.prefixCls}-disabled`]: props.disabled,
                [`${props.prefixCls}-loading`]: props.loading
            }
        })
    }
</script>
