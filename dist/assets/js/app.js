// modal
const modal = {
  el: document.querySelector(".modal-overlay"),
  activeModal: null,

  init() {
    this.setupTriggers();
    this.setupOutsideClick();
  },

  setupTriggers() {
    const triggers = document.querySelectorAll("[data-modal]");
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const modalName = trigger.dataset.modal;
        if (modalName === "close") {
          this.close();
        } else {
          this.open(modalName);
        }
      });
    });
  },

  setupOutsideClick() {
    this.el.addEventListener("click", (event) => {
      if (event.target === this.el) {
        this.close();
      }
    });
  },

  open(name) {
    const targetModal = this.el.querySelector(`[data-template="${name}"]`);

    if (targetModal) {
      this.close(true); // Close any currently active modal
      this.activeModal = targetModal;

      this.el.style.display = "flex"; // Show the overlay
      requestAnimationFrame(() => {
        this.el.classList.add("show"); // Animate overlay
        this.activeModal.style.display = "flex"; // Show modal content

        // Add animation class to modal content
        requestAnimationFrame(() => {
          this.activeModal.classList.add("show");
        });
      });
    } else {
      console.error(`Modal with name "${name}" not found.`);
    }
  },

  close(onlyModal = false) {
    if (onlyModal) {
      if (this.activeModal) {
        this.activeModal.style.display = "none"; // Fully hide modal content
        this.activeModal.classList.remove("show"); // Hide modal content
      }
    } else {
      if (this.activeModal) {
        this.activeModal.classList.remove("show"); // Hide modal content
        const modalToHide = this.activeModal; // Preserve reference for timeout
        this.activeModal = null;

        setTimeout(() => {
          modalToHide.style.display = "none"; // Fully hide after animation
        }, 250); // Match the CSS animation duration
      }

      this.el.classList.remove("show"); // Animate overlay
      this.el.addEventListener(
        "transitionend",
        () => {
          if (!this.el.classList.contains("show")) {
            this.el.style.display = "none"; // Fully hide overlay
          }
        },
        { once: true }
      );
    }
  },
};
modal.init();

// header
const header = document.querySelector(".header");
if (header) {
  const menu = header.querySelector(".header__menu");
  const services = menu.querySelectorAll(".menu-item-has-children");
  const catalog = header.querySelector(".header__catalog");
  const btnCatalog = header.querySelector(".btn-catalog");
  let lastScrollY = window.scrollY;

  if (window.innerWidth > 1024) {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling Down
        header.classList.remove("up");
        header.classList.add("down");
      } else {
        // Scrolling Up
        header.classList.remove("down");
        header.classList.add("up");
      }

      header.classList.toggle("sticky", currentScrollY > 0);
      lastScrollY = currentScrollY;
    });
  }

  services.forEach((service) => {
    const subMenu = service.querySelector(".sub-menu");

    service.addEventListener("mouseenter", () => {
      subMenu.style.display = "flex"; // Ensure the submenu is visible

      setTimeout(() => {
        subMenu.dataset.state = "active";
      }, 10);
    });

    service.addEventListener("mouseleave", () => {
      subMenu.dataset.state = "inactive";

      subMenu.addEventListener("transitionend", function handler(event) {
        if (subMenu.dataset.state != "active") {
          subMenu.style.display = "none"; // Hide after fade-out
          subMenu.removeEventListener("transitionend", handler);
        }
      });
    });
  });

  const outsideClickHandler = (event) => {
    if (!header.contains(event.target)) {
      catalog.classList.remove("show");
      btnCatalog.classList.remove("active");

      catalog.addEventListener("transitionend", function handler(event) {
        if (
          event.propertyName === "transform" &&
          !catalog.classList.contains("show")
        ) {
          catalog.style.display = "none";
          catalog.removeEventListener("transitionend", handler);
        }
      });
    }
  };

  btnCatalog.addEventListener("click", () => {
    btnCatalog.classList.toggle("active");

    if (btnCatalog.classList.contains("active")) {
      catalog.style.display = "flex";
      btnCatalog.classList.add("active");

      requestAnimationFrame(() => {
        catalog.classList.add("show");
      });

      document.addEventListener("click", outsideClickHandler);
    } else {
      catalog.classList.remove("show");
      btnCatalog.classList.remove("active");

      catalog.addEventListener("transitionend", function handler(event) {
        if (
          event.propertyName === "transform" &&
          !catalog.classList.contains("show")
        ) {
          catalog.style.display = "none";
          catalog.removeEventListener("transitionend", handler);
        }
      });

      document.removeEventListener("click", outsideClickHandler);
    }
  });

  const tabsEl = header.querySelector(".mobile__menu-tabs");
  const tabs = tabsEl.querySelectorAll("[data-toggle]");
  const tabsBody = header.querySelector(".mobile__menu-content");
  const tabsContent = header.querySelector("#menu-content");
  const tabsContentClose = header.querySelector(".mobile__menu-close");
  const tabsContacts = tabsEl.querySelector(".mobile__menu-contacts");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const isActive = tab.classList.contains("active");
      tabs.forEach((tab) => tab.classList.remove("active"));
      tabsContacts.style.maxHeight = 0;

      if (isActive) {
        tabsBody.classList.remove("show");

        // Wait for the animation to finish before setting display to 'none'
        tabsBody.addEventListener("transitionend", function handler(event) {
          if (
            event.propertyName === "transform" &&
            !tabsBody.classList.contains("show")
          ) {
            tabsBody.style.display = "none";
            tabsContent.innerHTML = "";
            tabsBody.removeEventListener("transitionend", handler);
          }
        });
      }

      // If tab was not already active, show the content
      if (!isActive) {
        tab.classList.add("active");

        if (tab.dataset.toggle != "contacts") {
          tabsBody.style.display = "flex";

          requestAnimationFrame(() => {
            tabsBody.classList.add("show");
          });
        } else {
          tabsContacts.style.maxHeight = tabsContacts.scrollHeight + "px";
          tabsBody.classList.remove("show");

          // Wait for the animation to finish before setting display to 'none'
          tabsBody.addEventListener("transitionend", function handler(event) {
            if (
              event.propertyName === "transform" &&
              !tabsBody.classList.contains("show")
            ) {
              tabsBody.style.display = "none";
              tabsContent.innerHTML = "";
              tabsBody.removeEventListener("transitionend", handler);
            }
          });
        }

        if (tab.dataset.toggle == "menu") {
          let html = menu.querySelector(".menu");
          tabsContent.innerHTML = html.outerHTML;
        } else if (tab.dataset.toggle == "catalog") {
          let catalogSections = catalog.querySelectorAll(
            ".header__catalog-section"
          );
          let html = "";
          catalogSections.forEach((section) => {
            html += section.outerHTML;
          });

          tabsContent.innerHTML = html;
        }
      }
    });
  });

  tabsContentClose.addEventListener("click", () => {
    // Add animation for hiding
    tabsBody.classList.remove("show");
    tabsBody.addEventListener("transitionend", function handler(event) {
      if (
        event.propertyName === "transform" &&
        !tabsBody.classList.contains("show")
      ) {
        tabsBody.style.display = "none";
        tabsContent.innerHTML = "";
        tabsBody.removeEventListener("transitionend", handler);
      }
    });

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
  });
}

// init phone mask
const phoneMasks = document.querySelectorAll("input[name='phone']");
phoneMasks.forEach((input) => {
  let keyCode;
  function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    let pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    let matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      newValue = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = newValue.indexOf("_");
    if (i != -1) {
      i < 5 && (i = 3);
      newValue = newValue.slice(0, i);
    }
    let reg = matrix
      .substr(0, this.value.length)
      .replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      })
      .replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (
      !reg.test(this.value) ||
      this.value.length < 5 ||
      (keyCode > 47 && keyCode < 58)
    )
      this.value = newValue;
    if (event.type == "blur" && this.value.length < 5) this.value = "";

    if (this.value.length == 18 || this.value.length == 0) {
      input.dataset.numbervalid = "true";
    } else {
      input.dataset.numbervalid = "false";
    }
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false);
});

// Accordions
const getAccordionParents = document.querySelectorAll("[data-accordion");
getAccordionParents.forEach((parent) => {
  const isMultiple = parent.dataset.multiple;
  const accordions = parent.querySelectorAll(".accordion");
  accordions.forEach((accordion, index, arr) => {
    const header = accordion.querySelector(".accordion__header");
    const body = accordion.querySelector(".accordion__body");
    const content = accordion.querySelector(".accordion__content");

    header.addEventListener("click", () => {
      const isActive = accordion.classList.contains("active");

      if (!isActive) {
        accordion.classList.add("active");
        header.dataset.state = "opened";
        body.style.maxHeight = content.scrollHeight + "px";
      } else {
        accordion.classList.remove("active");
        header.dataset.state = "closed";
        body.style.maxHeight = 0;
      }

      if (!isMultiple || isMultiple == "false") {
        arr.forEach((el) => {
          const header = el.querySelector(".accordion__header");

          if (el !== accordion) {
            el.classList.remove("active");
            header.dataset.state = "closed";
            el.querySelector(".accordion__body").style.maxHeight = 0;
          }
        });
      }
    });
  });
});

// Footer
const currentYear = document.getElementById("current-year");
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// projects
const projects = document.querySelector(".projects.is-main");
if (projects) {
  const filterItems = projects.querySelectorAll(".projects__filter-item");
  const listContainer = projects.querySelector(".projects__list");
  const listItems = Array.from(listContainer.querySelectorAll(".card"));
  const btnMore = projects.querySelector(".btn-more");

  // Store the original projects data
  let allProjects = listItems.map((item) => ({
    element: item,
    category: item.dataset.category,
  }));

  let filteredProjects = [...allProjects]; // Default to all projects

  // Function to render projects dynamically
  function renderProjects(items) {
    listContainer.innerHTML = ""; // Clear existing items
    let count = 0;

    items.forEach(({ element }) => {
      count++;
      if (count > 12) {
        element.style.display = "none";
        btnMore.style.display = "flex";
      } else {
        element.style.display = "flex";
        btnMore.style.display = "none";
      }

      listContainer.appendChild(element);
    });
  }

  // Initial render
  renderProjects(filteredProjects);

  // Filter click event
  filterItems.forEach((item) => {
    item.addEventListener("click", () => {
      filterItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      const category = item.dataset.category;

      filteredProjects =
        category === "Все"
          ? [...allProjects]
          : allProjects.filter((p) => p.category === category);

      renderProjects(filteredProjects);
    });
  });

  // "More" button click event
  btnMore.addEventListener("click", () => {
    let items = listContainer.querySelectorAll(".card");
    items.forEach((item) => (item.style.display = "flex"));
    btnMore.style.display = "none"; // Hide after showing all
  });
}

// wooden-space
const woodenSpace = document.querySelector(".wooden-space");
if (woodenSpace) {
  const video = woodenSpace.querySelector("video");
  const play = woodenSpace.querySelector(".wooden-space__video-play");
  const playBtn = play.querySelector(".icon");

  playBtn.addEventListener("click", () => {
    play.style.display = "none";
    video.muted = false;
    video.currentTime = 0;
    video.controls = true;
    video.play();
  });
}

// lamps
const lamps = document.querySelector(".lamps");
if (lamps) {
  const items = lamps.querySelectorAll(".lamps__item");

  items.forEach((item) => {
    const desc = item.querySelector(".lamps__item-desc .text-p");
    const btn = item.querySelector(".lamps__item-btn");
    const btnText = btn.querySelector("span");

    const convertPxToRem = (px) => (px / 16) * 1 + "rem";

    btn.addEventListener("click", () => {
      if (!btn.classList.contains("active")) {
        desc.style.maxHeight = convertPxToRem(desc.scrollHeight);
        btn.classList.add("active");
        btnText.textContent = "Свернуть информацию";
      } else {
        desc.style.maxHeight = convertPxToRem(76);
        btn.classList.remove("active");
        btnText.textContent = "Развернуть информацию";
      }
    });
  });
}

const product = document.querySelector(".product");
if (product) {
  const tabs = product.querySelectorAll(".product___details-tab");
  const items = product.querySelectorAll(".product___details-item");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");

      items.forEach((item) => item.classList.remove("active"));
      items[index].classList.add("active");
    });
  });
}

// swipers
let teamSwiper = new Swiper(".team .team__list", {
  slidesPerView: "auto",
  spaceBetween: 15,
  breakpoints: {
    1025: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

let historyThumbs = new Swiper(".history .history__thumbs", {
  slidesPerView: 1,
  spaceBetween: 15,
  on: {
    slideChange: function () {
      historySwiper.slideTo(this.activeIndex);
    },
  },
});

let historySwiper = new Swiper(".history .history__swiper", {
  slidesPerView: 1,
  effect: "fade",
  mousewheel: true,
  thumbs: {
    swiper: historyThumbs,
  },
  on: {
    slideChange: function () {
      historyThumbs.update();
    },
  },
});

let sizesSwiper = new Swiper(".sizes .sizes__list", {
  slidesPerView: "auto",
  spaceBetween: 25,
});

let colorsSwipers = document.querySelectorAll(".colors .colors__list-swiper");
colorsSwipers.forEach((swiper) => {
  let swiperEl = swiper.querySelector(".swiper");
  let prevBtn = swiper.querySelector(".btn-prev");
  let nextBtn = swiper.querySelector(".btn-next");
  let pagination = swiper.querySelector(".swiper-pagination");

  let s = new Swiper(swiperEl, {
    slidesPerView: "auto",
    spaceBetween: 12,
    slidesPerGroup: 2,
    pagination: {
      el: pagination,
      clickable: true,
    },
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },
    breakpoints: {
      476: {
        slidesPerGroup: 3,
        spaceBetween: 15,
      },
      1025: {
        spaceBetween: 20,
        slidesPerGroup: 3,
      },
    },
    on: {
      slideChange: function () {
        if (window.innerWidth > 1024) {
          const activeIndex = s.activeIndex;

          s.slides.forEach((slide, index) => {
            if (index < activeIndex) {
              // Hide slides before active slide
              slide.style.visibility = "hidden";
            } else {
              // Show current and next slides
              slide.style.visibility = "visible";
            }
          });
        }
      },
    },
  });
});

let productThumbs = new Swiper(".product .product__images-thumbs", {
  slidesPerView: "auto",
  spaceBetween: 15,
  breakpoints: {
    1025: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
  on: {
    slideChange: function () {
      productSwiper.slideTo(this.activeIndex);
    },
  },
});

let productSwiper = new Swiper(".product .product__images-swiper", {
  slidesPerView: 1,
  effect: "fade",
  thumbs: {
    swiper: productThumbs,
  },
  on: {
    slideChange: function () {
      productThumbs.update();
    },
  },
});

let productTabs = new Swiper(".panel__product .product__details-tabs", {
  slidesPerView: "auto",
  spaceBetween: 20,
  breakpoints: {
    1025: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
  on: {
    slideChange: function () {
      productDetails.slideTo(this.activeIndex);
    },
  },
});

let productDetails = new Swiper(".panel__product .product__details-list", {
  slidesPerView: 1,
  effect: "fade",
  autoHeight: true,
  thumbs: {
    swiper: productTabs,
  },
  on: {
    slideChange: function () {
      productTabs.update();
    },
  },
});

// Initialize the fancybox
const fancyboxTriggers = Array.from(
  document.querySelectorAll("[data-fancybox]")
).filter((trigger) => trigger.dataset.fancybox);
if (fancyboxTriggers) {
  const fancyboxInstances = [];
  fancyboxTriggers.forEach((trigger) => {
    const name = trigger.dataset.fancybox;
    if (fancyboxInstances.includes(name)) {
      return; // Skip if already bound
    }
    // Add the name to the `fancyboxInstances` list
    fancyboxInstances.push(name);
  });
  fancyboxInstances.forEach((name) => {
    Fancybox.bind(`[data-fancybox="${name}"]`, {
      Images: { Panzoom: { maxScale: 3 } },
    });
  });
}

// form
function successSend() {
  modal.open("success");

  setTimeout(() => {
    modal.close();
  }, 3000);
}

const forms = document.querySelectorAll(".the-form");
forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    successSend();
  });
});
