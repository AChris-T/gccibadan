/* eslint-disable no-unused-vars */
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import UserAbsent from '../UserAbsent/UserAbsent';
import arrow from '../../assets/Images/arrow.png';
import 'react-loading-skeleton/dist/skeleton.css';
import { Box, Button, Modal, Typography } from '@mui/material';
import { FaFingerprint } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '../../assets/Animation.json';
import { motion } from 'framer-motion';
import { FaHandPointer } from 'react-icons/fa';
import HandIcon from '../../assets/HandIcon';

const Attendance = () => {
  const postDataUrl = import.meta.env.VITE_APP_POST_DATA;
  const authUser = JSON.parse(localStorage.getItem('GCCC_ATTENDANCE'));
  const [userTimes, setUserTimes] = useState([]);
  /*  const [currentPage, setCurrentPage] = useState(1); // Current page of pagination */
  const [loading, setLoading] = useState(false);
  const [loadingUserAttendance, setLoadingUserAttendance] = useState(false);
  const [isMarked, setIsMarked] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [isReading, setIsReading] = useState(false);
  const formattedTime = dayjs().format('hh:mm A ');

  /*  const entriesPerPage = 4; // Number of entries per page
  const maxPaginationButtons = 3;
 */
  dayjs.extend(customParseFormat);

  const current = {
    time: dayjs().format('HH:mm A'),
    day: dayjs().format('dddd'),
    date: dayjs().format('DD'),
    month: dayjs().format('MMM'),
    year: dayjs().format('YYYY'),
  };
  const uniqueKey = `${current.day}-${current.date}-${current.month}-${current.year}`;

  /* const formatTime = (time) => {
    if (time) {
      let display = moment(time).utc(time).format('DD MMM YYYY hh:mma');
      return display;
    }
  }; */

  // Function to handle button click
  const handleButtonClick = async () => {
    setLoading(true);
    setIsReading(true);
    setTimeout(() => {
      setIsReading(false);
    }, 4000);

    try {
      const formData = new FormData();
      formData.append(
        'Name',
        `${authUser['First Name']} ${authUser['Last Name']}`
      );
      formData.append('Phone', authUser.Phone);
      formData.append('Email', authUser.Email);
      formData.append('Service', current.day);
      formData.append('Date', new Date());
      formData.append('Time', current.time);
      formData.append('Key', uniqueKey);
      const res = await fetch(postDataUrl, {
        method: 'POST',
        body: formData,
      });
      await res.json();
      toast.success('Your attendance has been recorded');
      setIsMarked(true);
      setOpen(true);
      userAttendance();
      setLoading(false);
    } catch (error) {
      toast.error('Error, Please try again');
      setLoading(false);
    }
  };

  const handleConfirm = () => {
    window.location.href = '/'; // Replace with your actual home page route
  };

  const showAttendanceButton = () => {
    return !isMarked;
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
        setIsMarked(false); //note this
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

  /* const totalPages = Math.ceil(userTimes.length / entriesPerPage);
  const startPage = Math.max(
    1,
    currentPage - Math.floor(maxPaginationButtons / 2)
  ); */

  return (
    <div className="w-full px-2 mt-[70px] ">
      <div className="flex gap-3 flex-col items-center mb-[70px]">
        <div className="flex flex-col items-center justify-between gap-5 mx-4 ">
          <h1 className=" capitalize md:block text-[14px] ml-2 leading-8 font-normal text-white">
            Hello 👋,{authUser['First Name']}
          </h1>
          <div className="flex items-center justify-center w-full gap-1 ">
            <p className="text-[32px] text-center text-white leading-10 font-semibold">
              Welcome To {current.day} Service!{' '}
            </p>
          </div>
        </div>
        {loadingUserAttendance ? (
          <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: 150, height: 150 }}
          />
        ) : (
          <div className="flex flex-col items-center justify-between gap-4 mx-4 ">
            <div className="flex flex-col items-center gap-1">
              {showAttendanceButton() && (
                <div className="p-3 bg-[#2E2E44] rounded-full bg- ">
                  <div className="bg-[#3A4D70] rounded-full">
                    <motion.div
                      onClick={handleButtonClick}
                      className="rounded-full bg-[#4C8EFF] p-9 cursor-pointer relative"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 1.5,
                        type: 'spring',
                      }}
                    >
                      {/* Outer pulsating circles */}
                      <span className="absolute inset-0 rounded-full  border-4 border-[#2c3a61] opacity-40 animate-ping"></span>
                      <span className="absolute inset-1 rounded-full border-4 border-[#2c3a61] opacity-30 animate-ping delay-300"></span>

                      {/* Icon */}
                      <HandIcon />
                    </motion.div>
                  </div>
                </div>
              )}
              {isReading && (
                <p style={{ marginTop: '10px' }} className="text-white">
                  Reading...
                </p>
              )}
              <h3 className="mt-[37px] text-white">
                Tap the button to log your attendance
              </h3>
              <p className="text-sm font-semibold text-white">Clock In Time</p>
              <p className="text-white">{formattedTime}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-col justify-between gap-3">
                <UserAbsent />
              </div>
            </div>
          </div>
        )}
      </div>
      <Modal open={open} className="flex justify-center" onClose={handleClose}>
        <Box className="max-w-sm p-6 m-auto bg-white rounded-md shadow-md">
          <Typography className="my-4">
            Thank you for confirming your attendance
          </Typography>
          <div className="flex justify-end gap-3 mt-5">
            <Button variant="contained" color="primary" onClick={handleConfirm}>
              okay
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Attendance;
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
// }
{
  /*      <div className="flex items-center justify-between px-5 mb-4">
        <div>
              <h3 className="md:text-[20px] text-[16px] text-[#0b2243] font-semibold md:font-medium leading-4">Attendance History</h3>
        </div>
        <div>
          <p className="font-semibold text-[9px] cursor-pointer md:text-[14px] leading-6 text-[#1D4ED8]">View More</p>
        </div>
      </div>
      {loadingUserAttendance ? (
        <Skeleton height={"2rem"} count={10} />
      ) : (
        <TableContainer  className="w-[98%] md:w-full ">
          <Table sx={{ minWidth: 100 }} aria-label="a dense table">
            <TableHead className="h-[px2rem(56)] bg-[#F2F9FF]">
              <TableRow>
                <TableCell
                  align="left"
                  style={{ fontSize: "px2rem(14)", fontWeight: "bold",color:"#6D7A98" }}
                >
                  Index
                </TableCell>
                <TableCell
                  align="left"
                  style={{ fontSize: "px2rem(14)", fontWeight: "bold", color:"#6D7A98" }}
                >
                  Name
                </TableCell>
                <TableCell
                  align="left"
                  style={{ fontSize: "px2rem(14)", fontWeight: "bold",color:"#6D7A98" }}
                >
                  Phone
                </TableCell>
                <TableCell
                  align="left"
                  style={{ fontSize: "px2rem(14)", fontWeight: "bold",color:"#6D7A98" }}
                >
                  Email
                </TableCell>
                <TableCell
                  align="left"
                  style={{ fontSize: "px2rem(14)", fontWeight: "bold",color:"#6D7A98" }}
                >
                  Date
                </TableCell>
                <TableCell
                  align="left"
                  style={{ fontSize: "px2rem(14)", fontWeight: "bold",color:"#6D7A98" }}
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
                    <TableCell align="left" component="th" scope="row"
                      style={{ fontSize: "px2rem(14)", fontWeight: "400",color:"#0B2253" }}

                    >
                      {index + 1}
                    </TableCell>
                    <TableCell align="left" component="th" scope="row"
                    style={{ fontSize: "px2rem(14)", fontWeight: "400",color:"#0B2253" }}

                    >
                      {time.Name}
                    </TableCell>
                    <TableCell align="left" component="th" scope="row"
                      style={{ fontSize: "px2rem(14)", fontWeight: "400",color:"#0B2253" }}

                    >
                      {time.Phone}
                    </TableCell>
                    <TableCell align="left" component="th" scope="row"
                    style={{ fontSize: "px2rem(14)", fontWeight: "400",color:"#0B2253" }}
                    >
                      {time.Email}
                    </TableCell>
                    <TableCell align="left" component="th" scope="row"
                      style={{ fontSize: "px2rem(14)", fontWeight: "400",color:"#0B2253" }}
                    >
                      {formatTime(time.Date)}
                    </TableCell>
                    <TableCell align="left" component="th" scope="row"
                      style={{ fontSize: "px2rem(14)", fontWeight: "400",color:"#0B2253" }}
                    >
                      {time.Key}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <div className="flex flex-wrap justify-end gap-4 px-2 mt-4 ">
        {startPage !== 1 && (
          <button
            className="px-3 py-1 text-white bg-blue-400 rounded-lg"
            onClick={() => handlePageChange(1)}
          >
            Start
          </button>
        )}
        {startPage > 1 && (
          <button
            className="px-3 py-1 text-white bg-blue-400 rounded-lg"
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
            className="w-8 py-1 text-white bg-blue-400 rounded-lg"
            key={page}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        {endPage < totalPages && (
          <button
            className="px-3 py-1 text-white bg-blue-400 rounded-lg"
            onClick={() => handlePageChange(endPage + 1)}
          >
            Next
          </button>
        )}
        {endPage !== totalPages && (
          <button
            className="px-3 py-1 text-white bg-blue-400 rounded-lg"
            onClick={() => handlePageChange(totalPages)}
          >
            Last
          </button>
        )} 
      </div>
        */
}
//  (
//   (!isMarked &&
//     current.day === "Sunday" &&
//     current.time >= "07:30" &&
//     current.time <= "12:30") ||
//   (!isMarked &&
//     current.day === "Tuesday" &&
//     current.time >= "17:30" &&
//     current.time <= "20:30") ||
//   (!isMarked &&
//     current.day === "Friday" &&
//     current.time >= "17:30" &&
//     current.time <= "20:30")
// );
{
  /* <h1 className="mb-2 text-2xl font-bold text-blue-700">Beloved</h1>
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
        </p> */
}
