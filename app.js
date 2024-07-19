// const login = async (username , password) => {
//     if(!username || !password) throw "missing credentials" ;

//     if(username !== "nischit") throw "Invalid username";
//     if(password !== "vimal123") throw "Invalid password";

//     return "login succesfull"
// }

// login("nischit","vimal123")
// .then((data) => console.log(data))
// .catch((err) => console.log(err))


// function changeColor(color, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay);
//     });
// }

// async function wait() {
//     await changeColor('red', 1000);
//     await changeColor('orange', 1000);
//     await changeColor('green', 1000);
//     await changeColor('black', 1000);
//     await changeColor('yellow', 1000);
//     await changeColor('pink', 1000);
//     await changeColor('magenta', 1000);
//     return "wow beautiful"
// }

// wait()
// .then((data) => console.log(data))

// const data=`{"widget": {"debug": "on","window": {"title": "Sample Konfabulator Widget","name": "main_window","width": 500,"height": 500}}}` 

// const printName = async (id) => {
//     try{
//         const res = await fetch(`https://swapi.dev/api/people/${id}`);
//         const data = res.json();
//         console.log(data);
//     }catch(err){
//         console.log("gg",err);
//     }
// }

// printName(3);

// axios.get("https://swapi.dev/api/people/1");
const user = document.querySelector("#username");
const imgUrl = document.querySelector("#avatar_url");
const errorMessage = document.querySelector("#error-message"); // Assuming you have an element for error messages

const getUserInfo = async () => {
    try {
        const username = user.value.trim();
        if (!username) {
            throw new Error("Please enter a username");
        }

        errorMessage.textContent = ""; // Clear any previous error
        imgUrl.alt = "Loading..."; // Indicate loading state

        const config = {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        }
        const res = await axios.get(`https://api.github.com/users/${username}`, config)
        // console.log(res.data);

        const url = res.data.avatar_url;
        imgUrl.src = url;
        imgUrl.alt = `${username}'s GitHub avatar`;

    } catch(error) {
        console.error(error);
        errorMessage.textContent = error.message || "User not found";
        clear();
    }
}

const clear = () => {
    imgUrl.src = '';
    imgUrl.alt = '';
}


