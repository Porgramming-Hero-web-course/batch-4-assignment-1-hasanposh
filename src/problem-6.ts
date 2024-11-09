interface UserProfile {
    name : string,
    age : number,
    email : string
}

const myProfile: UserProfile = { 
    name: "Alice", 
    age: 25, 
    email: "alice@example.com" 
  };


  const updateProfile = (profile: UserProfile, updates: Partial<UserProfile>): UserProfile => {
    // console.log(updates)
    // console.log(profile)
    // return { ...profile, ...updates };

    for (const key in profile) {
        if ((key in updates)) {
          profile[key] = updates[key];
        }
      }

  };
  

  console.log(updateProfile(myProfile, { age: 26 , name : "mojnu" }));