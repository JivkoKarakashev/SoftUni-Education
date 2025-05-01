function notify(message) {

  // const button = document.querySelector('div#content button');
  const divNotify = document.querySelector('div#notification');

  divNotify.style.display = 'block';
  divNotify.textContent = message;

  const divNotifyEventHandler = () => {
    divNotify.style.display = 'none';
  };
  // console.log(divNotify);
  divNotify.addEventListener('click', divNotifyEventHandler);
}