document.getElementById("getColorBtn").addEventListener("click", function () {
  const colorValue = document.getElementById("select-color").value.slice(1, 7);
  const schemeValue = document.getElementById("color-scheme").value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${schemeValue}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 5; i++) {
        document.getElementById(`color-${i}`).style.backgroundColor =
          data.colors[i].hex.value;
        document.getElementById(`hex-${i}`).textContent =
          data.colors[i].hex.value;
      }
    });
});
