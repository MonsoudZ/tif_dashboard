import React from "react";
import { Link } from "react-router-dom";

export default function PostButtons() {
    return (
        <div>


            <Link to='/blog'>
                <div className="flex justify-center">
                    <button className="btn btn-outline text-gray-700 text-center mt-4 font-bold">
                        Get Started</button>
                </div>
            </Link>

        </div>
    )
}
