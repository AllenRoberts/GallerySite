import { FaTwitterSquare } from "react-icons/fa"

export default function Footer() {
  return (
    <>
      <center>
        <div className="footer">
          <div className="subfooter">
            <h5>Email</h5>
            <a href="mailto:email@email.com">Email@email.com</a>
            </div>
            <div className="subfooter">
            <a href="mailto:email@email.com" className="icon"><FaTwitterSquare/></a>
            </div> 
            <div className="subfooter">
            <h5>Phone</h5>
            <a>111-111-1111</a>
            </div>
        </div>
      </center>
    </>
  );
}
