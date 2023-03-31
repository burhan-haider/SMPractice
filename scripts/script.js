// Use this file for any javascript required.

fetch("https://reqres.in/api/users?page=1")
        .then((response) => response.json())
        .then((data) => {
          const followersList = document.getElementById("followers-list");
          data.data.forEach((user) => {
            const li = document.createElement("li");
            const img = document.createElement("img");
            img.src = user.avatar;
            img.alt = "Avatar";
            const name = document.createElement("span");
            name.innerHTML = `<b>${user.first_name} ${user.last_name}</b> - ${user.email}<br>`;
            li.appendChild(img);
            li.appendChild(name);
            followersList.appendChild(li);
          });
        })
        .catch((error) => console.error(error));