import React, { useState } from 'react';

const AddNew = () => {
    const [showPass, setShowPass] = useState(false);
    return (
        <div className="row p-3">
            <div className="col-7 me-3 p-3 bg-content">
                <h2>Form</h2>
                <form>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Username</span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Password</span>
                        <input type={showPass ? "text" : "password"} className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                        <span onClick={() => setShowPass(showPass ? false : true)} className="input-group-text" id="basic-addon1">
                            {showPass ?
                                <i className="bi bi-eye-slash-fill"></i>
                                :
                                <i className="bi bi-eye-fill"></i>
                            }
                        </span>
                    </div>
                    <button className='btn btn-primary'>Create User</button>
                </form>
            </div>
            <div className="col-4 p-3 bg-content">
                <h2>Image</h2>
                <form>
                    <div className="input-group my-3">
                        <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                    </div>
                    <button className='btn btn-primary' >Upload</button>
                </form>
            </div>
        </div>
    );
};

export default AddNew;