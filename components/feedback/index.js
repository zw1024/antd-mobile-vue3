let passiveSupported = false
try {
  var options = Object.defineProperty({}, 'passive', {
    get: function () {
      passiveSupported = true
    }
  })
  window.addEventListener('test', null, options)
} catch (err) {}

function addClass (event) {
  const el = event.currentTarget
  const className = event.currentTarget.getAttribute('data-active-class')
  el.classList.add(className)
}

function removeClass (event) {
  const el = event.currentTarget
  const className = event.currentTarget.getAttribute('data-active-class')
  el.classList.remove(className)
}

function feedback (el, className, option) {
  el.setAttribute('data-active-class', className)
  if (option === 'add') {
    el.addEventListener('mousedown', addClass, passiveSupported ? { passive: true } : false)
    el.addEventListener('touchstart', addClass, passiveSupported ? { passive: true } : false)
    el.addEventListener('touchcancel', removeClass, passiveSupported ? { passive: true } : false)
    el.addEventListener('touchend', removeClass, passiveSupported ? { passive: true } : false)
    el.addEventListener('mouseup', removeClass, passiveSupported ? { passive: true } : false)
  } else if (option === 'remove') {
    el.removeEventListener('mousedown', addClass, passiveSupported ? { passive: true } : false)
    el.removeEventListener('touchstart', addClass, passiveSupported ? { passive: true } : false)
    el.removeEventListener('touchcancel', removeClass, passiveSupported ? { passive: true } : false)
    el.removeEventListener('touchend', removeClass, passiveSupported ? { passive: true } : false)
    el.removeEventListener('mouseup', removeClass, passiveSupported ? { passive: true } : false)
  }
}

export default {
  beforeMount (el, binding) {
    const className = binding.value.activeClass
    const disabled = !!binding.value.disabled
    if (!disabled) {
      feedback(el, className, 'add')
    }
  },
  updated (el, binding) {
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
  unbind (el, binding) {
    const className = binding.value.activeClass
    feedback(el, className, 'remove')
  }
}



