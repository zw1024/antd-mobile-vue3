import type { DirectiveBinding, ObjectDirective } from 'vue'
let passiveSupported = false
try {
  const options = Object.defineProperty({}, 'passive', {
    get: function () {
      passiveSupported = true
    }
  })
  window.addEventListener('test', function () {}, options)
} catch (err) {
  console.log(err)
}

function addClass(event: Event) {
  const el = event.currentTarget as HTMLElement
  const className = el.getAttribute('data-active-class')
  el.classList.add(className || '')
}

function removeClass(event: Event) {
  const el = event.currentTarget as HTMLElement
  const className = el.getAttribute('data-active-class')
  el.classList.remove(className || '')
}

function feedback(el: HTMLElement, className: string, option: string) {
  el.setAttribute('data-active-class', className)
  if (option === 'add') {
    el.addEventListener('mousedown', addClass, passiveSupported ? { passive: true } : false)
    el.addEventListener('touchstart', addClass, passiveSupported ? { passive: true } : false)
    el.addEventListener('touchcancel', removeClass, passiveSupported ? { passive: true } : false)
    el.addEventListener('touchend', removeClass, passiveSupported ? { passive: true } : false)
    el.addEventListener('mouseup', removeClass, passiveSupported ? { passive: true } : false)
  } else if (option === 'remove') {
    el.removeEventListener('mousedown', addClass, passiveSupported ? { capture: true } : false)
    el.removeEventListener('touchstart', addClass, passiveSupported ? { capture: true } : false)
    el.removeEventListener('touchcancel', removeClass, passiveSupported ? { capture: true } : false)
    el.removeEventListener('touchend', removeClass, passiveSupported ? { capture: true } : false)
    el.removeEventListener('mouseup', removeClass, passiveSupported ? { capture: true } : false)
  }
}
const VFeedback: ObjectDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    const className = binding.value.activeClass
    const disabled = !!binding.value.disabled
    if (!disabled) {
      feedback(el, className, 'add')
    }
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    const className = binding.value.activeClass
    const disabled = !!binding.value.disabled
    const oldDisabled = !!binding.oldValue.disabled
    if (oldDisabled !== disabled) {
      if (disabled) {
        feedback(el, className, 'remove')
      } else {
        feedback(el, className, 'add')
      }
    }
  },
  unmounted(el: HTMLElement, binding: DirectiveBinding) {
    const className = binding.value.activeClass
    feedback(el, className, 'remove')
  }
}
export default VFeedback
