(() => {
  const $counter = document.getElementById("js-counter");

  const clickHandler = () => {
    $counter.textContent = "0";
    document.body.style.backgroundColor = "";
  };

  document.getElementById("js-reset-button").addEventListener
  ("click", clickHandler);
})();