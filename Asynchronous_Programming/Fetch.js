const showAvatar = async () => {
  let response = await fetch("https://api.github.com/users/iswarya15");

  let user = await response.json(); // returns a Promise

  console.log(user);
};

showAvatar();
