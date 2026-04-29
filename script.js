// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  mobileMenu.classList.toggle("active")
}

// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      // Close other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active")
        }
      })

      // Toggle current item
      item.classList.toggle("active")
    })
  })

  // Product Category Filter
  const categoryBtns = document.querySelectorAll(".product-category-btn")

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
    })
  })

  // Form Submission
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Simple validation
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value

      if (!name || !email || !message) {
        alert("Veuillez remplir tous les champs obligatoires.")
        return
      }

      // Simulate form submission
      alert("Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.")
      contactForm.reset()
    })
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Header scroll effect
  let lastScroll = 0
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 100) {
      header.style.boxShadow = "0 4px 6px rgba(0,0,0,0.07)"
    } else {
      header.style.boxShadow = "none"
    }

    lastScroll = currentScroll
  })
})
