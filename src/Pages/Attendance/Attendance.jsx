import dayjs from 'dayjs'
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


// const isLoggedIn = localStorage.getItem("GCCC_ATTENDANCE",);

const Attendance = () => {
    const [buttonClicked, setButtonClicked] = useState(false); // Track if the button has been clicked
    const [userTimes, setUserTimes] = useState([]);
    const [status, setStatus] = useState('')
    const [currentPage, setCurrentPage] = useState(1); // Current page of pagination
    const entriesPerPage = 4; // Number of entries per page
    const maxPaginationButtons = 3; 


    const currentDay = dayjs().format('dddd');
    const currentTime = dayjs().format("h:mm A")


    // Function to handle button click
    const handleButtonClick = () => {
      setButtonClicked(true);


      const currentTime ={  
      day: dayjs().format('dddd'),
      time: dayjs().format('h:mm A'),
      month:dayjs().format("MMM"),
      year: dayjs().format('YYYY')
      }
      setUserTimes(prevTimes => [...prevTimes, currentTime]);
      const currentDay = dayjs().format('dddd');
      const currentTimeClicked = dayjs().format("HH:mm")
      if ((currentDay === "Saturday" && currentTimeClicked >= "07:00" && currentTimeClicked <='12:00') ||
      (currentDay === "Friday" && currentTimeClicked >= "17:00" && currentTimeClicked <= "23:52") ||
      (currentDay === "Tuesday" && currentTimeClicked >="17:00" && currentTimeClicked <= "00:00")
      ){
        setStatus("Attend");
      }else{
        setStatus("Absent")
      }
    };
    const showAttendanceButton = () =>{
      const currentDay =dayjs().format('dddd');
      const currentTime = dayjs().format("HH:mm")

      return ((currentDay === "Saturday" && currentTime >= "07:00" && currentTime <='12:00') ||
          (currentDay === "Friday" && currentTime >= "17:00" && currentTime <= "23:52") ||
          (currentDay === "Tuesday" && currentTime >="17:00" && currentTime <= "00:00")
          ) &&
          !buttonClicked; 


    }
  /*   useEffect (() => {
      if (!showAttendanceButtton() && status === ""){
        setStatus("Absent")
      }
    },[status])
 */
    useEffect(() => {
      const currentDay = dayjs().format('dddd');
      const currentTime = dayjs().format('HH:mm.');
      if (showAttendanceButton() && ((currentDay === "Saturday" && currentTime >= "07:00" && currentTime <='12:00') ||
      (currentDay === "Friday" && currentTime >= "17:00" && currentTime <= "23:52") ||
      (currentDay === "Tuesday" && currentTime >="17:00" && currentTime <= "00:00"))
       ) {
        setStatus('Absent');
      }
    }, []);
  
   /*  const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = userTimes.slice(indexOfFirstItem, indexOfLastItem);*/
    
    const totalPages = Math.ceil(userTimes.length / entriesPerPage);

    // Calculate start and end page numbers for pagination buttons
    const startPage = Math.max(1, currentPage - Math.floor(maxPaginationButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxPaginationButtons - 1);
  
   // const paginate = pageNumber => setCurrentPage(pageNumber);

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  

    return (
     <div className="w-full px-2 mt-[50px] h-[100vh]">
   { showAttendanceButton() && <div className="w-[99%] md:w-full h-[80px] justify-between mb-10 flex items-center px-4 bg-blue-500 text-white rounded-lg">
      <h3 className='w-[245px] md:w-full flex  text-center'>Mark Attendance for {currentDay} {currentTime}</h3>
      <button onClick={handleButtonClick} className="border-2 px-5 py-2 rounded-lg">Mark</button>
    </div>
   }
    <TableContainer component={Paper} className='w-[98%] md:w-full'>
    <Table sx={{ minWidth: 200 }}  aria-label="a dense table">
      <TableHead className='h-[50px]' >
        <TableRow>
          <TableCell align='center' style={{fontSize:"15px",fontWeight:"bold"}}>Index</TableCell>
          <TableCell align='center' style={{fontSize:"15px",fontWeight:"bold"}}>Year</TableCell>
          <TableCell align='center' style={{fontSize:"15px",fontWeight:"bold"}}>Month</TableCell>
          <TableCell align='center' style={{fontSize:"15px",fontWeight:"bold"}}>Day</TableCell>
          <TableCell align='center' style={{fontSize:"15px",fontWeight:"bold"}}>Time</TableCell>
          <TableCell align='center' style={{fontSize:"15px",fontWeight:"bold"}}>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {userTimes.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage).map((time, index) => (
          <TableRow 
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align='center' component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell align='center' component="th" scope="row">
              {time.year}
            </TableCell>
            <TableCell align='center' component="th" scope="row">
              {time.day}
            </TableCell>
            <TableCell align='center' component="th" scope="row">
              {time.time}
            </TableCell>
            <TableCell align='center' component="th" scope="row">
              {time.month}
            </TableCell>
            <TableCell align='right'  className='px-4 py-5 mt-4'  component="th" scope="row">
            <div className='text-white h-8 flex justify-center items-center rounded-lg' style={{ backgroundColor:status === 'Attend' ? 'green' : 'red' }}>
            {status || 'absent'}
            </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
  </TableContainer>
    
   {/*  <ul className='flex flex-wrap justify-end px-2 gap-4 mt-4'>
    {userTimes.length > itemsPerPage &&
          Array.from({ length: Math.ceil(userTimes.length / itemsPerPage) }, (_, i) => (
            <li key={i} className={i + 1 === currentPage ? 'active' : ''}>
              <button className='bg-blue-400 py-2 text-white rounded-lg w-12' onClick={() => paginate(i+ 1)}>{i + 1}</button>
            </li>
          ))}
    </ul> */}
    <div className=' flex flex-wrap justify-end px-2 gap-4 mt-4'>
        {startPage !== 1 && (
          <button  className='bg-blue-400 py-1 text-white rounded-lg px-3' onClick={() => handlePageChange(1)}>Start</button>
        )}
        {startPage > 1 && (
          <button  className='bg-blue-400 py-1 text-white rounded-lg px-3' onClick={() => handlePageChange(startPage - 1)}>Previous</button>
        )}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => i + startPage).map(page => (
          <button className='bg-blue-400 py-1 text-white rounded-lg w-8' key={page} onClick={() => handlePageChange(page)}>{page}</button>
        ))}
        {endPage < totalPages && (
          <button  className='bg-blue-400 py-1 text-white rounded-lg px-3'  onClick={() => handlePageChange(endPage + 1)}>Next</button>
        )}
        {endPage !== totalPages && (
          <button  className='bg-blue-400 py-1 text-white rounded-lg px-3' onClick={() => handlePageChange(totalPages)}>Last</button>
        )}
      </div> 
    </div>
  )
} 

export default Attendance 
