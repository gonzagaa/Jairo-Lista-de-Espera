

AOS.init(
  {
      duration: 1200,
  }
);

document.addEventListener("DOMContentLoaded", () => {
  const openModalButton = document.getElementById("openModal");
  const closeModalButton = document.getElementById("closeModal");
  const modalOverlay = document.getElementById("modalOverlay");
  const modal = modalOverlay.querySelector(".modal");

  // Open modal
  openModalButton.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
    setTimeout(() => {
      modalOverlay.classList.add("active");
      modal.classList.add("active");
    }, 10); // Slight delay to trigger the animation
  });

  // Close modal on button click
  const closeModal = () => {
    modalOverlay.classList.remove("active");
    modal.classList.remove("active");
    setTimeout(() => {
      modalOverlay.style.display = "none";
    }, 300); // Matches the transition duration
  };

  closeModalButton.addEventListener("click", closeModal);

  // Close modal on overlay click
  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });
});
