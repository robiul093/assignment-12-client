import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageUsers = () => {

    // const [allUsers, setAllUsers] = useState();

    // useEffect(() =>{
    //     fetch('https://assignment-12-server-lemon-delta.vercel.app/allUsers')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setAllUsers(data);
    //     })
    // },[])


    const [displayUser, setDesplayUser] = useState();
    const [Users, setUsers] = useState();

    const { isPending, refetch, data: allUsers } = useQuery({
        queryKey: ['survey'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-lemon-delta.vercel.app/allUsers');
            return res.json();
        }
    })

    useEffect(() =>{
        setDesplayUser(allUsers)
    },[allUsers])

    if (isPending) {
        return <div className="h-full flex justify-center items-center">
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    const handelUserRole = (userRole, id) => {
        const updateData = {
            role: userRole
        }
        console.log(userRole, id, updateData);
        fetch(`https://assignment-12-server-lemon-delta.vercel.app/userRole/${id}`, {
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
                refetch();
            })
    }


    const handelAll = () => {
        // const us = allUsers?.filter(item => item.role === 'admin')
        setDesplayUser(allUsers);
        console.log(displayUser);
    }

    const handelAdmin = () => {
        const us = allUsers?.filter(item => item.role === 'admin')
        setDesplayUser(us)
        console.log(displayUser);
    }

    const handelSurveyor = () => {
        const us = allUsers?.filter(item => item.role === 'surveyor')
        setDesplayUser(us)
        console.log(displayUser);
    }

    const handelUser = () => {
        const us = allUsers?.filter(item => item.role === 'user')
        setDesplayUser(us)
        console.log(displayUser);
    }



    return (
        <div className="my-10 md:px-6">
            <h2 className="text-3xl font-semibold my-8">All Users : {allUsers?.length} </h2>

            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1 mb-5">Filter By Role</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[4] w-52 p-2 shadow text-lg space-y-2 text-center cursor-pointer">
                    <li onClick={() => handelAll()}
                        className="hover:bg-slate-400">All</li>

                    <li onClick={() => handelAdmin()} className="hover:bg-slate-400">Admin</li>

                    <li onClick={() => handelSurveyor()}
                        className="hover:bg-slate-400">Surveyor</li>

                    <li onClick={() => handelUser()}
                        className="hover:bg-slate-400">User</li>
                    {/* <li>Pro user</li> */}
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

                                                <li onClick={() => handelUserRole('surveyor', user._id)}><a>{user.role !== 'surveyor' && 'Surveyor'}</a></li>

                                                <li onClick={() => handelUserRole('admin', user._id)}><a>{user.role !== 'admin' && 'Admin'}</a></li>

                                                <li onClick={() => handelUserRole('user', user._id)}><a>{user.role !== 'user' && 'User'}</a></li>
                                            </ul>
                                        </div> </td>
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