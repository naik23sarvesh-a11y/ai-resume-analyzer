import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import DashboardLayout from "@/components/layout/DashboardLayout";

import {
    Camera,
    Pencil,
    LogOut,
    Lock,
} from "lucide-react";

export default function ProfilePage() {

    const { user, logout } = useAuth();

    const [editing, setEditing] = useState(false);

    const [profile, setProfile] = useState({
        name: user?.name || "",
        email: user?.email || "",
    });

    return (


        <DashboardLayout>

            <h1 className="text-4xl font-black mb-8">

                My Profile

            </h1>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Left */}

                <div className="bg-white rounded-3xl shadow-sm p-8 text-center">

                   
<div className="relative inline-block">

<img
    src={`https://ui-avatars.com/api/?name=${
        profile.name
    }&background=2563eb&color=fff&size=256`}
    alt=""
    className="w-36 h-36 rounded-full"
/>

<button
    className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700"
>

    <Camera size={18}/>

</button>

</div>

<h2 className="text-2xl font-bold mt-6">

    {profile.name}

</h2>

                    <p className="text-gray-500">

                        {user?.email}

                    </p>

                </div>

                {/* Right */}

                <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-8">

                    <div className="space-y-6">

                       <div className="space-y-6">

<div>

<label className="font-semibold">

Full Name

</label>

<input
    disabled={!editing}
    value={profile.name}
    onChange={(e)=>
        setProfile({
            ...profile,
            name:e.target.value,
        })
    }
    className="mt-2 w-full border rounded-xl p-3"
/>

</div>

<div>

<label className="font-semibold">

Email

</label>

<input
    disabled
    value={profile.email}
    className="mt-2 w-full border rounded-xl p-3 bg-gray-100"
/>

</div>

<div className="grid grid-cols-2 gap-4">

<button
    onClick={() =>
        setEditing(!editing)
    }
    className="rounded-xl bg-blue-600 text-white py-3 flex justify-center gap-2 items-center"
>

<Pencil size={18}/>

{editing ? "Save" : "Edit Profile"}

</button>

<button
    className="rounded-xl border py-3 flex justify-center gap-2 items-center"
>

<Lock size={18}/>

Change Password

</button>

</div>

<button
    onClick={()=>{
        logout();
        window.location.href="/login";
    }}
    className="w-full rounded-xl bg-red-500 text-white py-3 flex justify-center gap-2 items-center"
>

<LogOut size={18}/>

Logout

</button>

</div>
                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}

function InfoRow({ icon, label, value }) {

    return (

        <div className="flex items-center justify-between border-b pb-4">

            <div className="flex items-center gap-3">

                <div className="text-blue-600">

                    {icon}

                </div>

                <span className="font-semibold">

                    {label}

                </span>

            </div>

            <span className="text-gray-600">

                {value || "-"}

            </span>

        </div>

    );

}