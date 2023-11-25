import { useLocation } from 'react-router-dom';

export default function Job_details() {
  const location = useLocation();
  const jobData = location.state?.jobData;
  console.log("misbah")
  console.log(jobData)
  return <div class="container">

  </div>;
}
