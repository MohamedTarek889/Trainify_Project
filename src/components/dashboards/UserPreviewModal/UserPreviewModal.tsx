import React from "react";
import {
  HiX,
  HiMail,
  HiUser,
  HiShieldCheck,
  HiClock,
  HiCalendar,
} from "react-icons/hi";
import type { User } from "../../../data/sample";

interface UserPreviewModalProps {
  open: boolean;
  onClose: () => void;
  user: User | null;
}

const UserPreviewModal: React.FC<UserPreviewModalProps> = ({
  open,
  onClose,
  user,
}) => {
  // Handle Escape key to close modal
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose]);

  if (!open || !user) return null;

  // Helper function to get role colors
  const getRoleColors = (role: string) => {
    const colors = {
      admin: "from-red-500 to-red-600",
      trainer: "from-blue-500 to-blue-600",
      member: "from-green-500 to-green-600",
    };
    return colors[role as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  // Helper function to get status colors
  const getStatusColors = (status: string) => {
    const colors = {
      active: "from-green-400 to-green-600",
      inactive: "from-gray-400 to-gray-600",
    };
    return colors[status as keyof typeof colors] || "from-gray-400 to-gray-600";
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Enhanced Backdrop */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-lg"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="flex min-h-full items-center justify-center p-4">
          <div
            className="
          bg-white w-full max-w-3xl rounded-3xl shadow-2xl
          transform transition-all duration-500 scale-100 opacity-100
          border border-gray-100 overflow-hidden max-h-[90vh] overflow-y-auto
        "
            style={{
              animation: "modalSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className={`relative bg-gradient-to-r ${getRoleColors(
                user.role
              )} p-6 text-white`}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-3 rounded-xl hover:bg-white/20 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close modal"
                tabIndex={0}
              >
                <HiX className="w-6 h-6 text-white" />
              </button>

              <div className="pr-16 flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-2xl">
                  <HiUser className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{user.name}</h3>
                  <p className="text-white/90 text-lg">{user.email}</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg pointer-events-none"></div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="space-y-6">
                {/* Quick Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Role Card */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                    <HiShieldCheck className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <p className="text-sm text-blue-700 mb-1">Role</p>
                    <p className="text-xl font-bold text-blue-900 capitalize">
                      {user.role}
                    </p>
                  </div>

                  {/* Status Card */}
                  <div
                    className={`bg-gradient-to-br ${
                      user.status === "active"
                        ? "from-green-50 to-green-100"
                        : "from-gray-50 to-gray-100"
                    } p-6 rounded-xl text-center`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full mx-auto mb-3 ${
                        user.status === "active"
                          ? "bg-green-500"
                          : "bg-gray-500"
                      } animate-pulse`}
                    />
                    <p
                      className={`text-sm ${
                        user.status === "active"
                          ? "text-green-700"
                          : "text-gray-700"
                      } mb-1`}
                    >
                      Status
                    </p>
                    <p
                      className={`text-xl font-bold ${
                        user.status === "active"
                          ? "text-green-900"
                          : "text-gray-900"
                      } capitalize`}
                    >
                      {user.status}
                    </p>
                  </div>

                  {/* Email Card */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
                    <HiMail className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <p className="text-sm text-purple-700 mb-1">Contact</p>
                    <p className="text-sm font-bold text-purple-900 truncate">
                      Email
                    </p>
                  </div>
                </div>

                {/* Detailed Information */}
                <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Account Details
                  </h4>

                  {/* User ID */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600 flex items-center gap-2">
                      <HiUser className="w-5 h-5" />
                      User ID
                    </span>
                    <span className="font-semibold text-gray-900">
                      {user.id}
                    </span>
                  </div>

                  {/* Full Name */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600 flex items-center gap-2">
                      <HiUser className="w-5 h-5" />
                      Full Name
                    </span>
                    <span className="font-semibold text-gray-900">
                      {user.name}
                    </span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600 flex items-center gap-2">
                      <HiMail className="w-5 h-5" />
                      Email Address
                    </span>
                    <span className="font-semibold text-gray-900">
                      {user.email}
                    </span>
                  </div>

                  {/* Role */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600 flex items-center gap-2">
                      <HiShieldCheck className="w-5 h-5" />
                      Account Role
                    </span>
                    <span
                      className={`inline-block bg-gradient-to-r ${getRoleColors(
                        user.role
                      )} text-white px-4 py-1 rounded-full text-sm font-bold capitalize`}
                    >
                      {user.role}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600 flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          user.status === "active"
                            ? "bg-green-500"
                            : "bg-gray-500"
                        } animate-pulse`}
                      />
                      Account Status
                    </span>
                    <span
                      className={`inline-block bg-gradient-to-r ${getStatusColors(
                        user.status
                      )} text-white px-4 py-1 rounded-full text-sm font-bold capitalize`}
                    >
                      {user.status}
                    </span>
                  </div>

                  {/* Joined Date */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600 flex items-center gap-2">
                      <HiCalendar className="w-5 h-5" />
                      Joined Date
                    </span>
                    <span className="font-semibold text-gray-900">
                      {new Date(user.joinedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Last Active */}
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-600 flex items-center gap-2">
                      <HiClock className="w-5 h-5" />
                      Last Active
                    </span>
                    <span className="font-semibold text-gray-900">
                      {new Date(user.lastActive).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                {/* Additional Info Section */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-[#FF6B35]">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Account Summary
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    This user account was created on{" "}
                    {new Date(user.joinedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    and has {user.role} privileges. The account is currently{" "}
                    <span className="font-bold capitalize">{user.status}</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Member since {new Date(user.joinedAt).toLocaleDateString()}
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPreviewModal;
