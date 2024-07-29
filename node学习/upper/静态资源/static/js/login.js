let user = document.querySelector("#username")
    let login = document.querySelector("#login")
    let loginPost = document.querySelector("#loginPost")
    let password = document.querySelector("#password")
    login.onclick=()=>{
        fetch(`/loginRequest?username=${user.value}&password=${password.value}`).then(res=>res.json()).then(res=>{
            console.log(res);
        })
    }
    loginPost.onclick=()=>{
        fetch(`api/loginRequestPost`,{
            method:"POST",
            body:JSON.stringify({
                username:user.value,
                password:password.value
            }),
            headers:{
                "Content-Type":'application/json'
            }
        }).then(res=>res.text()).then(res=>{
            console.log(res);
        })
    }