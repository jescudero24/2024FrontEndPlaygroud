/* **********     Curso JavaScript: 109. AJAX: Librería Axios - #jonmircha     ********** */

(() => {
    const $axios = document.getElementById("jsonplaceholder"),
      $fragment = document.createDocumentFragment();
  
    axios
      //.get("assets/users.json")
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        //console.log(res);
        let json = res.data;
  
        json.forEach((el) => {
          const $li = document.createElement("li");
          $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
          $fragment.appendChild($li);
        });
  
        $axios.appendChild($fragment);
      })
      .catch((err) => {
        //console.log(err.response);
        let message = err.response.statusText || "Ocurrió un error";
        $axios.innerHTML = `Error ${err.response.status}: ${message}`;
      })
      .finally(() => {
        //console.log("Esto se ejecutará independientemente del resultado Axios");
      });
  })();



(() => {
      const $axios = document.getElementById("rickMorty"),
      $fragment = document.createDocumentFragment();
  
    axios
      //.get("assets/users.json")
      .get("https://rickandmortyapi.com/api/character/1,2,3,4,5,11")
      .then((res) => {
        //console.log(res);
        let json = res.data;
  // si se pide una pagina habra que hacer json.results.forEach
        json.forEach((el) => {
          const $li = document.createElement("li");
          $li.innerHTML = `${el.name} -- ${el.species} -- ${el.origin.name}`;
          $fragment.appendChild($li);
        });
  
        $axios.appendChild($fragment);
      })
      .catch((err) => {
        //console.log(err.response);
        let message = err.response.statusText || "Ocurrió un error";
        $axios.innerHTML = `Error ${err.response.status}: ${message}`;
      })
      .finally(() => {
        //console.log("Esto se ejecutará independientemente del resultado Axios");
      });
  })();