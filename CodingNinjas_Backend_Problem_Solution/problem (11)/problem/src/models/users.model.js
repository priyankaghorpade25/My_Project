// Please don't change the pre-written code
// Import the necessary modules here
import axios from "axios";

export const userModel = async () => {
  console.log("me");
  const response= await axios.get("https://dummyjson.com/users");
  const data=response.data.users;
  return data;

  
 
};
