import React from "react";
import {
  HiX,
  HiClock,
  HiCalendar,
  HiTrendingUp,
  HiCurrencyDollar,
  HiFire,
  HiStar,
} from "react-icons/hi";
import type { TrainingProgram } from "../../../data/sample";

interface TrainingPreviewModalProps {
  open: boolean;
  onClose: () => void;
  program: TrainingProgram | null;
}

const TrainingPreviewModal: React.FC<TrainingPreviewModalProps> = ({
  open,
  onClose,
  program,
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

  if (!open || !program) return null;

  // Helper function to get level colors
  const getLevelColors = (level: string) => {
    const colors = {
      beginner: "from-green-400 to-green-600",
      intermediate: "from-yellow-400 to-yellow-600",
      advanced: "from-red-400 to-red-600",
    };
    return colors[level as keyof typeof colors] || "from-gray-400 to-gray-600";
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
          bg-white w-full max-w-4xl rounded-3xl shadow-2xl
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
              className={`relative bg-gradient-to-r ${getLevelColors(
                program.level
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

              <div className="pr-16">
                <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                <p className="text-white/90 text-lg mb-4">
                  A {program.level} level training program designed to help you
                  achieve your fitness goals.
                </p>

                {/* Level Badge */}
                <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-bold capitalize">
                  {program.level} LEVEL
                </span>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg pointer-events-none"></div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Quick Stats */}
                <div className="lg:col-span-1">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                      <HiCalendar className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <p className="text-2xl font-bold text-blue-900">
                        {program.duration}
                      </p>
                      <p className="text-sm text-blue-700">Weeks</p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center">
                      <HiFire className="w-6 h-6 mx-auto mb-2 text-green-600" />
                      <p className="text-2xl font-bold text-green-900">
                        {program.workoutsPerWeek}
                      </p>
                      <p className="text-sm text-green-700">Workouts/Week</p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
                      <HiCurrencyDollar className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                      <p className="text-2xl font-bold text-purple-900">
                        ${program.price}
                      </p>
                      <p className="text-sm text-purple-700">Price</p>
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className="text-center mb-6">
                    <span
                      className={`inline-block bg-gradient-to-r ${getLevelColors(
                        program.level
                      )} text-white px-4 py-2 rounded-full font-bold capitalize`}
                    >
                      <HiStar className="w-4 h-4 inline mr-2" />
                      {program.level} Level
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="text-center">
                    <span
                      className={`inline-block bg-gradient-to-r ${getStatusColors(
                        program.status
                      )} text-white px-4 py-2 rounded-full font-bold capitalize`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full inline-block mr-2 ${
                          program.status === "active"
                            ? "bg-white"
                            : "bg-gray-300"
                        } animate-pulse`}
                      />
                      {program.status}
                    </span>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="lg:col-span-2">
                  {/* Program Overview */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">
                      Program Overview
                    </h4>
                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <span className="text-gray-600 flex items-center gap-2">
                            <HiTrendingUp className="w-5 h-5" />
                            Program ID
                          </span>
                          <span className="font-semibold text-gray-900">
                            {program.id}
                          </span>
                        </div>

                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <span className="text-gray-600 flex items-center gap-2">
                            <HiStar className="w-5 h-5" />
                            Program Name
                          </span>
                          <span className="font-semibold text-gray-900">
                            {program.name}
                          </span>
                        </div>

                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <span className="text-gray-600 flex items-center gap-2">
                            <HiTrendingUp className="w-5 h-5" />
                            Difficulty Level
                          </span>
                          <span
                            className={`inline-block bg-gradient-to-r ${getLevelColors(
                              program.level
                            )} text-white px-3 py-1 rounded-full text-sm font-bold capitalize`}
                          >
                            {program.level}
                          </span>
                        </div>

                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <span className="text-gray-600 flex items-center gap-2">
                            <HiCalendar className="w-5 h-5" />
                            Program Duration
                          </span>
                          <span className="font-semibold text-gray-900">
                            {program.duration} weeks
                          </span>
                        </div>

                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <span className="text-gray-600 flex items-center gap-2">
                            <HiFire className="w-5 h-5" />
                            Workouts Per Week
                          </span>
                          <span className="font-semibold text-gray-900">
                            {program.workoutsPerWeek} sessions
                          </span>
                        </div>

                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <span className="text-gray-600 flex items-center gap-2">
                            <HiCurrencyDollar className="w-5 h-5" />
                            Program Price
                          </span>
                          <span className="font-semibold text-gray-900">
                            ${program.price}
                          </span>
                        </div>

                        <div className="flex items-center justify-between py-3">
                          <span className="text-gray-600 flex items-center gap-2">
                            <HiClock className="w-5 h-5" />
                            Status
                          </span>
                          <span
                            className={`inline-block bg-gradient-to-r ${getStatusColors(
                              program.status
                            )} text-white px-3 py-1 rounded-full text-sm font-bold capitalize`}
                          >
                            {program.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Program Description */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">
                      Program Description
                    </h4>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-[#FF6B35]">
                      <p className="text-gray-700 leading-relaxed">
                        This {program.level} level program runs for{" "}
                        {program.duration} weeks with {program.workoutsPerWeek}{" "}
                        workouts per week. Perfect for those looking to
                        transform their fitness and achieve their goals through
                        structured training.
                      </p>
                    </div>
                  </div>

                  {/* Program Benefits */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">
                      Program Highlights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                        <h5 className="font-bold text-green-900 mb-2">
                          Duration
                        </h5>
                        <p className="text-green-700">
                          Complete program in {program.duration} weeks with
                          structured progression
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                        <h5 className="font-bold text-blue-900 mb-2">
                          Frequency
                        </h5>
                        <p className="text-blue-700">
                          Train {program.workoutsPerWeek} times per week for
                          optimal results
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                        <h5 className="font-bold text-purple-900 mb-2">
                          Level
                        </h5>
                        <p className="text-purple-700 capitalize">
                          Designed for {program.level} fitness enthusiasts
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl">
                        <h5 className="font-bold text-yellow-900 mb-2">
                          Investment
                        </h5>
                        <p className="text-yellow-700">
                          One-time payment of ${program.price} for full program
                          access
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  {program.duration} weeks • {program.workoutsPerWeek} workouts
                  per week • {program.level} level
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

export default TrainingPreviewModal;
