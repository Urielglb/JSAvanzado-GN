const getUsers = async (numberOfUsers = 4) => {
    const response = await fetch("https://api.github.com/users");
    const responseJson = await response.json();
    return responseJson.slice(0, numberOfUsers);
  }

  const getRandomUsers = async (numberOfUsers = 4)=>{
    const response = await fetch("https://api.github.com/users");
    const responseJson = await response.json();
    const randomUsers = [];
    const usersLen = responseJson.length;
    while (randomUsers.length < numberOfUsers) {
      const random = Math.floor(Math.random() * usersLen);
      randomUsers.push(responseJson[random]);
    }
    return randomUsers;
  } 

  const getUserRepos = async (url, numberOfUsers=4)=>{
    const response = await fetch(url);
    const responseJson = await response.json()
    return responseJson.slice(0, numberOfUsers);
  }

export {
    getUsers,
    getRandomUsers,
    getUserRepos,
}