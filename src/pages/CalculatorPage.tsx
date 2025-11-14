/**
 * Fitness Calculator Page for Trainify
 *
 * Comprehensive fitness calculators including:
 * - BMI Calculator
 * - BMR Calculator (Basal Metabolic Rate)
 * - TDEE Calculator (Total Daily Energy Expenditure)
 * - Macro Calculator (Protein, Carbs, Fats)
 * - Body Fat Percentage
 * - Ideal Weight Calculator
 * - Water Intake Calculator
 * - One Rep Max Calculator
 */

import React, { useState } from "react";
import {
  HiCalculator,
  HiScale,
  HiFire,
  HiTrendingUp,
  HiBeaker,
  HiHeart,
  HiLightningBolt,
  HiCube,
} from "react-icons/hi";

type CalculatorType =
  | "bmi"
  | "bmr"
  | "tdee"
  | "macros"
  | "bodyfat"
  | "idealweight"
  | "water"
  | "onerepmax";

interface Calculator {
  id: CalculatorType;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const CalculatorPage: React.FC = () => {
  const [activeCalculator, setActiveCalculator] =
    useState<CalculatorType>("bmi");

  // BMI State
  const [bmiWeight, setBmiWeight] = useState("");
  const [bmiHeight, setBmiHeight] = useState("");
  const [bmiResult, setBmiResult] = useState<number | null>(null);

  // BMR State
  const [bmrWeight, setBmrWeight] = useState("");
  const [bmrHeight, setBmrHeight] = useState("");
  const [bmrAge, setBmrAge] = useState("");
  const [bmrGender, setBmrGender] = useState("male");
  const [bmrResult, setBmrResult] = useState<number | null>(null);

  // TDEE State
  const [tdeeWeight, setTdeeWeight] = useState("");
  const [tdeeHeight, setTdeeHeight] = useState("");
  const [tdeeAge, setTdeeAge] = useState("");
  const [tdeeGender, setTdeeGender] = useState("male");
  const [tdeeActivity, setTdeeActivity] = useState("1.2");
  const [tdeeResult, setTdeeResult] = useState<number | null>(null);

  // Macros State
  const [macrosCalories, setMacrosCalories] = useState("");
  const [macrosGoal, setMacrosGoal] = useState("maintain");
  const [macrosResult, setMacrosResult] = useState<{
    protein: number;
    carbs: number;
    fats: number;
  } | null>(null);

  // Body Fat State
  const [bfWeight, setBfWeight] = useState("");
  const [bfHeight, setBfHeight] = useState("");
  const [bfAge, setBfAge] = useState("");
  const [bfGender, setBfGender] = useState("male");
  const [bfNeck, setBfNeck] = useState("");
  const [bfWaist, setBfWaist] = useState("");
  const [bfHip, setBfHip] = useState("");
  const [bfResult, setBfResult] = useState<number | null>(null);

  // Ideal Weight State
  const [iwHeight, setIwHeight] = useState("");
  const [iwGender, setIwGender] = useState("male");
  const [iwResult, setIwResult] = useState<{
    robinson: number;
    miller: number;
    devine: number;
    hamwi: number;
  } | null>(null);

  // Water Intake State
  const [waterWeight, setWaterWeight] = useState("");
  const [waterActivity, setWaterActivity] = useState("moderate");
  const [waterResult, setWaterResult] = useState<number | null>(null);

  // One Rep Max State
  const [ormWeight, setOrmWeight] = useState("");
  const [ormReps, setOrmReps] = useState("");
  const [ormResult, setOrmResult] = useState<number | null>(null);

  const calculators: Calculator[] = [
    {
      id: "bmi",
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index",
      icon: <HiScale className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "bmr",
      title: "BMR Calculator",
      description: "Basal Metabolic Rate",
      icon: <HiFire className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    },
    {
      id: "tdee",
      title: "TDEE Calculator",
      description: "Total Daily Energy Expenditure",
      icon: <HiTrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "macros",
      title: "Macro Calculator",
      description: "Calculate Protein, Carbs & Fats",
      icon: <HiBeaker className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "bodyfat",
      title: "Body Fat %",
      description: "Estimate body fat percentage",
      icon: <HiHeart className="w-6 h-6" />,
      color: "from-red-500 to-rose-500",
    },
    {
      id: "idealweight",
      title: "Ideal Weight",
      description: "Calculate your ideal weight",
      icon: <HiCalculator className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: "water",
      title: "Water Intake",
      description: "Daily water requirement",
      icon: <HiCube className="w-6 h-6" />,
      color: "from-cyan-500 to-teal-500",
    },
    {
      id: "onerepmax",
      title: "One Rep Max",
      description: "Calculate your 1RM",
      icon: <HiLightningBolt className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  // BMI Calculation
  const calculateBMI = () => {
    const weight = parseFloat(bmiWeight);
    const height = parseFloat(bmiHeight) / 100; // Convert cm to m
    if (weight > 0 && height > 0) {
      const bmi = weight / (height * height);
      setBmiResult(parseFloat(bmi.toFixed(1)));
    }
  };

  const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  const getBMICategoryColor = (bmi: number): string => {
    if (bmi < 18.5) return "text-blue-600";
    if (bmi < 25) return "text-green-600";
    if (bmi < 30) return "text-yellow-600";
    return "text-red-600";
  };

  // BMR Calculation
  const calculateBMR = () => {
    const weight = parseFloat(bmrWeight);
    const height = parseFloat(bmrHeight);
    const age = parseFloat(bmrAge);

    if (weight > 0 && height > 0 && age > 0) {
      let bmr: number;
      if (bmrGender === "male") {
        // Mifflin-St Jeor for men
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        // Mifflin-St Jeor for women
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
      setBmrResult(Math.round(bmr));
    }
  };

  // TDEE Calculation
  const calculateTDEE = () => {
    const weight = parseFloat(tdeeWeight);
    const height = parseFloat(tdeeHeight);
    const age = parseFloat(tdeeAge);
    const activity = parseFloat(tdeeActivity);

    if (weight > 0 && height > 0 && age > 0) {
      let bmr: number;
      if (tdeeGender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
      const tdee = bmr * activity;
      setTdeeResult(Math.round(tdee));
    }
  };

  // Macros Calculation
  const calculateMacros = () => {
    const calories = parseFloat(macrosCalories);

    if (calories > 0) {
      let proteinPercent: number, carbsPercent: number, fatsPercent: number;

      switch (macrosGoal) {
        case "cut":
          proteinPercent = 0.4;
          carbsPercent = 0.3;
          fatsPercent = 0.3;
          break;
        case "bulk":
          proteinPercent = 0.3;
          carbsPercent = 0.5;
          fatsPercent = 0.2;
          break;
        default: // maintain
          proteinPercent = 0.3;
          carbsPercent = 0.4;
          fatsPercent = 0.3;
      }

      setMacrosResult({
        protein: Math.round((calories * proteinPercent) / 4),
        carbs: Math.round((calories * carbsPercent) / 4),
        fats: Math.round((calories * fatsPercent) / 9),
      });
    }
  };

  // Body Fat Calculation (U.S. Navy Method)
  const calculateBodyFat = () => {
    const height = parseFloat(bfHeight);
    const neck = parseFloat(bfNeck);
    const waist = parseFloat(bfWaist);
    const hip = parseFloat(bfHip);

    if (bfGender === "male") {
      if (height > 0 && neck > 0 && waist > 0) {
        const bf =
          495 /
            (1.0324 -
              0.19077 * Math.log10(waist - neck) +
              0.15456 * Math.log10(height)) -
          450;
        setBfResult(parseFloat(bf.toFixed(1)));
      }
    } else {
      if (height > 0 && neck > 0 && waist > 0 && hip > 0) {
        const bf =
          495 /
            (1.29579 -
              0.35004 * Math.log10(waist + hip - neck) +
              0.221 * Math.log10(height)) -
          450;
        setBfResult(parseFloat(bf.toFixed(1)));
      }
    }
  };

  // Ideal Weight Calculation
  const calculateIdealWeight = () => {
    const height = parseFloat(iwHeight);

    if (height > 0) {
      const heightInches = height / 2.54; // Convert cm to inches
      const baseHeight = 60; // 5 feet

      if (iwGender === "male") {
        const robinson = 52 + 1.9 * (heightInches - baseHeight);
        const miller = 56.2 + 1.41 * (heightInches - baseHeight);
        const devine = 50 + 2.3 * (heightInches - baseHeight);
        const hamwi = 48 + 2.7 * (heightInches - baseHeight);

        setIwResult({
          robinson: Math.round(robinson * 10) / 10,
          miller: Math.round(miller * 10) / 10,
          devine: Math.round(devine * 10) / 10,
          hamwi: Math.round(hamwi * 10) / 10,
        });
      } else {
        const robinson = 49 + 1.7 * (heightInches - baseHeight);
        const miller = 53.1 + 1.36 * (heightInches - baseHeight);
        const devine = 45.5 + 2.3 * (heightInches - baseHeight);
        const hamwi = 45.5 + 2.2 * (heightInches - baseHeight);

        setIwResult({
          robinson: Math.round(robinson * 10) / 10,
          miller: Math.round(miller * 10) / 10,
          devine: Math.round(devine * 10) / 10,
          hamwi: Math.round(hamwi * 10) / 10,
        });
      }
    }
  };

  // Water Intake Calculation
  const calculateWater = () => {
    const weight = parseFloat(waterWeight);

    if (weight > 0) {
      let baseWater = weight * 0.033; // 33ml per kg

      // Adjust for activity level
      switch (waterActivity) {
        case "light":
          baseWater *= 1.1;
          break;
        case "moderate":
          baseWater *= 1.2;
          break;
        case "intense":
          baseWater *= 1.4;
          break;
      }

      setWaterResult(parseFloat(baseWater.toFixed(1)));
    }
  };

  // One Rep Max Calculation (Epley Formula)
  const calculateOneRepMax = () => {
    const weight = parseFloat(ormWeight);
    const reps = parseFloat(ormReps);

    if (weight > 0 && reps > 0) {
      const orm = weight * (1 + reps / 30);
      setOrmResult(Math.round(orm));
    }
  };

  const renderCalculator = () => {
    switch (activeCalculator) {
      case "bmi":
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={bmiWeight}
                  onChange={(e) => setBmiWeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="70"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={bmiHeight}
                  onChange={(e) => setBmiHeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="175"
                />
              </div>
            </div>

            <button
              onClick={calculateBMI}
              className="w-full bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Calculate BMI
            </button>

            {bmiResult !== null && (
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Your BMI</p>
                  <p className="text-5xl font-bold text-gray-900 mb-2">
                    {bmiResult}
                  </p>
                  <p
                    className={`text-xl font-semibold ${getBMICategoryColor(
                      bmiResult
                    )}`}
                  >
                    {getBMICategory(bmiResult)}
                  </p>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Underweight:</span> &lt;
                      18.5 | <span className="font-semibold">Normal:</span>{" "}
                      18.5-24.9 |{" "}
                      <span className="font-semibold">Overweight:</span> 25-29.9
                      | <span className="font-semibold">Obese:</span> ≥30
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case "bmr":
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={bmrWeight}
                  onChange={(e) => setBmrWeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="70"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={bmrHeight}
                  onChange={(e) => setBmrHeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="175"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age (years)
                </label>
                <input
                  type="number"
                  value={bmrAge}
                  onChange={(e) => setBmrAge(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="25"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  value={bmrGender}
                  onChange={(e) => setBmrGender(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculateBMR}
              className="w-full bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Calculate BMR
            </button>

            {bmrResult !== null && (
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Your Basal Metabolic Rate
                  </p>
                  <p className="text-5xl font-bold text-gray-900 mb-2">
                    {bmrResult}
                  </p>
                  <p className="text-xl font-semibold text-orange-600">
                    calories/day
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    This is the number of calories your body burns at rest
                  </p>
                </div>
              </div>
            )}
          </div>
        );

      case "tdee":
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={tdeeWeight}
                  onChange={(e) => setTdeeWeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="70"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={tdeeHeight}
                  onChange={(e) => setTdeeHeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="175"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age (years)
                </label>
                <input
                  type="number"
                  value={tdeeAge}
                  onChange={(e) => setTdeeAge(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="25"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  value={tdeeGender}
                  onChange={(e) => setTdeeGender(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Activity Level
              </label>
              <select
                value={tdeeActivity}
                onChange={(e) => setTdeeActivity(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
              >
                <option value="1.2">Sedentary (little or no exercise)</option>
                <option value="1.375">
                  Lightly active (exercise 1-3 days/week)
                </option>
                <option value="1.55">
                  Moderately active (exercise 3-5 days/week)
                </option>
                <option value="1.725">
                  Very active (exercise 6-7 days/week)
                </option>
                <option value="1.9">
                  Extra active (very hard exercise & physical job)
                </option>
              </select>
            </div>

            <button
              onClick={calculateTDEE}
              className="w-full bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Calculate TDEE
            </button>

            {tdeeResult !== null && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Your Total Daily Energy Expenditure
                  </p>
                  <p className="text-5xl font-bold text-gray-900 mb-2">
                    {tdeeResult}
                  </p>
                  <p className="text-xl font-semibold text-green-600">
                    calories/day
                  </p>
                  <div className="mt-4 pt-4 border-t border-green-200 grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Weight Loss</p>
                      <p className="font-bold text-red-600">
                        {tdeeResult - 500} cal
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Maintain</p>
                      <p className="font-bold text-green-600">
                        {tdeeResult} cal
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Weight Gain</p>
                      <p className="font-bold text-blue-600">
                        {tdeeResult + 500} cal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case "macros":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Daily Calories
              </label>
              <input
                type="number"
                value={macrosCalories}
                onChange={(e) => setMacrosCalories(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                placeholder="2000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Goal
              </label>
              <select
                value={macrosGoal}
                onChange={(e) => setMacrosGoal(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
              >
                <option value="cut">Cut (Weight Loss)</option>
                <option value="maintain">Maintain Weight</option>
                <option value="bulk">Bulk (Weight Gain)</option>
              </select>
            </div>

            <button
              onClick={calculateMacros}
              className="w-full bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Calculate Macros
            </button>

            {macrosResult !== null && (
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    Your Daily Macros
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Protein</p>
                    <p className="text-3xl font-bold text-purple-600">
                      {macrosResult.protein}g
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Carbs</p>
                    <p className="text-3xl font-bold text-blue-600">
                      {macrosResult.carbs}g
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Fats</p>
                    <p className="text-3xl font-bold text-yellow-600">
                      {macrosResult.fats}g
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case "bodyfat":
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={bfWeight}
                  onChange={(e) => setBfWeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="70"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={bfHeight}
                  onChange={(e) => setBfHeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="175"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age (years)
                </label>
                <input
                  type="number"
                  value={bfAge}
                  onChange={(e) => setBfAge(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="25"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  value={bfGender}
                  onChange={(e) => setBfGender(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Neck (cm)
                </label>
                <input
                  type="number"
                  value={bfNeck}
                  onChange={(e) => setBfNeck(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="37"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Waist (cm)
                </label>
                <input
                  type="number"
                  value={bfWaist}
                  onChange={(e) => setBfWaist(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="85"
                />
              </div>
              {bfGender === "female" && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hip (cm)
                  </label>
                  <input
                    type="number"
                    value={bfHip}
                    onChange={(e) => setBfHip(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                    placeholder="95"
                  />
                </div>
              )}
            </div>

            <button
              onClick={calculateBodyFat}
              className="w-full bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Calculate Body Fat %
            </button>

            {bfResult !== null && (
              <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-2xl border border-red-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Your Body Fat Percentage
                  </p>
                  <p className="text-5xl font-bold text-gray-900 mb-2">
                    {bfResult}%
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    U.S. Navy Method (Circumference-based)
                  </p>
                </div>
              </div>
            )}
          </div>
        );

      case "idealweight":
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={iwHeight}
                  onChange={(e) => setIwHeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="175"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  value={iwGender}
                  onChange={(e) => setIwGender(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculateIdealWeight}
              className="w-full bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Calculate Ideal Weight
            </button>

            {iwResult !== null && (
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl border border-indigo-200">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    Your Ideal Weight Range
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Robinson</p>
                    <p className="text-2xl font-bold text-indigo-600">
                      {iwResult.robinson} kg
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Miller</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {iwResult.miller} kg
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Devine</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {iwResult.devine} kg
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Hamwi</p>
                    <p className="text-2xl font-bold text-pink-600">
                      {iwResult.hamwi} kg
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-center mt-4">
                  Different formulas may give different results. Consult with a
                  healthcare professional.
                </p>
              </div>
            )}
          </div>
        );

      case "water":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                value={waterWeight}
                onChange={(e) => setWaterWeight(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                placeholder="70"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Activity Level
              </label>
              <select
                value={waterActivity}
                onChange={(e) => setWaterActivity(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
              >
                <option value="sedentary">Sedentary</option>
                <option value="light">Light Activity</option>
                <option value="moderate">Moderate Activity</option>
                <option value="intense">Intense Activity</option>
              </select>
            </div>

            <button
              onClick={calculateWater}
              className="w-full bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Calculate Water Intake
            </button>

            {waterResult !== null && (
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-2xl border border-cyan-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Daily Water Intake
                  </p>
                  <p className="text-5xl font-bold text-gray-900 mb-2">
                    {waterResult}
                  </p>
                  <p className="text-xl font-semibold text-cyan-600">liters</p>
                  <div className="mt-4 pt-4 border-t border-cyan-200">
                    <p className="text-2xl font-bold text-teal-600">
                      ≈ {Math.round(waterResult * 4)} glasses
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      (250ml per glass)
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case "onerepmax":
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight Lifted (kg)
                </label>
                <input
                  type="number"
                  value={ormWeight}
                  onChange={(e) => setOrmWeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Repetitions
                </label>
                <input
                  type="number"
                  value={ormReps}
                  onChange={(e) => setOrmReps(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="5"
                />
              </div>
            </div>

            <button
              onClick={calculateOneRepMax}
              className="w-full bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Calculate 1RM
            </button>

            {ormResult !== null && (
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Your One Rep Max</p>
                  <p className="text-5xl font-bold text-gray-900 mb-2">
                    {ormResult}
                  </p>
                  <p className="text-xl font-semibold text-yellow-600">kg</p>
                  <p className="text-sm text-gray-600 mt-4">
                    Calculated using Epley Formula
                  </p>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fitness <span className="gradient-text">Calculators</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional fitness calculators to track your health, nutrition,
            and performance goals
          </p>
        </div>

        {/* Calculator Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {calculators.map((calc) => (
            <button
              key={calc.id}
              onClick={() => setActiveCalculator(calc.id)}
              className={`
                p-4 rounded-2xl transition-all duration-300 text-left
                ${
                  activeCalculator === calc.id
                    ? `bg-gradient-to-r ${calc.color} text-white shadow-xl scale-105`
                    : "bg-white text-gray-600 hover:shadow-lg hover:scale-105"
                }
              `}
            >
              <div className="mb-2">{calc.icon}</div>
              <h3 className="font-bold text-sm mb-1">{calc.title}</h3>
              <p
                className={`text-xs ${
                  activeCalculator === calc.id
                    ? "text-white/80"
                    : "text-gray-500"
                }`}
              >
                {calc.description}
              </p>
            </button>
          ))}
        </div>

        {/* Active Calculator */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${
                  calculators.find((c) => c.id === activeCalculator)?.color
                } flex items-center justify-center`}
              >
                {calculators.find((c) => c.id === activeCalculator)?.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {calculators.find((c) => c.id === activeCalculator)?.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {
                    calculators.find((c) => c.id === activeCalculator)
                      ?.description
                  }
                </p>
              </div>
            </div>

            {renderCalculator()}
          </div>
        </div>

        {/* Info Section */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
            <p className="text-sm text-gray-700 text-center">
              <span className="font-semibold">Note:</span> These calculators
              provide estimates based on established formulas. For personalized
              advice, consult with healthcare or fitness professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
