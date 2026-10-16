import EmployeeSkills from "./EmployeeSkills";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import Badge from '@mui/material/Badge';
import Rating from '@mui/material/Rating';
function EmployeeCard({ employee }) {
  return (
    <div style={{textAlign:"center"}}>
        
   
      <Badge
        badgeContent={4}
        color="secondary">
          <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    
        
   
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <p>Salary: ₹{employee.salary}</p>

      <EmployeeSkills skills={employee.skills} />
     </Stack> 
      </Badge>
 
         
    </div>
  );
}

export default EmployeeCard;