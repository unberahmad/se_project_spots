const editProfileButton = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector(".edit-profile-modal");
const closeProfileButton = editProfileModal.querySelector(".modal__close-btn");

editProfileButton.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

closeProfileButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

const newPostButton = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector(".new-post-modal");
const closeNewPostButton = newPostModal.querySelector(".modal__close-btn");

newPostButton.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

closeNewPostButton.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
