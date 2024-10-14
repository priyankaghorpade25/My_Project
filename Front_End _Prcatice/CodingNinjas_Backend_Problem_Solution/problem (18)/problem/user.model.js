// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
  {
    id: 1,
    name: "coding ninjas",
    email: "ninja@gmail.com",
    image: "https://entrackr.com/storage/2022/10/Coding-Ninjas.jpg",
  },
];

// export const updateUsers = (user) => {
//   const index = users.findIndex((us) => us.id === user.id); // Find the user by ID

//   if (index === -1) {
//     return false; // User not found
//   }

//   // Update the user details
//   users[index] = { ...users[index], ...user }; // Merge existing user with updated data
//   console.log(users[index]); // Log the updated user for debugging

//   return users[index]; // Return the updated user
// };

export const updateUsers = (user) => {
  console.log("User to update:", user); // Log the user object being passed
  const index = users.findIndex((us) => {
    console.log("Comparing with user:", us); // Log each user in the array
    return us.id == user.id; // Check for matching id
  });

  if (index === -1) {
    console.log("User not found"); // Log when user is not found
    return false; // User not found
  }

  // Update user details
  users[index] = { ...users[index], ...user };
  console.log("Updated user:", users[index]); // Log the updated user

  return users[index]; // Return updated user
};