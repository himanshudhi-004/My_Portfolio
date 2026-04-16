export const initStyleSwitcher = () => {
  // Initialize with default color
  const defaultColor = localStorage.getItem('selectedColor') || 'color-1'
  setActiveStyle(defaultColor)
}

export const setActiveStyle = (color) => {
  const alternateStyles = document.querySelectorAll('.alternate-style')
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute('title')) {
      style.removeAttribute('disabled')
      localStorage.setItem('selectedColor', color)
    } else {
      style.setAttribute('disabled', 'true')
    }
  })
}

export const toggleTheme = () => {
  document.body.classList.toggle('dark')
  const isDark = document.body.classList.contains('dark')
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
  return isDark
}

export const initTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    document.body.classList.add('dark')
  }
}