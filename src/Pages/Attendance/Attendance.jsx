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

const Attendance = () => {
  const postDataUrl = import.meta.env.VITE_APP_POST_DATA;
  const user = JSON.parse(localStorage.getItem("GCCC_ATTENDANCE"));

  const [buttonClicked, setButtonClicked] = useState(false); // Track if the button has been clicked
  const [userTimes, setUserTimes] = useState([]);
  const [status, setStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Current page of pagination
  const [loading, setLoading] = useState(false);

  const entriesPerPage = 4; // Number of entries per page
  const maxPaginationButtons = 3;

  const currentDay = dayjs().format("dddd");
  const currentTime = dayjs().format("h:mm A");

  // Function to handle button click
  const handleButtonClick = async () => {
    setLoading(true);
    const currentTime = {
      day: dayjs().format("dddd"),
      time: dayjs().format("h:mm A"),
      month: dayjs().format("MMM"),
      year: dayjs().format("YYYY"),
    };
    setUserTimes((prevTimes) => [...prevTimes, currentTime]);
    const currentDay = dayjs().format("dddd");
    const currentTimeClicked = dayjs().format("HH:mm");
    if (
      (currentDay === "Sunday" &&
        currentTimeClicked >= "03:00" &&
        currentTimeClicked <= "25:00") ||
      (currentDay === "Friday" &&
        currentTimeClicked >= "17:00" &&
        currentTimeClicked <= "23:52") ||
      (currentDay === "Tuesday" &&
        currentTimeClicked >= "17:00" &&
        currentTimeClicked <= "00:00")
    ) {
      try {
        // const ress = await fetch(postDataUrl);
        // console.log(await ress.json());

        const formData = new FormData();
        formData.append("Name", `${user["First Name"]} ${user["Last Name"]}`);
        formData.append("Phone", user.Phone);
        formData.append("Email", user.Email);
        formData.append("Service", currentDay);
        formData.append("Date", dayjs().format("LL"));
        formData.append("Time", currentTimeClicked);
        const res = await fetch(postDataUrl, {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        console.log(data);
        toast.success("Your attendance has been recorded");
        setButtonClicked(true);
        setStatus("Attend");
        setLoading(false);
      } catch (error) {
        toast.error("Error, Please try again");
        setLoading(false);
      }
    } else {
      setStatus("");
      toast.error("Error, Please try again");
    }
  };
  const showAttendanceButton = () => {
    const currentDay = dayjs().format("dddd");
    const currentTime = dayjs().format("HH:mm");

    return (
      ((currentDay === "Sunday" &&
        currentTime >= "03:00" &&
        currentTime <= "25:00") ||
        (currentDay === "Friday" &&
          currentTime >= "17:00" &&
          currentTime <= "23:52") ||
        (currentDay === "Tuesday" &&
          currentTime >= "17:00" &&
          currentTime <= "00:00")) &&
      !buttonClicked
    );
  };

  useEffect(() => {
    const currentDay = dayjs().format("dddd");
    const currentTime = dayjs().format("HH:mm.");
    if (
      showAttendanceButton() &&
      ((currentDay === "Sunday" &&
        currentTime >= "03:00" &&
        currentTime <= "25:00") ||
        (currentDay === "Friday" &&
          currentTime >= "17:00" &&
          currentTime <= "23:52") ||
        (currentDay === "Tuesday" &&
          currentTime >= "17:00" &&
          currentTime <= "00:00"))
    ) {
      setStatus("");
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
      {showAttendanceButton() && (
        <div className="w-[99%] md:w-full h-[80px] justify-between mb-10 flex items-center px-4 bg-blue-500 text-white rounded-lg">
          <h3 className="w-[245px] md:w-full flex  md:text-center text-[15px]">
            Mark Attendance for {currentDay} Service | Time: {currentTime}
          </h3>
          <button
            onClick={handleButtonClick}
            className="border-2 px-5 py-2 rounded-lg"
          >
            {loading && <span>Loading...</span>}
            {!loading && <span> Mark Attendance</span>}
          </button>
        </div>
      )}
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
                Year
              </TableCell>
              <TableCell
                align="center"
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Month
              </TableCell>
              <TableCell
                align="center"
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Day
              </TableCell>
              <TableCell
                align="center"
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Time
              </TableCell>
              <TableCell
                align="center"
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Status
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
                    {time.year}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {time.month}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {time.day}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {time.time}
                  </TableCell>
                  <TableCell
                    align="right"
                    className="px-4 py-5 mt-4"
                    component="th"
                    scope="row"
                  >
                    <div
                      className="text-white h-8 flex justify-center items-center rounded-lg"
                      style={{
                        backgroundColor: status === "Attend" ? "blue" : "red",
                      }}
                    >
                      {status || ""}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

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
