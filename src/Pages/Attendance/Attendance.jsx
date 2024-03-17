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
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Attendance = () => {
  const postDataUrl = import.meta.env.VITE_APP_POST_DATA;
  const authUser = JSON.parse(localStorage.getItem("GCCC_ATTENDANCE"));

  const [userTimes, setUserTimes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page of pagination
  const [loading, setLoading] = useState(false);
  const [loadingUserAttendance, setLoadingUserAttendance] = useState(false);
  const [isMarked, setIsMarked] = useState(false);

  const entriesPerPage = 4; // Number of entries per page
  const maxPaginationButtons = 3;

  const current = {
    time: dayjs().format("HH:mm A"),
    day: dayjs().format("dddd"),
    date: dayjs().format("DD"),
    month: dayjs().format("MMM"),
    year: dayjs().format("YYYY"),
  };

  const uniqueKey = `${current.day}-${current.date}-${current.month}-${current.year}`;

  const formatTime = (time) => {
    if (time) {
      let display = moment(time).utc(time).format("DD MMM YYYY hh:mma");
      return display;
    }
  };

  // Function to handle button click
  const handleButtonClick = async () => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append(
        "Name",
        `${authUser["First Name"]} ${authUser["Last Name"]}`
      );
      formData.append("Phone", authUser.Phone);
      formData.append("Email", authUser.Email);
      formData.append("Service", current.day);
      formData.append("Date", new Date());
      formData.append("Time", current.time);
      formData.append("Key", uniqueKey);
      const res = await fetch(postDataUrl, {
        method: "POST",
        body: formData,
      });
      await res.json();
      toast.success("Your attendance has been recorded");
      setIsMarked(true);
      userAttendance();
      setLoading(false);
    } catch (error) {
      toast.error("Error, Please try again");
      setLoading(false);
    }
  };

  // move to established
  // const moveToEstablished = async () => {
  //   try {
  //     const formData = new FormData();

  //     formData.append("Timestamp", new Date());
  //     formData.append("Email", authUser.Email);
  //     formData.append("First Name", authUser["First Name"]);
  //     formData.append("Last Name", authUser["Last Name"]);
  //     formData.append("Phone", authUser.Phone);
  //     formData.append("Gender", authUser.Gender);
  //     formData.append(
  //       "How did you learn about GCCC ?",
  //       authUser["How did you learn about GCCC ?"]
  //     );
  //     formData.append(
  //       "Name of Friend/Family",
  //       authUser["Name of Friend/Family"]
  //     );
  //     formData.append(
  //       "Do you reside in Ibadan?",
  //       authUser["Do you reside in Ibadan?"]
  //     );
  //     formData.append(
  //       "Would you be interested in becoming a consistent member of GCCC?",
  //       authUser[
  //         "Would you be interested in becoming a consistent member of GCCC?"
  //       ]
  //     );
  //     formData.append(
  //       "Address in Ibadan (Kindly provide a detailed description of your home address)",
  //       authUser[
  //         "Address in Ibadan (Kindly provide a detailed description of your home address)"
  //       ]
  //     );
  //     formData.append("Date of Birth", authUser["Date of Birth"]);
  //     formData.append("What do you do?", authUser["What do you do?"]);
  //     formData.append(
  //       "What did you enjoy about the service today?",
  //       authUser["What did you enjoy about the service today?"]
  //     );
  //     formData.append(
  //       "Kindy share your prayer point with us (if any)",
  //       authUser["Kindy share your prayer point with us (if any)"]
  //     );
  //     formData.append("Status", authUser.Status);

  //     await fetch(postDataUrl, {
  //       method: "POST",
  //       body: formData,
  //     });
  //   } catch (error) {
  //     toast.error("Error, Please try again");
  //   }
  // };

  const showAttendanceButton = () => {
    return (
      (!isMarked &&
        current.day === "Sunday" &&
        current.time >= "00:00" &&
        current.time <= "11:00") ||
      (current.day === "Tuesday" &&
        current.time >= "17:30" &&
        current.time <= "19:30") ||
      (current.day === "Friday" &&
        current.time >= "17:30" &&
        current.time <= "19:30")
    );
  };

  const userAttendance = async () => {
    setLoadingUserAttendance(true);

    try {
      let getAllAttend = await fetch(postDataUrl);
      getAllAttend = await getAllAttend.json();
      getAllAttend = getAllAttend.filter(
        (user) =>
          user.Email.toLowerCase() == authUser.Email.toLowerCase() ||
          user.Phone == authUser.Phone
      );
      const alreadyMarked = getAllAttend.find((user) => user.Key == uniqueKey);
      if (alreadyMarked) {
        setIsMarked(true);
      }
      // if (getAllAttend.length >= 0) {
      //   moveToEstablished();
      // }
      setUserTimes(getAllAttend);
      setLoadingUserAttendance(false);
    } catch (error) {
      setUserTimes([]);
      setLoadingUserAttendance(false);
      setIsMarked(false);
    }
  };

  useEffect(() => {
    userAttendance();
  }, []);

  const totalPages = Math.ceil(userTimes.length / entriesPerPage);
  const startPage = Math.max(
    1,
    currentPage - Math.floor(maxPaginationButtons / 2)
  );
  const endPage = Math.min(totalPages, startPage + maxPaginationButtons - 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full px-2 mt-[50px] h-[100vh]">
      <div className="mb-3">
        <h1 className="mb-2 text-blue-700 text-2xl font-bold">Beloved</h1>
        <p className="">We welcome you to our church attendance website.</p>
        <p className="">
          At Glory Centre Community Church Ibadan, we believe in fellowship and
          the importance of staying connected. Therefore, this platform is
          designed with you in mind, making it easier than ever to keep track of
          our church family.
        </p>
        <p className="">
          As you record your attendance today, remember that your presence in
          person or virtually is a valued and essential part of our church
          community.
        </p>
      </div>
      <hr />

      <div className="my-7">
        <>
          <h3 className="text-[16px] mb-2">
            Mark Attendance for <strong>{current.day}</strong> Service | Time:{" "}
            {""}
            <strong>{current.time}</strong>
          </h3>

          {loadingUserAttendance ? (
            <Skeleton height={"2rem"} count={2} />
          ) : (
            <div className="flex justify-between flex-wrap">
              {showAttendanceButton() && (
                <button
                  onClick={handleButtonClick}
                  className="border-2 my-2 hover:bg-blue-600 border-[#6565ef] px-5 py-2 rounded-lg bg-[blue] md:text-[16px] font-bold text-[white]"
                >
                  {loading && <span>Loading...</span>}
                  {!loading && <span> Mark Attendance</span>}
                </button>
              )}
              <UserAbsent />
            </div>
          )}
        </>
      </div>

      <hr />

      {loadingUserAttendance ? (
        <Skeleton height={"2rem"} count={10} />
      ) : (
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
      )}

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
