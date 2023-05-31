export const getTheme = (): ThemeType => {
  toggleTheme('light')
  return 'light'
}

export const toggleTheme = (theme: ThemeType) => {
  theme === 'light'
    ? document.documentElement.classList.remove('dark')
    : document.documentElement.classList.add('dark')
}
