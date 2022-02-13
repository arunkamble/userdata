
export const searchUser=(searchedKeyword)=>{
     return{
         type:"searchUser",
         payload: searchedKeyword
         }
}

export default searchUser;