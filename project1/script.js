(function () {
  "use strict";
  const answer = document.getElementById("answer");
  document
    .getElementById("convert")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let distance = document.getElementById("distance").value;
      distance = parseFloat(distance);

      if (distance) {
        const conversion = distance * 1.609344;
        const roundedConversion = Math.round(conversion * 1000) / 1000;

        answer.innerHTML = `<h2>${distance} miles conevrted to ${roundedConversion} kms</h2>`;
      } else {
        answer.innerHTML = `<h2>Enter proper value.</h2>`;
      }
    });
})();
