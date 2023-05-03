const containersToExpand = document.querySelectorAll('[data-expander]');

const buttonClickHandler = (evt) => {
  const {target} = evt;

  if (!target.closest('[data-expander]')) {
    return;
  }

  const container = target.closest('[data-expander]');
  const content = container.querySelector('[data-expander-content]');
  const button = container.querySelector('[data-expander-btn]');
  const buttonText = button.querySelector('[data-expander-btn-text]');

  evt.preventDefault();

  if (button.getAttribute('aria-expanded') === 'true') {
    content.style.maxHeight = null;
    button.setAttribute('aria-expanded', 'false');
    buttonText.textContent = container.dataset.expander === 'text'
      ? 'Читать далее'
      : 'Показать всё';

    return;
  }

  content.style.maxHeight = `${content.scrollHeight}px`;
  button.setAttribute('aria-expanded', 'true');
  buttonText.textContent = 'Скрыть';
};

const activateExpander = (container) => {
  const button = container.querySelector('[data-expander-btn]');
  button.addEventListener('click', buttonClickHandler);
};

const initExpander = () => {
  if (containersToExpand.length) {
    containersToExpand.forEach(activateExpander);
  }
};

export default initExpander;
