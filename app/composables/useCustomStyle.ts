export const useCustomStyle = () => {
  // Because of the shadow DOM, we need to use this workaround to apply styles
  onMounted(async () => {
    await nextTick()
    const cards = document.querySelectorAll('nord-card')
    cards.forEach((card) => {
      // @ts-expect-error possibly undefined
      card.shadowRoot.querySelector('.n-card').style.cssText = `
        background-color: light-dark(rgba(255, 255, 255, 0.6), rgba(0, 0, 0, 0.6));
        backdrop-filter: blur(4px);
      `
    })
  })
}
