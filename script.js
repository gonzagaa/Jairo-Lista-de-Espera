

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

  // Função para aplicar a máscara no campo de WhatsApp
  document.getElementById('whatsapp').addEventListener('input', function (e) {
    let input = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número

    if (input.length > 11) input = input.substring(0, 11); // Limita a 11 dígitos

    if (input.length > 6) {
      // Formato com DDD e 8 ou 9 dígitos
      input = input.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2$3');
    } else if (input.length > 2) {
      // Formato com DDD e parte do número
      input = input.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else {
      // Apenas DDD
      input = input.replace(/^(\d{0,2})/, '($1');
    }

    e.target.value = input;
  });

document.getElementById('leadForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  // Captura os dados do formulário
  const nome = e.target.nome.value;
  const email = e.target.email.value;
  const whatsapp = e.target.whatsapp.value;

  // Monta os dados no formato esperado
  const data = {
    Name: nome,
    Email: email,
    Phone: whatsapp,
    MachineCode: 752312,
    EmailSequenceCode: 1776315,  // Novo código atualizado
    SequenceLevelCode: 1
  };

  // Envio para o webhook usando Fetch API
  fetch('https://llapi.leadlovers.com/webapi/lead?token=C9CF203B1F8A491EB6BFDCAA06E97110', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6IldlYkFwaSIsInN1YiI6IldlYkFwaSIsInJvbGUiOlsicmVhZCIsIndyaXRlIl0sImlzcyI6Imh0dHA6Ly93ZWJhcGlsbC5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6IjFhOTE4YzA3NmE1YjQwN2Q5MmJkMjQ0YTUyYjZmYjc0IiwiZXhwIjoxNjA1NDQxMzM4LCJuYmYiOjE0NzU4NDEzMzh9.YIIpOycEAVr_xrJPLlEgZ4628pLt8hvWTCtjqPTaWMs'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Cadastro enviado com sucesso!');
      e.target.reset(); // Limpa o formulário
    } else {
      response.json().then(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar cadastro. Tente novamente.');
      });
    }
  })
  .catch(error => {
    console.error('Erro:', error);
    alert('Erro de conexão. Verifique sua internet.');
  });
});
