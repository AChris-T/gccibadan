
const UserAbsent = () => {
    const getAllUsersDataUrl = import.meta.env.VITE_APP_GET_DATA;
    const getAllUsersAttendanceURL = import.meta.env.VITE_APP_POST_DATA

      const fetchData = async () => {
        try {
          // Fetch data from the first and second Google Sheets APIS endpoint
          const getAllUsers = await fetch(getAllUsersDataUrl);
          const getAllAttend = await fetch(getAllUsersAttendanceURL);
      
          if (getAllUsers.ok && getAllAttend.ok) {
            const AllUsers = await getAllUsers.json();
            const AttendUsers = await getAllAttend.json();
      
            // Extract emails from both datasets
            const userEmail = AllUsers.map(user => user.Email);
            const AttendEmail = AttendUsers.map(user => user.Email);
      
            // Find users that are in the first API but not in the second one
            const usersNotInSecondAPI = userEmail.filter(Email => !AttendEmail.includes(Email));
      
            console.log("Atted Users",AttendEmail)
            console.log('Users not in the second API:', usersNotInSecondAPI);
          } else {
            console.error('Failed to fetch data:', getAllUsers.status, getAllAttend.status);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      fetchData();
      
      
  return (
    <div>
      
    </div>
  )
}

export default UserAbsent
