const DOMAIN ='http://localhost:3000';


function getUsers() {
  return fetch(`${DOMAIN}`)
  .then(function (res) { return res.json() });
}


function addUser (userParams) {
  return fetch(
    `${DOMAIN}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({user: userParams})
        }
  )
}

export { getUsers, addUser};
