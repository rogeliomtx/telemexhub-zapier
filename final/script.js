/*
  Enlaces de interés:
  DOM selection
  https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
  https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

  let
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

  const
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
*/
(() => {
  const url = "";

  const enviarBtn = document.querySelector("#enviar");
  const mensajeTxt = document.querySelector("#mensaje");
  const respuestaTxt = document.querySelector("#respuesta");

  function enviarMensaje() {
    let mensaje = mensajeTxt.value;
    let data = { "mensaje": mensaje };

    /*
      https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
      https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      */
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(response => {
      /* obtiene el el cuerpo de resultado */
      return response.json();
    })
    .then(data => {
      imprimirRespuesta(JSON.stringify(data));
    })
    .catch(error => {
      console.log(error);
    });
  }

  function imprimirRespuesta(respuesta) {
    respuestaTxt.innerText = respuesta;
  }

  enviarBtn.addEventListener("click", enviarMensaje);
})();
