import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
    BrainCircuit,
    ShieldCheck,
    FileSearch,
    Sparkles,
} from "lucide-react";

import { registerUser } from "../services/authService";
import AuthInput from "../components/AuthInput";

export default function RegisterPage() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

        const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const strength = passwordStrength(form.password);

const emailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

const passwordMatch =
    form.password === form.confirmPassword;

const fullNameValid =
    form.fullName.length >= 3;


    <div className="bg-slate-50 rounded-xl p-4 text-sm">

    <p className="font-semibold mb-2">

        Password should contain

    </p>

    <ul className="space-y-2">

        <li className={form.password.length >= 8 ? "text-green-600" : "text-gray-500"}>

            ✓ Minimum 8 characters

        </li>

        <li className={/[A-Z]/.test(form.password) ? "text-green-600" : "text-gray-500"}>

            ✓ One uppercase letter

        </li>

        <li className={/[0-9]/.test(form.password) ? "text-green-600" : "text-gray-500"}>

            ✓ One number

        </li>

        <li className={/[^A-Za-z0-9]/.test(form.password) ? "text-green-600" : "text-gray-500"}>

            ✓ One special character

        </li>

    </ul>

</div>


function passwordStrength(password) {

    let score = 0;

    if (password.length >= 8) score += 25;

    if (/[A-Z]/.test(password)) score += 25;

    if (/[0-9]/.test(password)) score += 25;

    if (/[^A-Za-z0-9]/.test(password)) score += 25;

    return score;
}

function handleChange(e) {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
}

    async function handleSubmit(e) {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            return toast.error("Passwords do not match");
        }

        try {
            setLoading(true);

            await registerUser({
    fullName: form.fullName,
    email: form.email,
    password: form.password,
});

            toast.success("Account Created Successfully");

            navigate("/login");
        } catch (err) {
            toast.error(
                err.response?.data?.message ||
                    "Registration Failed"
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 grid lg:grid-cols-2">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl"></div>

<div className="absolute top-1/3 right-1/3 w-56 h-56 bg-cyan-300/20 rounded-full blur-3xl"></div>

            {/* LEFT */}

            <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white p-20">

                <div className="flex items-center gap-3">

                    <BrainCircuit size={42} />

                    <h1 className="text-5xl font-black">
                        AI Resume Analyzer
                    </h1>

                </div>

                <p className="mt-8 text-xl leading-9 text-blue-100">

                    Build resumes that pass ATS screening
                    and impress recruiters with AI-powered
                    analysis.
                    

                </p>
                <div className="mt-10 flex gap-4">

<div className="bg-white/20 rounded-2xl px-5 py-3">

<h3 className="text-3xl font-bold">

95%

</h3>

<p>

ATS Accuracy

</p>

</div>

<div className="bg-white/20 rounded-2xl px-5 py-3">

<h3 className="text-3xl font-bold">

AI

</h3>

<p>

Powered Analysis

</p>

</div>

</div>

                <div className="space-y-8 mt-14">

                    <Feature
                        icon={<FileSearch />}
                        title="ATS Resume Analysis"
                    />

                    <Feature
                        icon={<Sparkles />}
                        title="AI Recommendations"
                    />

                    <Feature
                        icon={<ShieldCheck />}
                        title="Secure Cloud Storage"
                    />

                </div>

            </div>

            {/* RIGHT */}

            <div className="flex items-center justify-center bg-slate-100 p-8">

                <div className="w-full max-w-md rounded-3xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl p-10 transition-all duration-500 hover:shadow-blue-300/40">

                    <h2 className="text-4xl font-black">

                        Create Account

                    </h2>

                    <p className="text-gray-500 mt-2">

                        Join AI Resume Analyzer today.

                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5 mt-8"
                    >

                        <AuthInput
    label="Full Name"
    name="fullName"
    value={form.fullName}
    onChange={handleChange}
    placeholder="John Doe"
    error={
        form.fullName &&
        !fullNameValid
            ? "Minimum 3 characters"
            : ""
    }
    success={fullNameValid}
/>

                        <AuthInput
    label="Email"
    type="email"
    name="email"
    value={form.email}
    onChange={handleChange}
    placeholder="john@email.com"
    error={
        form.email &&
        !emailValid
            ? "Invalid Email"
            : ""
    }
    success={emailValid}
/>

                        <AuthInput
    label="Password"
    type="password"
    name="password"
    value={form.password}
    onChange={handleChange}
    placeholder="********"
/>
<div className="space-y-2">

    <div className="flex justify-between">

        <span>Password Strength</span>

        <span>

            {strength}%

        </span>

    </div>

    <div className="w-full h-2 rounded-full bg-gray-200">

        <div
            style={{
                width: `${strength}%`,
            }}
           className={`
w-full
rounded-xl
py-3
font-bold
text-white
transition-all
duration-300

${
loading
? "bg-gray-400 cursor-not-allowed"
: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] hover:shadow-xl"
}
`}
        />

    </div>

</div>
                        <AuthInput
    label="Confirm Password"
    type="password"
    name="confirmPassword"
    value={form.confirmPassword}
    onChange={handleChange}
    placeholder="********"
    error={
        form.confirmPassword &&
        !passwordMatch
            ? "Passwords don't match"
            : ""
    }
    success={
        passwordMatch &&
        form.confirmPassword
    }
/>

                        <button
    disabled={
        loading ||
        !emailValid ||
        !passwordMatch ||
        !fullNameValid
    }
    className={`
        w-full
        rounded-xl
        py-3
        font-bold
        text-white
        transition-all
        duration-300

        ${
            loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] hover:shadow-xl"
        }
    `}
>
    {loading
        ? "Creating Account..."
        : "Create Account"}
</button>

                    </form>

                    <div className="mt-8 text-center">

                        Already have an account?

                        <Link
                            to="/login"
                            className="text-blue-600 font-semibold ml-2"
                        >
                            Login
                        </Link>

                    </div>
                    <p className="text-xs text-gray-400 mt-8 text-center">

By creating an account you agree to our
Terms of Service and Privacy Policy.

</p>

                </div>

            </div>

        </div>
    );
}

function Feature({ icon, title }) {
    return (
        <div className="flex items-center gap-4">

            <div className="bg-white/20 p-3 rounded-xl">
                {icon}
            </div>

            <h3 className="text-xl font-semibold">
                {title}
            </h3>

        </div>
    );
}