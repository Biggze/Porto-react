import React from 'react';
import { GitHub, Activity, Cpu } from 'react-feather';

const StatCard = ({ label, value, unit }) => (
    <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {value}
            {unit && <span className="text-base font-normal text-gray-500"> {unit}</span>}
        </p>
    </div>
);

const LanguageBar = ({ language, percentage, color }) => (
    <div>
        <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{language}</span>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className={`${color} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
        </div>
    </div>
);

const Dashboard = () => {
    return (
        <div className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-8 rounded-2xl shadow-sm">
            
            {/* Contributions Section */}
            <div className="pb-8">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                            <GitHub size={24} className="mr-3" />
                            Contributions
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">My contributions from last year on github.</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">@satriabahari</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <StatCard label="Total" value="593" />
                    <StatCard label="This week" value="6" />
                    <StatCard label="Best" value="33" />
                    <StatCard label="Average" value="2" unit="/ day" />
                </div>

                {/* Contribution Graph Placeholder */}
                <div className="w-full overflow-x-auto">
                    <img src="https://ghchart.rshah.org/22c55e/satriabahari" alt="[Grafik Kontribusi Github]" className="w-full h-auto" />
                </div>
                 <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
                    <span>Less</span>
                    <span>More</span>
                </div>
            </div>

            <hr className="my-6 border-dashed border-gray-200 dark:border-gray-700" />

            {/* Weekly Statistic Section */}
            <div className="py-8">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                            <Activity size={24} className="mr-3" />
                            Weekly Statistic
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">My WakaTime last 7 days stats.</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Last update: 9 days ago</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <StatCard label="Start Date" value="June 18, 2025" />
                    <StatCard label="End Date" value="June 24, 2025" />
                    <StatCard label="Daily Coding Average" value="15 mins" />
                    <StatCard label="This Week Coding Time" value="1 hr 34 mins" />
                    <StatCard label="Best Day Coding Time" value="June 22, 2025 (1 hr 9 mins)" />
                    <StatCard label="All Time Since Today" value="779 hrs 54 mins" />
                </div>
            </div>
            
            <hr className="my-6 border-dashed border-gray-200 dark:border-gray-700" />

            {/* Languages Section */}
            <div className="py-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Cpu size={24} className="mr-3" />
                    Languages
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <LanguageBar language="TypeScript" percentage={76} color="bg-blue-500" />
                    <LanguageBar language="JSON" percentage={18} color="bg-yellow-400" />
                    <LanguageBar language="JavaScript" percentage={3} color="bg-yellow-500" />
                    <LanguageBar language="Blade" percentage={1} color="bg-red-500" />
                    <LanguageBar language="Other" percentage={1} color="bg-gray-400" />
                    <LanguageBar language="Markdown" percentage={0} color="bg-gray-500" />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;