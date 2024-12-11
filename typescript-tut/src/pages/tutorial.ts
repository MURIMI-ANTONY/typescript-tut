function Tutorial() {
    enum LoginError {
        Unauthorized = "unauthorized",
        NoUser = "nouser",
        WrongCredentials = "wrongcredentials",
        Internal = "internal"
    }
    const printError=(err:LoginError)=>{
        if (err== LoginError.Unauthorized ){
            console.log("User not authorized");
        }else if (err== LoginError.NoUser){
            console.log("No user was found with that username")
        }else if (err==LoginError.WrongCredentials){
            console.log("Wrong username/password combination")
        }else{
            console.log("Internal Error.")
        }
        console.log(err)

    }

    printError(LoginError.Internal)
}

export default Tutorial;
