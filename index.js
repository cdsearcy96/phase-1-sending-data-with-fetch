// Add your code here
function submitFormData() {
    const formData = {
    name: "Byron",
    email: "byronb@gamil.com",
  };
  
  const submitData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  return fetch("http://localhost:3000/users", submitFormData)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    })
    .catch(function (error) {
        alert("Bad things!");
        console.log(error.message);
      });
    }
submitFormData();

