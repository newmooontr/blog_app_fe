const useAuthService = () => {
 const setUser = (data) =>{
    localStorage.setItem("user", JSON.stringify(data));
 };


 const getUser = ()=>{
    const user = localStorage.getItem("user")
    if (user) {
        return JSON.parse(user)
        
    } else {
        return null
    }
 }

 const removeUser = () =>{
    localStorage.removeItem("user")
 }
 return {
    setUser,
    getUser,
    removeUser
 }
};

export default useAuthService;