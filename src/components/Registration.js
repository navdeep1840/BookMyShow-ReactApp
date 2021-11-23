import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import axios from "axios";
// import Swal from "sweetalert2";

function Registration() {
  const [username, setUsername] = useState("");
  const [emailaddress, setEmailAddress] = useState("");
  const [passwordd, setPasswordd] = useState("");

  function clearInput() {
    setUsername("");
    setEmailAddress("");
    setPasswordd("");
  }

  async function UserPost() {
    // console.log(username, emailaddress, passwordd);
    const userDetails = {
      username: username,
      email: emailaddress,
      password: passwordd,
    };
   
    // userDetails.username = 'nik';
    // console.log(userDetails);
    // await axios.post("https://book-my-show-backend-1.herokuapp.com/user-register", userDetails)
    //   .then((data) => {
    //     Swal.fire({
    //       title: `<strong>${data.data.message}</strong>`,
    //       icon: "success",
    //       showCloseButton: true,
    //     });
    //     clearInput();
    //   })
    //   .catch((err) =>
    //     Swal.fire({
    //       title: `<strong>${err.message}</strong>`,
    //       icon: "error",
    //       showCloseButton: true,
    //     })
    //   );
    const response = await axios.post('http://localhost:3001/user-register', userDetails);
    console.log(response);
    clearInput();
  }

  return (
    <div>
      <Container style={{ padding: "7%" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={emailaddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={passwordd}
              onChange={(e) => setPasswordd(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" onClick={UserPost}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Registration;





























// import { Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useState } from "react";
// import axios  from "axios";

// function Registration() {
//   const [ emailAddress, setEmailAddress] = useState("");
//   const [ passwordd, setPassword] = useState("");
//   const [ userName, setUserName] = useState("");

//       async function UserPost(){
//         console.log(emailAddress,passwordd,userName);
//         const userDetails ={
          
//           username : userName,
//           email: emailAddress,
//           password: passwordd
//         }
//         console.log(userDetails);
//         const response = await axios.post('http://localhost:3001/user-register' , userDetails)
//                 console.log(response);


//   }
   
//   return (
//     <div style={ {padding:"15%" , background:"pink"}}>
//       <Container>
//             <Form>
//         <Form.Group className="mb-3" >
//           <Form.Label>User Name</Form.Label>
//           <Form.Control value={userName} onchange={(e)=> setUserName(e.target.value)} type="text" placeholder="Enter username" />
          
//         </Form.Group> 
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control value={emailAddress} onchange={(e)=> setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control  value={passwordd} onchange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
//         </Form.Group>
        
//         <Button variant="primary"  onClick={UserPost} >
//           Submit
//         </Button>
//       </Form>
//       </Container>
//     </div>
//   );
// }

// export default Registration;
