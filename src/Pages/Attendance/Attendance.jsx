import dayjs from "dayjs";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { toast } from "react-toastify";
import UserAbsent from "../UserAbsent/UserAbsent";
import moment from "moment";

const Attendance = () => {
  const postDataUrl = import.meta.env.VITE_APP_POST_DATA;
  const user = JSON.parse(localStorage.getItem("GCCC_ATTENDANCE"));

  const [buttonClicked, setButtonClicked] = useState(false); // Track if the button has been clicked
  const [userTimes, setUserTimes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page of pagination
  const [loading, setLoading] = useState(false);
  const [userattendance, setUserAttendance] = useState(null);

  const entriesPerPage = 4; // Number of entries per page
  const maxPaginationButtons = 3;

  const currentDay = dayjs().format("dddd");
  const currentTime = dayjs().format("h:mm A");

  const formatTime = (time) => {
    if (time) {
      let display = moment(time).utc(time).format("DD MMM YYYY hh:mma");
      return display;
    }
  };
  // Function to handle button click
  const handleButtonClick = async () => {
    setLoading(true);
    localStorage.setItem("buttonClicked", "true");
    const currentTime = {
      day: dayjs().format("dddd"),
      time: dayjs().format("h:mm A"),
      date: dayjs().format("DD"),
      month: dayjs().format("MMM"),
      year: dayjs().format("YYYY"),
    };
    const currentDay = dayjs().format("dddd");
    const currentTimeClicked = dayjs().format("HH:mm");
    try {
      const formData = new FormData();
      formData.append("Name", `${user["First Name"]} ${user["Last Name"]}`);
      formData.append("Phone", user.Phone);
      formData.append("Email", user.Email);
      formData.append("Service", currentDay);
      formData.append("Date", dayjs().format("LL"));
      formData.append("Time", currentTimeClicked);
      formData.append(
        "Key",
        `${currentTime.day}-${currentTime.date}-${currentTime.month}-${currentTime.year}`
      );
      const res = await fetch(postDataUrl, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log(data);
      toast.success("Your attendance has been recorded");
      userAttendance();
      setButtonClicked(true);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      toast.error("Error, Please try again");
      setLoading(false);
    }
  };
  const showAttendanceButton = () => {
    const currentDay = dayjs().format("dddd");
    const currentTime = dayjs().format("HH:mm");

    return (
      ((currentDay === "Sunday" &&
        currentTime >= "01:00" &&
        currentTime <= "25:00") ||
        (currentDay === "Wednesday" &&
          currentTime >= "12:33" &&
          currentTime <= "24:35") ||
        (currentDay === "Wednesday" &&
          currentTime >= "06:24" &&
          currentTime <= "06:30")) &&
      !buttonClicked
    );
  };

  const userAttendance = async () => {
    setUserAttendance("Loading my attendance...");

    try {
      let authUser = localStorage.getItem("GCCC_ATTENDANCE");
      authUser = JSON.parse(authUser);
      let getAllAttend = await fetch(postDataUrl);
      getAllAttend = await getAllAttend.json();
      getAllAttend = getAllAttend.filter(
        (user) => user.Email.toLowerCase() == authUser.Email.toLowerCase()
      );
      setUserTimes(getAllAttend);
      setUserAttendance(null);
    } catch (error) {
      setUserTimes([]);
      setUserAttendance(null);
    }
  };

  useEffect(() => {
    userAttendance();

    // Retrieve button clicked status from local storage
    const isButtonClicked = localStorage.getItem("buttonClicked");

    // Initialize button clicked status based on the value retrieved from local storage **
    if (isButtonClicked === "true") {
      setButtonClicked(true);
    }
  }, []);

  //clear locaal storage based on time
  useEffect(() => {
    const currentTimeString = dayjs().format("HH:mm");
    const currentDay = dayjs().format("dddd");

    if (
      (currentDay === "Sunday" && currentTimeString > "26:00") ||
      (currentDay === "Wednesday" && currentTimeString === "24:40") ||
      (currentDay === "Wednesday" && currentTimeString === "06:36")
    ) {
      // Clear local storage if the specified time range has elapsed
      localStorage.removeItem("buttonClicked");
      // Reset button clicked status
      setButtonClicked(false);
    }
  }, []);

  const totalPages = Math.ceil(userTimes.length / entriesPerPage);

  // Calculate start and end page numbers for pagination buttons
  const startPage = Math.max(
    1,
    currentPage - Math.floor(maxPaginationButtons / 2)
  );
  const endPage = Math.min(totalPages, startPage + maxPaginationButtons - 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full px-2 mt-[50px] h-[100vh] ">
      <div className="mb-3">
        <h1 className="mb-2 text-blue-700 text-2xl font-semibold">Beloved, </h1>
        <p className="text-lg">
          We welcome you to our church attendance website.{" "}
        </p>
        <p className="text-lg">
          At Glory Centre Community Church Ibadan, we believe in fellowship and
          the importance of staying connected. Therefore, this platform is
          designed with you in mind, making it easier than ever to keep track of
          our church family.
        </p>
        <p className="text-lg">
          As you record your attendance today, remember that your presence in
          person or virtually is a valued and essential part of our church
          community.
        </p>
      </div>
      {showAttendanceButton() && (
        <div className="mb-3 inline-flex flex-col text-black rounded-lg">
          <h3 className="text-[16px] mb-2">
            Mark Attendance for {currentDay} Service | Time: {currentTime}
          </h3>
          <button
            onClick={handleButtonClick}
            className="border-2 hover:bg-blue-600 border-[blue] px-5 py-2 rounded-lg bg-[blue] md:text-[16px] font-bold text-[white]"
          >
            {loading && <span>Loading...</span>}
            {!loading && <span> Mark Attendance</span>}
          </button>
        </div>
      )}
      <UserAbsent />
      <TableContainer component={Paper} className="w-[98%] md:w-full">
        <Table sx={{ minWidth: 200 }} aria-label="a dense table">
          <TableHead className="h-[50px]">
            <TableRow>
              <TableCell
                align="center"
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Index
              </TableCell>
              <TableCell
                align="center"
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Name
              </TableCell>
              <TableCell
                align="center"
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Phone
              </TableCell>
              <TableCell
                align="center"
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Email
              </TableCell>
              <TableCell
                align="center"
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Date
              </TableCell>
              <TableCell
                align="center"
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Key
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userTimes
              .slice(
                (currentPage - 1) * entriesPerPage,
                currentPage * entriesPerPage
              )
              .map((time, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {time.Name}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {time.Phone}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {time.Email}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {formatTime(time.Date)}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {time.Key}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {userattendance ? (
        <p className="my-2 text-center text-red-500">{userattendance}</p>
      ) : null}

      <div className=" flex flex-wrap justify-end px-2 gap-4 mt-4">
        {startPage !== 1 && (
          <button
            className="bg-blue-400 py-1 text-white rounded-lg px-3"
            onClick={() => handlePageChange(1)}
          >
            Start
          </button>
        )}
        {startPage > 1 && (
          <button
            className="bg-blue-400 py-1 text-white rounded-lg px-3"
            onClick={() => handlePageChange(startPage - 1)}
          >
            Previous
          </button>
        )}
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => i + startPage
        ).map((page) => (
          <button
            className="bg-blue-400 py-1 text-white rounded-lg w-8"
            key={page}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        {endPage < totalPages && (
          <button
            className="bg-blue-400 py-1 text-white rounded-lg px-3"
            onClick={() => handlePageChange(endPage + 1)}
          >
            Next
          </button>
        )}
        {endPage !== totalPages && (
          <button
            className="bg-blue-400 py-1 text-white rounded-lg px-3"
            onClick={() => handlePageChange(totalPages)}
          >
            Last
          </button>
        )}
      </div>
    </div>
  );
};

export default Attendance;
