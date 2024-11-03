// Регистрация GSAP плагинов
gsap.registerPlugin(Flip, ScrollTrigger, ScrollSmoother, TextPlugin);

// GSAP ScrollSmoother
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.5,
  effects: true,
});

// Vercel speed insight
window.si =
  window.si ||
  function () {
    (window.siq = window.siq || []).push(arguments);
  };

// Vercel Analytics
window.va =
  window.va ||
  function () {
    (window.vaq = window.vaq || []).push(arguments);
  };

// Темная тема
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Анимация появления подзаголовков

(function ($) {
  var s,
    spanizeLetters = {
      settings: {
        letters: $(".js-spanize"),
      },
      init: function () {
        s = this.settings;
        this.bindEvents();
      },
      bindEvents: function () {
        s.letters.html(function (i, el) {
          //spanizeLetters.joinChars();
          var spanizer = $.trim(el).split("");
          return "<span>" + spanizer.join("</span><span>") + "</span>";
        });
      },
    };
  spanizeLetters.init();
})(jQuery);

// Карусель
const carouselContainer = document.getElementById("carouselContainer");

// Clone the carousel content to create a continuous loop
const carouselItems = carouselContainer.innerHTML;
carouselContainer.innerHTML += carouselItems;

// Set up animation
let scrollLeft = 0;
const scrollSpeed = 4; // Adjust the scroll speed as needed

function animateCarousel(timestamp) {
  if (!lastTimestamp) {
    lastTimestamp = timestamp;
  }

  const deltaTime = timestamp - lastTimestamp;
  lastTimestamp = timestamp;

  scrollLeft += (scrollSpeed * deltaTime) / 60; // Normalize speed
  if (scrollLeft >= carouselContainer.scrollWidth / 2) {
    scrollLeft = 0;
  }
  carouselContainer.style.transform = `translateX(-${scrollLeft}px)`;

  requestAnimationFrame(animateCarousel);
}

let lastTimestamp = null;
requestAnimationFrame(animateCarousel);

// Скрипт переключателя темной темы
var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

// Числовой тикер

var options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

var handleIntersection = function (entries, observer) {
  entries.forEach(function (entry) {
    // Запускаем скрипт при условии пересечения элементом видимой области
    if (entry.isIntersecting) {
      var countElements = document.querySelectorAll(".count");
      countElements.forEach(function (countElement) {
        var counter = 0;
        var target = parseInt(countElement.textContent);
        var animation = setInterval(function () {
          counter += 1;
          countElement.textContent = counter;
          if (counter === target) {
            clearInterval(animation);
          }
        }, 4000 / target);
      });
    }
  });
};

var observer = new IntersectionObserver(handleIntersection, options);
observer.observe(document.querySelector(".count"));

// GSAP ScrollTrigger

// секция AWP

const tl = gsap.timeline();

// Запускаем скрипт при условии размер экрана больше 768px
if (document.documentElement.clientWidth > 768) {
  tl.set(".mov-1", { xPercent: -150 }).to(".mov-1", {
    xPercent: 0,
    duration: 6,
    easy: "easyInOut",
  });

  ScrollTrigger.create({
    animation: tl,
    trigger: ".mov-1",
    start: "top 90%",
    end: "top 50%",
    scrub: 2,
  });
}

const tl111 = gsap.timeline();

// Запускаем скрипт при условии размер экрана больше 768px
if (document.documentElement.clientWidth > 768) {
  tl111.set(".mov-111", { xPercent: -150 }).to(".mov-111", {
    xPercent: 0,
    duration: 6,
    easy: "easyInOut",
  });

  ScrollTrigger.create({
    animation: tl111,
    trigger: ".mov-111",
    start: "top 90%",
    end: "top 50%",
    scrub: 2,
  });
}

const tl333 = gsap.timeline();

// Запускаем скрипт при условии размер экрана больше 768px
if (document.documentElement.clientWidth > 768) {
  tl333.set(".mov-333", { xPercent: -150 }).to(".mov-333", {
    xPercent: 0,
    duration: 6,
    easy: "easyInOut",
  });

  ScrollTrigger.create({
    animation: tl333,
    trigger: ".mov-333",
    start: "top 90%",
    end: "top 50%",
    scrub: 2,
  });
}

const tl555 = gsap.timeline();

// Запускаем скрипт при условии размер экрана больше 768px
if (document.documentElement.clientWidth > 768) {
  tl555.set(".mov-555", { xPercent: -150 }).to(".mov-555", {
    xPercent: 0,
    duration: 6,
    easy: "easyInOut",
  });

  ScrollTrigger.create({
    animation: tl555,
    trigger: ".mov-555",
    start: "top 90%",
    end: "top 50%",
    scrub: 2,
  });
}

const tl2 = gsap.timeline();

// Запускаем скрипт при условии размер экрана больше 768px
if (document.documentElement.clientWidth > 768) {
  tl2
    .set(".mov-2", { xPercent: 150 })
    .to(".mov-2", { xPercent: 0, duration: 6, easy: "easyInOut" });

  ScrollTrigger.create({
    animation: tl2,
    trigger: ".mov-2",
    start: "top 90%",
    end: "top 50%",
    scrub: 2,
  });
}

const tl222 = gsap.timeline();

// Запускаем скрипт при условии размер экрана больше 768px
if (document.documentElement.clientWidth > 768) {
  tl222
    .set(".mov-222", { xPercent: 150 })
    .to(".mov-222", { xPercent: 0, duration: 6, easy: "easyInOut" });

  ScrollTrigger.create({
    animation: tl222,
    trigger: ".mov-222",
    start: "top 90%",
    end: "top 50%",
    scrub: 2,
  });
}

const tl444 = gsap.timeline();

// Запускаем скрипт при условии размер экрана больше 768px
if (document.documentElement.clientWidth > 768) {
  tl444
    .set(".mov-444", { xPercent: 150 })
    .to(".mov-444", { xPercent: 0, duration: 6, easy: "easyInOut" });

  ScrollTrigger.create({
    animation: tl444,
    trigger: ".mov-444",
    start: "top 90%",
    end: "top 50%",
    scrub: 2,
  });
}

const tl5 = gsap.timeline();

tl5
  .set(".mov-5", { xPercent: 450, yPercent: 50, scale: 1.5 })
  .to(".mov-5", { xPercent: 220, duration: 6, easy: "easyInOut" });

ScrollTrigger.create({
  animation: tl5,
  trigger: ".mov-5",
  start: "top 90%",
  end: "top 50%",
  scrub: 2,
});

// секция ценности

const tl12 = gsap.timeline();

// Запускаем скрипт при условии размер экрана больше 768px
if (document.documentElement.clientWidth > 768) {
  tl12.set(".mov-12", { xPercent: -350 }).to(".mov-12", {
    xPercent: -23,
    duration: 6,
    easy: "easyInOut",
  });

  ScrollTrigger.create({
    animation: tl12,
    trigger: ".mov-12",
    start: "top 99%",
    end: "top 40%",
    scrub: 2,
  });
}

const tl13 = gsap.timeline();

// Запускаем скрипт при условии размер экрана больше 768px
if (document.documentElement.clientWidth > 768) {
  tl13
    .set(".mov-13", { xPercent: 350 })
    .to(".mov-13", { xPercent: 23, duration: 6, easy: "easyInOut" });

  ScrollTrigger.create({
    animation: tl13,
    trigger: ".mov-13",
    start: "top 99%",
    end: "top 40%",
    scrub: 2,
  });
}

// Секция преимущества

const tl14 = gsap.timeline();

// Запускаем скрипт при условии размер экрана больше 768px
if (document.documentElement.clientWidth > 768) {
  tl14.set(".mov-14", { xPercent: -350 }).to(".mov-14", {
    xPercent: -23,
    duration: 6,
    easy: "easyInOut",
  });

  ScrollTrigger.create({
    animation: tl14,
    trigger: ".mov-14",
    start: "top 99%",
    end: "top 40%",
    scrub: 2,
  });
}

const tl15 = gsap.timeline();

// Запускаем скрипт при условии размер экрана больше 768px
if (document.documentElement.clientWidth > 768) {
  tl15
    .set(".mov-15", { xPercent: 350 })
    .to(".mov-15", { xPercent: 23, duration: 6, easy: "easyInOut" });

  ScrollTrigger.create({
    animation: tl15,
    trigger: ".mov-15",
    start: "top 99%",
    end: "top 40%",
    scrub: 2,
  });
}

// Заголовок

const tl23 = gsap.timeline();

tl23.set(".mov-23", { xPercent: -10, opacity: 0, scale: 1.4 }).to(".mov-23", {
  xPercent: 0,
  duration: 2,
  easy: "easyInOut",
  opacity: 1,
  scale: 1,
});

// Лого 1 dark

const tl22 = gsap.timeline();

tl22
  .set(".mov-22", {
    xPercent: -300,
    yPercent: 200,
    scale: 2,
    opacity: 0,
    rotate: -90,
  })
  .to(".mov-22", {
    duration: 6,
    easy: "easyInOut",
    opacity: 0.03,
    xPercent: -110,
  });

ScrollTrigger.create({
  animation: tl22,
  trigger: ".mov-22",
  start: "top 80%",
  end: "top 25%",
  scrub: 2,
});

// Лого 1 light

const tl22l = gsap.timeline();

tl22l
  .set(".mov-22l", {
    xPercent: -300,
    yPercent: 200,
    scale: 2,
    opacity: 0,
    rotate: -90,
  })
  .to(".mov-22l", {
    duration: 6,
    easy: "easyInOut",
    opacity: 0.15,
    xPercent: -110,
  });

ScrollTrigger.create({
  animation: tl22l,
  trigger: ".mov-22l",
  start: "top 80%",
  end: "top 25%",
  scrub: 2,
});

// Лого 2 dark

const tl24 = gsap.timeline();

tl24
  .set(".mov-24", {
    xPercent: 510,
    yPercent: 150,
    scale: 2,
    opacity: 0,
    rotate: 90,
  })
  .to(".mov-24", {
    duration: 6,
    easy: "easyInOut",
    opacity: 0.03,
    xPercent: 320,
  });

ScrollTrigger.create({
  animation: tl24,
  trigger: ".mov-24",
  start: "top 80%",
  end: "top 25%",
  scrub: 2,
});

// Лого 2 light

const tl24l = gsap.timeline();

tl24l
  .set(".mov-24l", {
    xPercent: 510,
    yPercent: 150,
    scale: 2,
    opacity: 0,
    rotate: 90,
  })
  .to(".mov-24l", {
    duration: 6,
    easy: "easyInOut",
    opacity: 0.15,
    xPercent: 320,
  });

ScrollTrigger.create({
  animation: tl24l,
  trigger: ".mov-24l",
  start: "top 80%",
  end: "top 25%",
  scrub: 2,
});

// Лого 3 dark

const tl25 = gsap.timeline();

tl25
  .set(".mov-25", {
    xPercent: -300,
    yPercent: -140,
    scale: 2,
    opacity: 0,
    rotate: -90,
  })
  .to(".mov-25", {
    duration: 6,
    easy: "easyInOut",
    opacity: 0.03,
    xPercent: -107,
  });

ScrollTrigger.create({
  animation: tl25,
  trigger: ".mov-25",
  start: "top 80%",
  end: "top 25%",
  scrub: 2,
});

// Лого 3 light

const tl25l = gsap.timeline();

tl25l
  .set(".mov-25l", {
    xPercent: -300,
    yPercent: -140,
    scale: 2,
    opacity: 0,
    rotate: -90,
  })
  .to(".mov-25l", {
    duration: 6,
    easy: "easyInOut",
    opacity: 0.15,
    xPercent: -107,
  });

ScrollTrigger.create({
  animation: tl25l,
  trigger: ".mov-25l",
  start: "top 80%",
  end: "top 25%",
  scrub: 2,
});

// Картинка секции Hero

const tl26 = gsap.timeline();

tl26.set(".main-pic", { yPercent: 0, opacity: 0, scale: 0.5 }).to(".main-pic", {
  yPercent: 10,
  scale: 1,
  duration: 2,
  easy: "easyInOut",
  opacity: 1,
});

// Кнопки секции Hero
const tl27 = gsap.timeline();

tl27.set(".hero-btn", { yPercent: 120, opacity: 0 }).to(".hero-btn", {
  yPercent: 0,
  delay: 2,
  duration: 2,
  easy: "easyInOut",
  opacity: 1,
});

// Карточки секции Hero

// Первая

const tl28 = gsap.timeline();

tl28.set(".hero-card-1", { yPercent: 30, opacity: 0 }).to(".hero-card-1", {
  yPercent: 0,
  delay: 3,
  duration: 2,
  easy: "easyInOut",
  opacity: 1,
});

const tl29 = gsap.timeline();

tl29.set(".hero-card-1-t", { yPercent: 50, opacity: 0 }).to(".hero-card-1-t", {
  yPercent: 0,
  delay: 4,
  duration: 2,
  easy: "easyInOut",
  opacity: 1,
});

// Вторая

const tl30 = gsap.timeline();

tl30.set(".hero-card-2", { yPercent: 30, opacity: 0 }).to(".hero-card-2", {
  yPercent: 0,
  delay: 3.5,
  duration: 2,
  easy: "easyInOut",
  opacity: 1,
});

const tl31 = gsap.timeline();

tl31.set(".hero-card-2-t", { yPercent: 50, opacity: 0 }).to(".hero-card-2-t", {
  yPercent: 0,
  delay: 4.5,
  duration: 2,
  easy: "easyInOut",
  opacity: 1,
});

// Третья

const tl32 = gsap.timeline();

tl32.set(".hero-card-3", { yPercent: 30, opacity: 0 }).to(".hero-card-3", {
  yPercent: 0,
  delay: 4,
  duration: 2,
  easy: "easyInOut",
  opacity: 1,
});

const tl33 = gsap.timeline();

tl33.set(".hero-card-3-t", { yPercent: 50, opacity: 0 }).to(".hero-card-3-t", {
  yPercent: 0,
  delay: 5,
  duration: 2,
  easy: "easyInOut",
  opacity: 1,
});

// Кнопк карточек

const tl34 = gsap.timeline();

tl34.set(".hero-card-btn", { yPercent: 30, opacity: 0 }).to(".hero-card-btn", {
  yPercent: 0,
  delay: 5.5,
  duration: 2,
  opacity: 1,
});

// Карточки секци компетенций

// const tl35 = gsap.timeline();

// tl35
// .set(".mov-35", {
//   yPercent: -7,
//   opacity: 0,
// })
// .to(".mov-35", {
//   duration: 1,
//   easy: "easyInOut",
//   opacity: 1,
//   yPercent: 0,
// });

// ScrollTrigger.create({
//   animation: tl35,
//   trigger: ".mov-35",
//   start: "top 99%",
//   end: "top 89%",
//   scrub: 2,
// });

// Анимация выделения текста

// gsap.utils.toArray(".text-yell").forEach((".text-yell") => {
//   ScrollTrigger.create({
//     trigger: ".text-yell",
//     start: "top 50%",
//     toggleClass: "active"
//   })

// })

// Паутина за курсором

(function () {
  var lastTime = 0;
  var vendors = ["ms", "moz", "webkit", "o"];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame =
      window[vendors[x] + "CancelAnimationFrame"] ||
      window[vendors[x] + "CancelRequestAnimationFrame"];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
})();

(function () {
  var width,
    height,
    largeHeader,
    canvas,
    ctx,
    points,
    target,
    animateHeader = true;

  // Main
  initHeader();
  initAnimation();
  addListeners();

  function initHeader() {
    width = 3000;
    height = 12000;
    target = { x: width / 2, y: height / 2 };

    largeHeader = document.getElementById("large-header");
    largeHeader.style.height = height + "px";

    canvas = document.getElementById("demo-canvas");
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");

    // create points
    points = [];
    for (var x = 0; x < width; x = x + width / 200) {
      for (var y = 0; y < height; y = y + height / 20) {
        var px = x + (Math.random() * width) / 20;
        var py = y + (Math.random() * height) / 20;
        var p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    // for each point find the 5 closest points
    for (var i = 0; i < points.length; i++) {
      var closest = [];
      var p1 = points[i];
      for (var j = 0; j < points.length; j++) {
        var p2 = points[j];
        if (!(p1 == p2)) {
          var placed = false;
          for (var k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] == undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (var k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // assign a circle to each point
    for (var i in points) {
      var c = new Circle(
        points[i],
        2 + Math.random() * 2,
        "rgba(255,255,255,0.3)"
      );
      points[i].circle = c;
    }
  }

  // Event handling
  function addListeners() {
    if (!("ontouchstart" in window)) {
      window.addEventListener("mousemove", mouseMove);
    }
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);
  }

  function mouseMove(e) {
    var posx = (posy = 0);
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posy =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    target.x = posx;
    target.y = posy;
  }

  function scrollCheck() {
    if (document.body.scrollTop > height) animateHeader = false;
    else animateHeader = true;
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    largeHeader.style.height = height + "px";
    canvas.width = width;
    canvas.height = height;
  }

  // animation
  function initAnimation() {
    animate();
    for (var i in points) {
      shiftPoint(points[i]);
    }
  }

  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height);
      for (var i in points) {
        // detect points in range
        if (Math.abs(getDistance(target, points[i])) < 4000) {
          points[i].active = 0.3;
          points[i].circle.active = 0.6;
        } else if (Math.abs(getDistance(target, points[i])) < 20000) {
          points[i].active = 0.1;
          points[i].circle.active = 0.3;
        } else if (Math.abs(getDistance(target, points[i])) < 40000) {
          points[i].active = 0.02;
          points[i].circle.active = 0.1;
        } else {
          points[i].active = 0;
          points[i].circle.active = 0;
        }

        drawLines(points[i]);
        points[i].circle.draw();
      }
    }
    requestAnimationFrame(animate);
  }

  function shiftPoint(p) {
    TweenLite.to(p, 1 + 1 * Math.random(), {
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      ease: Circ.easeInOut,
      onComplete: function () {
        shiftPoint(p);
      },
    });
  }

  // Canvas manipulation
  function drawLines(p) {
    if (!p.active) return;
    for (var i in p.closest) {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.closest[i].x, p.closest[i].y);
      ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
      ctx.stroke();
    }
  }

  function Circle(pos, rad, color) {
    var _this = this;

    // constructor
    (function () {
      _this.pos = pos || null;
      _this.radius = rad || null;
      _this.color = color || null;
    })();

    this.draw = function () {
      if (!_this.active) return;
      ctx.beginPath();
      ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = "rgba(156,217,249," + _this.active + ")";
      ctx.fill();
    };
  }

  // Util
  function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }
})();

// Частицы

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

// Initial canvas size
canvas.width = window.innerWidth;
canvas.height = 270;

let particles = [];
let particleCount = calculateParticleCount();

class Particle {
  constructor() {
    this.reset();
    this.y = Math.random() * canvas.height;
    this.fadeDelay = Math.random() * 600 + 100;
    this.fadeStart = Date.now() + this.fadeDelay;
    this.fadingOut = false;
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = Math.random() / 5 + 0.1;
    this.opacity = 1;
    this.fadeDelay = Math.random() * 600 + 100;
    this.fadeStart = Date.now() + this.fadeDelay;
    this.fadingOut = false;
  }

  update() {
    this.y -= this.speed;
    if (this.y < 0) {
      this.reset();
    }

    if (!this.fadingOut && Date.now() > this.fadeStart) {
      this.fadingOut = true;
    }

    if (this.fadingOut) {
      this.opacity -= 0.008;
      if (this.opacity <= 0) {
        this.reset();
      }
    }
  }

  draw() {
    ctx.fillStyle = `rgba(${255 - (Math.random() * 255) / 2}, 255, 255, ${
      this.opacity
    })`;
    ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
  }
}

// Отключение скрипта на мобильных

if (document.documentElement.clientWidth > 768) {
  function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}

function calculateParticleCount() {
  return Math.floor((canvas.width * canvas.height) / 6000);
}

function onResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particleCount = calculateParticleCount();
  initParticles();
}

window.addEventListener("resize", onResize);

initParticles();
animate();

// Кнопка бургер

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });
});

// Почтовый сервис

emailjs.init({
  publicKey: '6DJtHEZEYM352-KoQ',
  // Do not allow headless browsers
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ['foo@emailjs.com', 'bar@emailjs.com'],
    // The variable contains the email address
    watchVariable: 'userEmail',
  },
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s
    throttle: 10000,
  },
});


var templateParams = {
  name: 'James',
  notes: 'Check this out!',
};

emailjs.send('default_service', 'template_1l4cxu5', templateParams).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);


emailjs.sendForm('default_service', 'template_1l4cxu5', '#name').then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);


var data = {
  service_id: 'default_service',
  template_id: 'template_1l4cxu5',
  user_id: '6DJtHEZEYM352-KoQ',
  template_params: {
      'username': 'James',
      'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
  }
};

$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
  type: 'POST',
  data: JSON.stringify(data),
  contentType: 'application/json'
}).done(function() {
  alert('Your mail is sent!');
}).fail(function(error) {
  alert('Oops... ' + JSON.stringify(error));
});


$('#name').on('submit', function(event) {
  event.preventDefault(); // prevent reload
  
  var formData = new FormData(this);
  formData.append('service_id', 'default_service');
  formData.append('template_id', 'template_1l4cxu5');
  formData.append('user_id', '6DJtHEZEYM352-KoQ');

  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
      type: 'POST',
      data: formData,
      contentType: false, // auto-detection
      processData: false // no need to parse formData to string
  }).done(function() {
      alert('Your mail is sent!');
  }).fail(function(error) {
      alert('Oops... ' + JSON.stringify(error));
  });
});


        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('contact_service', 'contact_form', this)
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
        }