const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name') || '未記入';
  const email = formData.get('email') || '未記入';
  const message = formData.get('message');
  const subject = 'サイトからのお問い合わせ';
  const body = `お名前：${name}\nメールアドレス：${email}\n\nお問い合わせ内容：\n${message}`;

  window.location.href = `mailto:govvvvw@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
