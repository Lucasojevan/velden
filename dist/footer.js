const newsletterForm = document.querySelector('.newsletter');

newsletterForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = newsletterForm.elements.email;
  const status = newsletterForm.querySelector('span');
  if (!email.checkValidity()) {
    email.reportValidity();
    return;
  }
  localStorage.setItem('velden-newsletter-email', email.value);
  email.value = '';
  status.textContent = 'E-mail salvo neste navegador. A integração de envio ainda não está configurada.';
});
