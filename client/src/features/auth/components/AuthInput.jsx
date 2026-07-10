import {
    Eye,
    EyeOff,
    CheckCircle2,
    XCircle,
} from "lucide-react";
import { useState } from "react";

export default function AuthInput({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    error,
    success,
    inputRef,
}) {

    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (

        <div className="space-y-2">

            <label className="font-semibold">

                {label}

            </label>

            <div className="relative">

                <input
                    ref={inputRef}
                    name={name}
                    type={
                        isPassword
                            ? showPassword
                                ? "text"
                                : "password"
                            : type
                    }
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`w-full rounded-xl border px-4 py-3 pr-12 outline-none transition

                    ${
                        error
                            ? "border-red-500 focus:ring-red-500"
                            : success
                            ? "border-green-500 focus:ring-green-500"
                            : "border-gray-300 focus:ring-blue-500"
                    }

                    focus:ring-2`}
                />

                {isPassword && (

                    <button
                        type="button"
                        onClick={() =>
                            setShowPassword(!showPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                    >

                        {showPassword
                            ? <EyeOff size={18} />
                            : <Eye size={18} />}

                    </button>

                )}

                {!isPassword && success && (

                    <CheckCircle2
                        size={18}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
                    />

                )}

                {!isPassword && error && (

                    <XCircle
                        size={18}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500"
                    />

                )}

            </div>

            {error && (

                <p className="text-sm text-red-500">

                    {error}

                </p>

            )}

        </div>

    );

}