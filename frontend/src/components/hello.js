let username="manish"
let password="a123"
let keyword="software"
let location="Delhi"
axios.post('http://127.0.0.1:8000/api/', {
    username,
    password,
    keyword,
    location
})
.then(response => {
    // Handle the response data
    alert(response.data.message);  // Example: Show an alert with the message

    // Perform additional actions here (e.g., redirect to another page)
    // Example: Redirect to a success page or perform some other action
    // history.push('/success');  // Assuming you are using React Router for navigation

})
.catch(error => {
    // Handle errors
    console.error('There was an error!', error);
    alert('There was an error while processing your request.');  // Example: Show an error message
});
