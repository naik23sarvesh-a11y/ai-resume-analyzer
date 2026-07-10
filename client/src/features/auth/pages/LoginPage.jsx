import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
    BrainCircuit,
    ShieldCheck,
    FileSearch,
    Sparkles,
    Eye,
    EyeOff,
} from "lucide-react";

import { loginUser } from "../services/authService";
import { useAuth } from "@/context/AuthContext";
import AuthInput from "../components/AuthInput";

export default function LoginPage() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

const [rememberMe, setRememberMe] = useState(false);

const emailRef = useRef(null);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    useEffect(() => {

    emailRef.current?.focus();

}, []);

    const emailValid =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

    function handleChange(e) {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            setLoading(true);

const response = await loginUser(form);

login(
    response.user,
    response.token
);

toast.success("Welcome Back");

navigate("/dashboard");

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Login Failed"
            );

        } finally {

            setLoading(false);

        }

    }

    return (

        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 grid lg:grid-cols-2">

            <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl"></div>

            {/* LEFT */}

            <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white p-20">

                <div className="flex items-center gap-3">

                    <BrainCircuit size={42} />

                    <h1 className="text-5xl font-black">

                        AI Resume Analyzer

                    </h1>

                </div>

                <p className="mt-8 text-xl leading-9 text-blue-100">

                    Login and continue improving your resume with AI.

                </p>

                <div className="space-y-8 mt-14">

                    <Feature
                        icon={<FileSearch />}
                        title="ATS Analysis"
                    />

                    <Feature
                        icon={<Sparkles />}
                        title="AI Suggestions"
                    />

                    <Feature
                        icon={<ShieldCheck />}
                        title="Secure Dashboard"
                    />

                </div>

            </div>

            {/* RIGHT */}

            <div className="flex items-center justify-center p-8">

                <div className="w-full max-w-md rounded-3xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl p-10">

                    <h2 className="text-4xl font-black">

                        Welcome Back

                    </h2>

                    <p className="text-gray-500 mt-2">

                        Login to continue.

                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5 mt-8"
                    >

                        <AuthInput
    inputRef={emailRef}
                            label="Email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@email.com"
                            error={
                                form.email && !emailValid
                                    ? "Invalid Email"
                                    : ""
                            }
                            success={emailValid}
                        />

                

<AuthInput
    label="Password"
    type={
        showPassword
            ? "text"
            : "password"
    }
    name="password"
    value={form.password}
    onChange={handleChange}
    placeholder="********"
/>


<div className="flex justify-between items-center">

<label className="flex items-center gap-2 text-sm">

<input
    type="checkbox"
    checked={rememberMe}
    onChange={() =>
        setRememberMe(!rememberMe)
    }
/>

Remember Me

</label>

<button
    type="button"
    className="text-blue-600 text-sm hover:underline"
>

Forgot Password?

</button>

</div>



                        <button
                            disabled={
                                loading ||
                                !emailValid
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

                            {
                                loading
                                    ? "Logging In..."
                                    : "Login"
                            }

                        </button>

                    </form>

                    <div className="mt-8 text-center">

                        Don't have an account?
                        

                        <Link
                            to="/register"
                            className="text-blue-600 font-semibold ml-2"
                        >

                            Register

                        </Link>

                    </div>

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