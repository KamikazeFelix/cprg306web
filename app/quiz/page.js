"use client"
import Link from "next/link";
import QuizPage from "./QuizPage";
import Student from "../Student";

export default function Page(){
    return (
        <main>
            <h1 className="text-4xl font-bold m-4 text-center text-Black-500">
                Question
            </h1>

            <QuizPage />

            <Link href='../' className='flex flex-col items-center bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-300 transition duration-100'>&lt; Take Me Back!!!</Link>

            <Student />
        </main>
    )
}