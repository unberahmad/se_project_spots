const editProfileButton = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector(".edit-profile-modal");
const closeProfileButton = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input",
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);

const newPostButton = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector(".new-post-modal");
const closeNewPostButton = newPostModal.querySelector(".modal__close-btn");

const newPostForm = newPostModal.querySelector(".modal__form");
const imageInput = newPostForm.querySelector("#image-link-input");
const captionInput = newPostForm.querySelector("#caption-input");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});

closeProfileButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostButton.addEventListener("click", function () {
  openModal(newPostModal);
});

closeNewPostButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(imageInput.value);
  console.log(captionInput.value);

  newPostModal.classList.remove("modal_is-opened");
}

newPostForm.addEventListener("submit", handleAddCardSubmit);
