(() => {
  const $counter = document.getElementById("js-counter");
  const $buttons = document.getElementsByClassName("js-button");

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);

    if ($targetButton.textContent.trim() === "+") {
         currentCount += 1;
      } else {
         currentCount -= 1;
      }

    $counter.textContent = currentCount;

    if (currentCount > 3) {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = ""; //元に戻す
    }
  };

  for (let index = 0; index < $buttons.length; index++) {
  $buttons[index].addEventListener("click", clickHandler);
  }
})();