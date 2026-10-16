import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function StudentCard({ student}) {
  return (
    <div>
      {
        student.map((i)=>{
            return(
                <center>
            <Paper elevation={5} style={{margin:'5%'}}>
                <div style={{backgroundColor:"orange"}}>
               
               <h5>Name: {i.name}</h5>
                <h5>UserName: {i.username}</h5>
                <h5>Email: {i.email}</h5>
                </div>
                </Paper>
                </center>
            )
        })
      }
      <div style={{background:"red"}}>
        <Paper elevation={5} style={{width:"50%", color:"red",margin:'5%',marginLeft:'15%'}}>
        <form style={{backgroundColor:'lightblue'}}>
            <center>
            <h3>Student Form</h3>
            <input type='text' placeholder="Enter Your Name"/><br/>
            <input type='age' placeholder="Enter Your Age"/><br/>
            <Button variant="contained">Submit</Button>
            </center>
        </form>
        </Paper>
      </div>
    </div>
  );
}

export default StudentCard;