import React from 'react';

const User = () => {
    return (
        <div className='p-3 bg-content'>
            <div className="my-3">
                <table class="table table-hover table-striped">
                    <thead className='table-dark '>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>John Doe</td>
                            <td>example@gmail.com</td>
                            <td>

                                <button className='btn btn-outline-success'>
                                    <i className="bi bi-person-lines-fill"></i>
                                </button>
                                <span className='mx-2'></span>
                                <button className='btn btn-outline-primary'>
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                                <span className='mx-2'></span>
                                <button className='btn btn-outline-danger'>
                                    <i className="bi bi-trash2"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>John Doe</td>
                            <td>example@gmail.com</td>
                            <td>

                                <button className='btn btn-outline-success'>
                                    <i className="bi bi-person-lines-fill"></i>
                                </button>
                                <span className='mx-2'></span>
                                <button className='btn btn-outline-primary'>
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                                <span className='mx-2'></span>
                                <button className='btn btn-outline-danger'>
                                    <i className="bi bi-trash2"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>John Doe</td>
                            <td>example@gmail.com</td>
                            <td>

                                <button className='btn btn-outline-success'>
                                    <i className="bi bi-person-lines-fill"></i>
                                </button>
                                <span className='mx-2'></span>
                                <button className='btn btn-outline-primary'>
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                                <span className='mx-2'></span>
                                <button className='btn btn-outline-danger'>
                                    <i className="bi bi-trash2"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;