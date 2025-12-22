function onScroll() {
  const header = document.getElementById("header")
  if (!header) {
    return
  }

  const isScrolled = header.classList.contains("scrolled")
  const scrollY = window.scrollY

  // Use hysteresis to prevent jitter on mobile when slowly scrolling near the top
  if (isScrolled) {
    // Only remove scrolled class when we're definitely back at the top
    if (scrollY <= 0) {
      header.classList.remove("scrolled")
    }
  } else {
    // Add scrolled class once we've scrolled a bit past the threshold
    if (scrollY > 5) {
      header.classList.add("scrolled")
    }
  }
}

document.addEventListener("scroll", onScroll, { passive: true })
document.addEventListener("DOMContentLoaded", onScroll)
document.addEventListener("astro:after-swap", onScroll)
