import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Forms = () => {
  return (
    <div>
      <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{fontWeight:"600", fontSize:"20px",}}
        >
          TESTIMONY FORM
        </AccordionSummary>
        <AccordionDetails style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <iframe 
        title="Google Form"
        src="https://bit.ly/gcccibadanquestions" 
        width="640" 
        height="800" 
    
      >
        Loading…
      </iframe>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{fontWeight:"600", fontSize:"20px"}}
        >
          PRAYER FORM
        </AccordionSummary>
        <AccordionDetails style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <iframe 
        title="Google Form"
        src="https://bit.ly/gcccibadanquestions" 
        width="640" 
        height="800" 
    
      >
        Loading…
      </iframe>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          style={{fontWeight:"600", fontSize:"20px"}}
        >
          QUESTION FORM
        </AccordionSummary>
        <AccordionDetails style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <iframe 
        title="Google Form"
        src="https://bit.ly/gcccibadanquestions" 
        width="640" 
        height="800" 
    
      >
        Loading…
      </iframe>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  )
}

export default Forms
