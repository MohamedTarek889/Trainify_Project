/**
 * User Dashboard Page for Trainify
 *
 * Main dashboard for regular users showing:
 * - Personal trainee information
 * - Assigned workouts
 * - Meal plans
 * - Subscription details
 */

import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import UserInfoTab from "../components/user/UserInfoTab";
import WorkoutGrid from "../components/user/WorkoutGrid";
import MealGrid from "../components/user/MealGrid";
import PlanDetails from "../components/user/PlanDetails";
import { currentUser, userWorkouts, userMeals, userPlan } from "../data/sample";
import { HiHand } from "react-icons/hi";

const UserDashboard: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<
    "info" | "workouts" | "meals" | "plan"
  >("info");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["info", "workouts", "meals", "plan"].includes(tab)) {
      setActiveTab(tab as "info" | "workouts" | "meals" | "plan");
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            Welcome Back! <HiHand className="w-8 h-8 text-yellow-500" />
          </h1>
          <p className="text-gray-600 mt-2">
            Track your fitness journey and stay on top of your goals.
          </p>
        </div>

        {/* Tab Content */}
        <div className="animate-in fade-in-50 duration-500">
          {activeTab === "info" && <UserInfoTab traineeInfo={currentUser} />}
          {activeTab === "workouts" && <WorkoutGrid workouts={userWorkouts} />}
          {activeTab === "meals" && <MealGrid meals={userMeals} />}
          {activeTab === "plan" && <PlanDetails plan={userPlan} />}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
