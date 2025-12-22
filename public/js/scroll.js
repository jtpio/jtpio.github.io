function onScroll() {
  const header = document.getElementById("header")
  if (!header) {
    return
  }

  header.classList.toggle("scrolled", window.scrollY > 0)
}

document.addEventListener("scroll", onScroll, { passive: true })
document.addEventListener("DOMContentLoaded", onScroll)
document.addEventListener("astro:after-swap", onScroll)
