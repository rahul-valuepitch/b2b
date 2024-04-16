// Header Scroll
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".header");
  if (window.scrollY > 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Animation On Scroll
AOS.init({
  easing: "ease",
  once: true,
  duration: 500,
});

// Show More Pills
const showMorePills = () => {
  const pills = document.querySelectorAll(".toggle-pills");
  pills.forEach((pill) => {
    const btn = pill.querySelector(".toggle-btn");
    btn.addEventListener("click", () => {
      if (!pill.classList.contains("show")) {
        pill.classList.add("show");
        btn.textContent = "Show Less";
      } else {
        pill.classList.remove("show");
        btn.textContent = "Show More";
      }
    });
  });
};

// Automation Platform Scripts
const platformList = [
  {
    id: `web-services`,
    title: `Web Services`,
    text: `Struggling with responsive design, broken locators, or flaky tests? Look no ahead. TestUnity's mature web testing practice makes web automation easy (as it should be). TestProject unleashes Selenium to build the most robust web testing solution available.`,
    img: `./static/images/platform/web.png`,
  },
  {
    id: `web-app`,
    title: `Web App`,
    text: `Powerful automated testing for any web application. Responsive web, react, angular, and more. TestUnity has your web application testing covered.`,
    img: `./static/images/platform/web-app.png`,
  },
  {
    id: `android-app`,
    title: `Android App`,
    text: `Robust testing for any Android application. Native apps, hybrids apps, and more. TestUnity can test any Android Devices and helps you easily handle your sea of Android devices.`,
    img: `./static/images/platform/android.png`,
  },
  {
    id: `ios-app`,
    title: `IOS App`,
    text: `Save time and money with iOS app testing that adjusts to your requirements. Our tailored testing methods and comprehensive plans allow us to make you look amazing.`,
    img: `./static/images/platform/ios.png`,
  },
  {
    id: `ar-vr`,
    title: `AR/VR`,
    text: `With trained testers, TestUnity delivers unparalleled AR/VR testing expertise in a multitude of cultures and languages. Our creative, technical talent explores your device like your customers would in real devices and a real environment but writes issue reports catered to developers' requirements.`,
    img: `./static/images/platform/av-vr.png`,
  },
  {
    id: `wearable`,
    title: `Wearable`,
    text: `The success of a wearable is dependent on its functionality, reliable experience, secure operations, and seamless coexistence with different computing technologies.`,
    img: `./static/images/platform/smart-watch.png`,
  },
  {
    id: `database`,
    title: `Database`,
    text: `Ensure the database's efficiency. highest stability, performance, and security by utilizing TestUnity's Database testing methods. We also assess data integrity and consistency, which might incorporate building tough queries to load and stress test the database and check its responsiveness.`,
    img: `./static/images/platform/database.png`,
  },
  {
    id: `iot-devices`,
    title: `IOT Devices`,
    text: `Our loT Device Testing Servic are created to deliver manufacturers' guidance and support through each stage o product development. Our on stop-shop portfolio is integrat with our industry-specific`,
    img: `./static/images/platform/iot.png`,
  },
  {
    id: `api-testing`,
    title: `API Testing`,
    text: `API testing is a type of software testing that analyzes an application program interface (API) to verify it fulfills its expected functionality, security, performance, and reliability.`,
    img: `./static/images/platform/api.png`,
  },
];
const automationPlatformCarousel = () => {
  let carousel = document.querySelector("#platformCarousel");

  const html = (item) => {
    return `
      <div class="item">
        <div class="card">
          <div class="icon">
            <img src="${item.img}" alt="${item.title}" />
          </div>
          <div class="text">
            <h5>${item.title}</h5>
            <p>${item.text}</p>
            <a
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#automationPlatformModal"
              data-modal-content="${item.id}"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    `;
  };

  const items = platformList.map((item) => html(item)).join("");
  carousel.innerHTML = items;
};
const automationPlatformModal = () => {
  const btns = document.querySelectorAll(".platform .card a");
  const modal = document.querySelector("#automationPlatformModal");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-modal-content");
      const title = modal.querySelector(".modal-title");
      const img = modal.querySelector(".image img");
      const text = modal.querySelector(".text p");

      platformList.forEach((item) => {
        if (item.id === id) {
          img.src = item.img;
          img.alt = `${item.title} | B2BTesters`;
          title.textContent = item.title;
          text.textContent = item.text;
        }
      });
    });
  });
};

// Sticky Form
const stickyForm = () => {
  const form = document.querySelector("#sticky-contact");
  const btn = form.querySelector("#toggle-sticky-contact-form");

  btn.addEventListener("click", () => {
    form.classList.toggle("active");
  });
};
stickyForm();

// Adding Values to Hidden Field
const addHiddenValues = (element) => {
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let form = document.querySelector(element);

  // Function to get user location
  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resolve(`Latitude : ${latitude} - Longitude : ${longitude}`);
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject("Geolocation is not supported by this browser.");
      }
    });
  };

  // Set values to the form fields
  form.elements["utm_source"].value = urlParams.get("utm_source") || "";
  form.elements["utm_medium"].value = urlParams.get("utm_medium") || "";
  form.elements["utm_campaign"].value = urlParams.get("utm_campaign") || "";
  form.elements["utm_content"].value = urlParams.get("utm_content") || "";
  form.elements["utm_term"].value = urlParams.get("utm_term") || "";
  form.elements["gad_source"].value = urlParams.get("gad_source") || "";
  form.elements["gclid"].value = urlParams.get("gclid") || "";

  // Call getLocation and set location value
  getLocation()
    .then((location) => {
      form.elements["location"].value = location;
    })
    .catch((error) => {
      console.error("Error getting location:", error);
    });
};

// Adding Pricing Value in Input
const addPricingValues = () => {
  const form = document.querySelector("#header-modal-form");
  const pricing = document.querySelectorAll(".pricing .card .button");

  pricing.forEach((item) => {
    item.addEventListener("click", () => {
      form.elements["product"].value = item.getAttribute("data-product-value");
    });
  });
};
