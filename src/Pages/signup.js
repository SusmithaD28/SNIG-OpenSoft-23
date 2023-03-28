import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function signup() {
  return (
    
    <>
        <div className="card mx-auto w-50" style={{marginTop: 3 + 'em'}}>
            <h2 className="card-header text-center">
                Register
            </h2>
            <div className="card-body">
                <Form>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter Email Id"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Country"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter City"/>
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control" placeholder="Enter Mobile No."/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Username"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Re-enter Password"/>
                </div>
                <Button type="button" className="btn btn-primary" style={{width:"100%"}}>Submit</Button>
                <p></p>
                <p className="text-center">Have an account? <a href ="#">Log in</a> </p>
                <p className="text-center"><a href="#">Forgot Password</a></p>
                </Form>
            </div>
    </div>
   </>
  );
}

export default signup;
