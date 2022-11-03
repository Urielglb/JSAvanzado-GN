import { getUserRepos } from "./api";

const createUser = async (user) => {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("card");
    const avatarImg = document.createElement("img");
    avatarImg.src = user.avatar_url;
    avatarImg.alt = "Foto de usuario";
    mainDiv.appendChild(avatarImg);
    const name = document.createElement("h2");
    name.innerText = user.login;
    mainDiv.append(name);

    try {
      const repos = await getUserRepos(user.repos_url);
      addRepos(repos,mainDiv);  
    } catch (error) {
      throw new Error("Algo salio mal al obtener los repos")
    }
    const profile = document.createElement("a");
    profile.innerText = "Github"
    profile.href = user.url;
    profile.target = "blank";
    profile.classList.add("button");
    mainDiv.appendChild(profile);
    document.getElementById("app").appendChild(mainDiv)
  }

  const addRepos = (repos, card)=>{
    const repoDetails = document.createElement("details");
    const summaryRepo = document.createElement("summary");
    summaryRepo.innerText ="Repositorios:"
    summaryRepo.classList.add("button-repo");
    repoDetails.appendChild(summaryRepo);
    repos.forEach((repo)=>{
      const link = document.createElement("a");
      link.innerText = repo.name;
      link.href = repo.html_url;
      repoDetails.appendChild(link);
    })
    card.appendChild(repoDetails);
  }


  const mountUsers = async (getUsersFunction) => {
    alert("En proceso")
    try {
      const users = await getUsersFunction();
      users.forEach(user => {
        createUser(user);
      });

    } catch (error) {
      alert("Fin");
      throw new Error("Algo salio mal")
    }
    alert("Fin");
  }

  export {
    mountUsers
  }