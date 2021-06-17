fetch('https://reqres.in/api/users?page=1')
  .then(response => response.json())
  .then(json => {
    // console.log(json.data);
    const items = json.data.map(element => {
      const cardContainer = document.createElement("li");
      cardContainer.classList.add("card-container");

      const imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");
      cardContainer.appendChild(imgContainer);

      const round = document.createElement("img");
      round.src = element.avatar;
      round.classList.add("round");
      imgContainer.appendChild(round);

      const nameContainer = document.createElement("div");
      nameContainer.classList.add("name-container");
      cardContainer.appendChild(nameContainer);

      const firstName = document.createElement("span");
      firstName.classList.add("first-name");
      firstName.innerHTML = `${element.first_name} ${element.last_name}`;
      nameContainer.appendChild(firstName);

      //const lastName = document.createElement("span");
      //lastName.classList.add("last-name");
      //lastName.innerHTML = element.last_name;
      //nameContainer.appendChild(lastName);

      const email = document.createElement("p");
      email.classList.add("email");
      email.innerHTML = element.email;
      nameContainer.appendChild(email);

      return cardContainer;
    });

    const containerHolder = document.getElementById('list-container');
    for (let i in items) {
      containerHolder.appendChild(items[i]);
    }
  });