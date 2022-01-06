import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const URL = 'http://localhost:3671/hookups';




export default function BlogList() {

    const [hookups, setPost] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(URL);
            setPost(res.data);
            setLoading(false);
        };
        fetchPost();
    }, []);

    if (loading) {
        return (
            <button className="container btn btn-lg btn-ghost loading mx-auto flex flex-row justify-center"></button>
        )
    }

    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Tiffany</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Articles from Around the Web
                    </p>
                </div>
                <div className="h-screen w-full overflow-auto">
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {hookups.map((article, index) => {
                            return (
                                <div className="flex flex-col place-items-center text-center" key={index}>
                                    <Link to={`/hookups/${article.id}`}>
                                        <div className="flex-shrink-0">
                                            <img className="h-48 w-full object-cover" src={article.img_url} alt="" />
                                        </div>
                                    </Link>
                                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-indigo-600">
                                                <a  className="hover:underline">
                                                    {article.category}  {article.score}
                                                </a>
                                            </p>
                                            <Link to={`/hookups/${article.id}`}>
                                                <p className="text-xl font-semibold text-gray-900">{article.title}</p>
                                                <p className="mt-3 text-base text-gray-500">{article.description}</p>
                                            </Link>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">
                                                <a  className="hover:underline">
                                                    {article.author}
                                                </a>
                                            </p>
                                            <div className="flex space-x-1 text-sm text-gray-500">
                                                <time dateTime={article.datetime}>{article.published_date}</time>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            );
                        })}
                    </div>
                </div>
            </div>
        </div>

    );
}
