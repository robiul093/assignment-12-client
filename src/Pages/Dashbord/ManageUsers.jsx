import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useUser from "../../hooks/useUser";

const ManageUsers = () => {

    // const [allUsers, setAllUsers] = useState();

    // useEffect(() =>{
    //     fetch('http://localhost:5000/allUsers')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setAllUsers(data);
    //     })
    // },[])


    const [displayUser, setDesplayUser] = useState();
    const [role, setRole] = useState();

    const {isPending, refetch, data: allUsers} = useUser();
    
    
    // const { isPending, refetch, data: allUsers } = useQuery({
    //     queryKey: ['survey'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/allUsers');
    //         return res.json();
    //     }
    // })

    useEffect(() =>{
        setDesplayUser(allUsers)
        setRole('All User')
    },[allUsers])


    if (isPending) {
        return <div className="h-full flex justify-center items-center">
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    

    const handelUserRole = (userRole, email) => {
        const updateData = {
            role: userRole
        }
        console.log(userRole, email, updateData);
        fetch(`http://localhost:5000/userRole/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Update User Role Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

                refetch()
                
            })
    }



    const handelDeleteUser = (id) =>{
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/deletUser/${id}`, {
                    method: 'DELETE',
                    header: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Delete User Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        refetch();
                    }
                    
                })
                
            }
          });
        
        // fetch(`http://localhost:5000/deletUser/${id}`, {
        //     method: 'DELETE',
        //     header: {
        //         'Content-Type': 'application/json',
        //     },
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     if (data.deletedCount) {
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: "Update User Role Successfully",
        //             showConfirmButton: false,
        //             timer: 1500
        //         });
        //     }
            
        // })
        
    }


    const handelAll = () => {
        // const us = allUsers?.filter(item => item.role === 'admin')
        setDesplayUser(allUsers);
        setRole('All User')
        console.log(displayUser);
    }

    const handelAdmin = () => {
        const us = allUsers?.filter(item => item.role === 'admin')
        setDesplayUser(us)
        setRole('Admin')
        console.log(displayUser);
    }

    const handelSurveyor = () => {
        const us = allUsers?.filter(item => item.role === 'surveyor')
        setDesplayUser(us)
        setRole('Surveyor')
        console.log(displayUser);
    }

    const handelUser = () => {
        const us = allUsers?.filter(item => item.role === 'user')
        setDesplayUser(us)
        setRole('User')
        console.log(displayUser);
    }
    const handelProUser = () => {
        const us = allUsers?.filter(item => item.role === 'proUser')
        setDesplayUser(us)
        setRole('proUser')
        console.log(displayUser);
    }


    

    // console.log();

    // useEffect(() =>{
    //     const role = displayUser?.map(user => user.role )
    //     console.log(role);
    // },[displayUser])


    return (
        <div className="my-10 md:px-6">
            <h2 className="text-3xl font-semibold my-8">All Users : {allUsers?.length} </h2>

            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1 mb-5">Filter By Role : {role && role} ({displayUser?.length}) </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[4] w-52 p-2 shadow text-lg space-y-2 text-center cursor-pointer">
                    <li onClick={() => handelAll()}
                        className="hover:bg-slate-400">All</li>

                    <li onClick={() => handelAdmin()} className="hover:bg-slate-400">Admin</li>

                    <li onClick={() => handelSurveyor()}
                        className="hover:bg-slate-400">Surveyor</li>

                    <li onClick={() => handelUser()}
                        className="hover:bg-slate-400">User</li>
                    
                    <li onClick={() => handelProUser()}
                        className="hover:bg-slate-400">Pro User</li>
                    
                </ul>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-xl bg-slate-400">
                                <th>NO</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Delete User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                displayUser?.map((user, index) => <tr
                                    key={user._id}
                                    className="hover text-lg"
                                >
                                    <th>{index + 1}</th>
                                    <td> {user.name} </td>
                                    <td> {user.email} </td>
                                    <td className="font-semibold">
                                        <div className="dropdown dropdown-hover">
                                            <div tabIndex={0} role="button" className="btn m-1">{user.role}</div>
                                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[4] w-52 p-2 shadow">

                                                <li onClick={() => handelUserRole('surveyor', user.email)}><a>{user.role !== 'surveyor' && 'Surveyor'}</a></li>

                                                <li onClick={() => handelUserRole('admin', user.email)}><a>{user.role !== 'admin' && 'Admin'}</a></li>

                                                <li onClick={() => handelUserRole('user', user.email)}><a>{user.role !== 'user' && 'User'}</a></li>

                                                <li onClick={() => handelUserRole('proUser', user.email)}><a>{user.role !== 'proUser' && 'proUser'}</a></li>
                                            </ul>
                                        </div> </td>

                                        <td>
                                            <button onClick={() =>handelDeleteUser(user._id)} className="btn">
                                                Delete
                                            </button>
                                        </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default ManageUsers;