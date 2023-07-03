import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className=" w-full flex flex-col justify-center items-center h-[100vh] space-y-4">
            <h1 className="font-bold text-2xl">
                페이지를 찾을 수 없을까요? 있을까요?
            </h1>
            <Link to="/">
                <button className=" hover:text-white hover:bg-red-400 hover:font-bold hover:border-2 border border-neutral-800 px-4 py-2 rounded-lg text-neutral-700">
                    홈으로 가세용
                </button>
            </Link>
        </div>
    );
}

export default NotFound;
