import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  HiMail,
  HiLockClosed,
  HiEye,
  HiEyeOff,
  HiExclamationCircle,
  HiCheckCircle,
} from "react-icons/hi";
import { useAuth } from "../context/useAuth";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Determine role based on email
      const role = formData.email.includes("admin") ? "admin" : "user";

      // Login user
      login(formData.email, formData.password, role);

      // Navigate based on role
      if (role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/user-dashboard");
      }

      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      {/* Login Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 md:p-12 border border-gray-100">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] rounded-2xl mb-4 shadow-lg">
            <span className="text-3xl font-bold text-white">T</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Welcome Back!
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Sign in to continue your fitness journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiMail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`
                  block w-full pl-12 pr-4 py-3 border rounded-xl text-sm md:text-base
                  focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent
                  transition-all duration-200
                  ${
                    errors.email
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }
                `}
                placeholder="you@example.com"
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <HiExclamationCircle className="w-4 h-4" /> {errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiLockClosed className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className={`
                  block w-full pl-12 pr-12 py-3 border rounded-xl text-sm md:text-base
                  focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent
                  transition-all duration-200
                  ${
                    errors.password
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }
                `}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
              >
                {showPassword ? (
                  <HiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <HiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <HiExclamationCircle className="w-4 h-4" /> {errors.password}
              </p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-[#FF6B35] hover:text-[#e55a2b]"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full px-6 py-4 bg-gradient-to-r from-[#FF6B35] to-[#2BC48A]
              text-white font-bold rounded-xl text-sm md:text-base
              hover:from-[#e55a2b] hover:to-[#26ad7a]
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B35]
              disabled:opacity-50 disabled:cursor-not-allowed
              transform transition-all duration-200
              hover:scale-105 active:scale-95
              shadow-lg hover:shadow-xl
            "
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></span>
                Signing in...
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
          <p className="text-sm text-orange-900 font-semibold mb-2 flex items-center gap-2">
            <HiCheckCircle className="w-5 h-5" /> Demo Accounts:
          </p>
          <div className="space-y-1 text-xs text-orange-700">
            <p>
              <strong>Admin:</strong> admin@trainify.com
            </p>
            <p>
              <strong>User:</strong> user@trainify.com
            </p>
            <p>
              <strong>Password:</strong> any 6+ characters
            </p>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-[#FF6B35] hover:text-[#e55a2b]"
            >
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
