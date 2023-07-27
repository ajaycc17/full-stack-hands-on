import Link from "next/link";
import {
    BsCalendarDate,
    BsSortDownAlt,
    BsFileBinary,
    BsFillCheckCircleFill,
    BsArrowRight,
} from "react-icons/bs";

export default function Home() {
    return (
        <div className="bg-gradient-to-b from-transparent to-white min-h-[calc(100vh-116px)]">
            <div className="max-w-6xl px-2 md:px-4 mx-auto py-24 flex flex-col gap-16 items-center">
                <div>
                    <h1 className="font-head text-5xl font-semibold text-center">
                        Track Your Expenses Smartly
                    </h1>
                    <h2 className="max-w-4xl text-xl mt-8 font-medium text-gray-800 text-center">
                        With best-in-class reports generation, and built-in
                        leaderboard, Expense Tracker is the native expense
                        tracker for day-to-day tasks and budget-management. Join
                        millions of smart people who choose to track on Expense
                        Tracker.
                    </h2>
                    <div className="flex justify-center gap-2 mt-6">
                        <Link
                            href="/dashboard"
                            className="bg-black rounded-xl px-4 py-2 text-white"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="/product.png" alt="Product" />
                    <p className="text-sm font-medium text-gray-600 px-4 text-center">
                        Image Credit:{" "}
                        <Link
                            href="https://bitbucket.org/product/"
                            target="_blank"
                            className="border-b border-gray-400"
                        >
                            BitBucket
                        </Link>
                        . This image is used just for illustration, Expense
                        Tracker is a different product.
                    </p>
                </div>
            </div>
            <div className="bg-[#091e42] py-20">
                <div className="max-w-6xl mx-auto px-2 md:px-4 pb-16 flex flex-col items-center gap-6">
                    <BsFillCheckCircleFill className="text-4xl text-white" />
                    <h2 className="text-center text-white text-3xl font-semibold">
                        Why choose Expense Tracker?
                    </h2>
                </div>
                <div className="max-w-6xl px-2 md:px-4 mx-auto grid grid-cols-3 gap-4">
                    <div className="bg-[#4d5c65] rounded-2xl p-8">
                        <BsCalendarDate className="text-4xl text-sky-200" />
                        <h2 className="text-lg mt-6 text-white">
                            Get daily, monthly and yearly insights
                        </h2>
                    </div>
                    <div className="bg-[#4d5c65] rounded-2xl p-8">
                        <BsSortDownAlt className="text-4xl text-green-200" />
                        <h2 className="text-lg mt-6 text-white">
                            Access Leaderboard of users and compare
                        </h2>
                    </div>
                    <div className="bg-[#4d5c65] rounded-2xl p-8">
                        <BsFileBinary className="text-4xl text-indigo-200" />
                        <h2 className="text-lg mt-6 text-white">
                            Get Reports in genereted in PDF files
                        </h2>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl px-2 md:px-4 mx-auto py-20 flex flex-col items-center">
                <h2 className="text-xl font-medium text-center">
                    With best-in-class reports generation, and built-in
                    leaderboard, Expense Tracker is the native expense tracker
                    for day-to-day tasks and budget-management. Join millions of
                    smart people who choose to track on Expense Tracker.
                </h2>
                <Link
                    href="/dashboard"
                    className="flex items-center text-blue-800 font-medium text-lg mt-6"
                >
                    Try Tracking
                    <BsArrowRight className="ml-2" />
                </Link>
            </div>
        </div>
    );
}
