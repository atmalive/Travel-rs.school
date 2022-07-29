const burgerOpenButton = document.querySelector(".header__button-menu");
const burgerCloseButton = document.querySelector(".menu__close-button");
const menuBurger = document.querySelector(".menu__burger");
const menuLink = document.querySelectorAll(".menu__link");
const popupLogin = document.querySelector(".popup_type_login");
const buttonLogin = document.querySelector(".header__button");
const popupContainer = document.querySelector(".popup__container");
const popupButtonFacebook = popupContainer.querySelector(
  ".popup__button_facebook"
);
const popupButtonGoogle = popupContainer.querySelector(".popup__button_google");
const popupText = popupContainer.querySelector(".popup__text");
const popupLinkPassword = popupContainer.querySelector(".popup__link_password");
const popupButtonSubmit = popupContainer.querySelector(".popup__button_submit");
const popupLinkRegister = popupContainer.querySelector(".popup__link_register");
const popupTitle = popupContainer.querySelector(".popup__title");
const popupTextFooter = popupContainer.querySelector(".popup__text-footer");
const popupInputs = popupContainer.querySelector(".popup__inputs");
const popupInput = popupContainer.querySelectorAll(".popup__input");
const buttonAccount = document.querySelector('.menu__link-account');

function closeBurger() {
  menuBurger.classList.remove("menu__burger_active");
}

function closeLink() {
  menuLink.forEach((links) => {
    links.addEventListener("click", closeBurger);
  });
}

function openBurger() {
  menuBurger.classList.add("menu__burger_active");
  burgerCloseButton.addEventListener("click", closeBurger);
  closeLink();
  document.addEventListener("click", (event) => {
    if (
      !menuBurger.contains(event.target) &&
      !burgerOpenButton.contains(event.target)
    ) {
      closeBurger();
    }
  });
}

burgerOpenButton.addEventListener("click", openBurger);

///  OPEN POPUP
function makeSigIn() {
  popupContainer.classList.remove("popup__container_create");
  popupButtonFacebook.classList.remove("popup__button_hidden");
  popupButtonGoogle.classList.remove("popup__button_hidden");
  popupText.classList.remove("popup__text_hidden");
  popupLinkPassword.classList.remove("popup__link_hidden");
  popupButtonSubmit.classList.remove("popup__button_sign-up");
  popupButtonSubmit.textContent = "Sign In";
  popupLinkRegister.textContent = "Register";
  popupTitle.textContent = "Log in to your account";
  popupTextFooter.textContent = "Don’t have an account?";
}

function hadlePopupToSingUpIn() {
  if (!popupContainer.classList.contains("popup__container_create")) {
    popupContainer.classList.add("popup__container_create");
    popupButtonFacebook.classList.add("popup__button_hidden");
    popupButtonGoogle.classList.add("popup__button_hidden");
    popupText.classList.add("popup__text_hidden");
    popupLinkPassword.classList.add("popup__link_hidden");
    popupButtonSubmit.classList.add("popup__button_sign-up");
    popupButtonSubmit.textContent = "Sign Up";
    popupLinkRegister.textContent = "Log in";
    popupTitle.textContent = "Create account";
    popupTextFooter.textContent = "Already have an account?";
  } else {
    makeSigIn();
  }
}

function closePopup() {
  popupLogin.classList.remove("popup__open");
  makeSigIn();
}

function handleCloseOpacity(event) {
  if (
    (event.target !== event.currentTarget &&
      event.target.classList.contains("popup__open")) ||
    event.key === "Escape"
  ) {
    closePopup();
  }
}

function alertPopup() {
  let inputsData = {};

  popupInput.forEach((input) => {
    inputsData = { ...inputsData, [input.name]: input.value };
  });

  const { submitEmail, submitPassword } = inputsData;
  alert(`Your E-mail: ${submitEmail} \n Your Password: ${submitPassword}`);
}

function openPopup() {
  popupLogin.classList.add("popup__open");
  document.addEventListener("click", handleCloseOpacity);
  document.addEventListener("keydown", handleCloseOpacity);
  popupLinkRegister.addEventListener("click", hadlePopupToSingUpIn);
  popupButtonSubmit.addEventListener("click", (evt) => {
    evt.preventDefault();
    alertPopup();
  });
  // popupElement
}

buttonLogin.addEventListener("click", openPopup);
buttonAccount.addEventListener("click", openPopup);

/// slider
const destinations = document.querySelector(".destinations");
const destinationsArrowRight = destinations.querySelector(
  ".destinations__button-right"
);
const destinationsArrowLeft = destinations.querySelector(
  ".destinations__button-left"
);
const destinationsCardsSlider = destinations.querySelector(
  ".destinations__cards"
);
const destinationsArrowRightSmall = destinations.querySelector(
  ".destinations__arrow-right"
);
const destinationsArrowLeftSmall = destinations.querySelector(
  ".destinations__arrow-left"
);

let smallOffset = -410;

const buttons = document.querySelectorAll(".destinations__buttons-under-cards");

const changeColorsSmall = () => {
  console.log(smallOffset);
  if (smallOffset < 0) {
    buttons[0].style.backgroundColor = "#F2785C";
    buttons[1].style.backgroundColor = "#ffab99";
    buttons[2].style.backgroundColor = "#ffab99";
  }
  if (smallOffset >= -5 && smallOffset <= 300) {
    buttons[0].style.backgroundColor = "#ffab99";
    buttons[1].style.backgroundColor = "#F2785C";
    buttons[2].style.backgroundColor = "#ffab99";
  }

  if (smallOffset > 300) {
    buttons[0].style.backgroundColor = "#ffab99";
    buttons[1].style.backgroundColor = "#ffab99";
    buttons[2].style.backgroundColor = "#F2785C";
  }
};

const moveSliderRightSmall = () => {
  if (smallOffset >= 410) {
    smallOffset = -420;
  } else {
    smallOffset += 415;
  }
  changeColorsSmall();
  destinationsCardsSlider.style.left = -smallOffset + "px";
};

const moveSliderLeftSmall = () => {
  if (smallOffset <= -410) {
    smallOffset = 420;
  } else {
    smallOffset -= 420;
  }
  changeColorsSmall();
  destinationsCardsSlider.style.left = -smallOffset + "px";
};

let offset = 0;

function moveSliderLeft() {
  if (offset < 1) {
    offset = +58;
    destinationsCardsSlider.style.left = +offset + "%";
    console.log(offset + "right");
    buttons[0].style.backgroundColor = "#F2785C";
    buttons[1].style.backgroundColor = "#ffab99";
    buttons[2].style.backgroundColor = "#ffab99";
  } else if (offset < 59) {
    offset = 59;
    destinationsCardsSlider.style.left = -offset + "%";
    console.log(offset + "else if");
    buttons[0].style.backgroundColor = "#ffab99";
    buttons[1].style.backgroundColor = "#ffab99";
    buttons[2].style.backgroundColor = "#F2785C";
  } else if (offset >= 59) {
    offset = 0;
    destinationsCardsSlider.style.left = 0 + "%";
    offset = 0;
    buttons[0].style.backgroundColor = "#ffab99";
    buttons[1].style.backgroundColor = "#F2785C";
    buttons[2].style.backgroundColor = "#ffab99";
  }
}

function moveSliderRight() {
  if (offset < 1) {
    offset = +58;
    destinationsCardsSlider.style.left = -offset + "%";
    console.log(offset + "right");
    buttons[0].style.backgroundColor = "#ffab99";
    buttons[1].style.backgroundColor = "#ffab99";
    buttons[2].style.backgroundColor = "#F2785C";
  } else if (offset < 59) {
    offset = 59;
    destinationsCardsSlider.style.left = +offset + "%";
    console.log(offset + "else if");
    buttons[0].style.backgroundColor = "#F2785C";
    buttons[1].style.backgroundColor = "#ffab99";
    buttons[2].style.backgroundColor = "#ffab99";
  } else if (offset >= 59) {
    offset = 0;
    destinationsCardsSlider.style.left = 0 + "%";
    offset = 0;
    console.log(offset + "center");
    buttons[0].style.backgroundColor = "#ffab99";
    buttons[1].style.backgroundColor = "#F2785C";
    buttons[2].style.backgroundColor = "#ffab99";
  }
}

document.addEventListener("scroll", () => {
  if (document.documentElement.clientWidth <= 390) {
    destinationsArrowRight.removeEventListener("click", moveSliderRight);
    destinationsArrowLeft.removeEventListener("click", moveSliderLeft);

    destinationsArrowRightSmall.addEventListener("click", moveSliderRightSmall);
    destinationsArrowLeftSmall.addEventListener("click", moveSliderLeftSmall);
  } else {
    destinationsArrowRight.addEventListener("click", moveSliderRight);
    destinationsArrowLeft.addEventListener("click", moveSliderLeft);

    destinationsArrowRightSmall.removeEventListener(
      "click",
      moveSliderRightSmall
    );
    destinationsArrowLeftSmall.removeEventListener(
      "click",
      moveSliderLeftSmall
    );
  }
});

console.log(
  "Ваша оценка - 125 баллов  \n Слайдер изображений в секции destinations +50 \n Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50 \n Дополнительный функционал +25"
);
