import React from "react";
import { useState } from "react";



export default function Form(){

    
    const [location, setlocation] = useState("");
    const [maxumimCookie, setmaxumimCookie] = useState("");
    const [minumimCookie, setminumimCookie] = useState("");
    const [avgCookie, setavgCookie] = useState("");
    const [result, setresult] = useState([])
     

    const onSubmitHandler = (e) => {
        e.preventDefault()

        let Result = {
            location: location ,
            maxumimCookie: maxumimCookie ,
            minumimCookie: minumimCookie ,
            avgCookie: avgCookie 
        }

        setresult([...result, Result])


    }
    

    

    


    return(
        <>
            <section className="flex flex-col justify-center min-h-screen py-6 bg-fixed bg-gray-100 bg-center bg-cover bg-form-pattern bg- sm:py-12" >
                <section className="relative py-3 sm:max-w-xl sm:mx-auto ">
                    <section
                        className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-green-600 to-green-600 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </section>
                    <section className="relative px-4 py-10 bg-white shadow-inner shadow-green-600 sm:rounded-3xl sm:p-20 ">
                        <section className="max-w-md mx-auto">
                            <section>
                                <h1 className="text-3xl font-bold">Create Cookie Stand</h1>
                            </section>
                            <section className="sectionide-y sectionide-gray-200">
                                <form onSubmit={onSubmitHandler} className="py-8 space-y-4 text-base leading-6 text-green-600 sm:text-lg sm:leading-7">
                                    <section className="relative">
                                        <input 
                                        onChange={(e) => setlocation(e.target.value)}
                                        
                                        autoComplete="off" 
                                        id="Location" 
                                        name="location" 
                                        type="text" 
                                        className="w-full h-10 text-green-600 placeholder-transparent border-b-2 border-green-600 peer focus:outline-none focus:borer-rose-600" placeholder="enter location" />
                                        <label htmlFor="Location" className="absolute left-0 -top-3.5 text-green-600 text-sm 
                                        peer-placeholder-shown:text-base peer-placeholder-shown:text-green-600 peer-placeholder-shown:top-0 transition-all peer-focus:-top-5.5 peer-focus:text-green-600 peer-focus:text-sm">Location:</label>
                                    </section>
                                    <section className="relative">
                                        
                                        <input
                                            onChange={(e) => setminumimCookie(e.target.value)} 
                                    
                                            autoComplete="off" 
                                            id="min" 
                                            name="min" 
                                            type="int" 
                                            className="w-full h-10 text-green-600 placeholder-transparent border-b-2 border-green-600 peer focus:outline-none focus:borer-rose-600" placeholder="min" />

                                            <label htmlFor="min" className="absolute left-0 -top-3.5 text-green-600 text-sm 
                                                    peer-placeholder-shown:text-base peer-placeholder-shown:text-green-600 peer-placeholder-shown:top-0 transition-all peer-focus:-top-5.5 peer-focus:text-green-600 peer-focus:text-sm">Minimum Customer per Hour:</label>
                                                
                                    </section>
                                    <section className="relative">
                                        <input 
                                            onChange={(e) => setmaxumimCookie(e.target.value)}
                                            autoComplete="off" 
                                            id="max" 
                                            name="max" 
                                            type="int" 
                                            className="w-full h-10 text-green-600 placeholder-transparent border-b-2 border-green-600 peer focus:outline-none focus:borer-rose-600" placeholder="min" />

                                            <label htmlFor="min" className="absolute left-0 -top-3.5 text-green-600 text-sm 
                                                    peer-placeholder-shown:text-base peer-placeholder-shown:text-green-600 peer-placeholder-shown:top-0 transition-all peer-focus:-top-5.5 peer-focus:text-green-600 peer-focus:text-sm">Maximum Customer per Hour:</label>
                                                
                                        
                                    </section>
                                    <section className="relative">    
                                        <input 
                                            onChange={(e) => setavgCookie(e.target.value)}
                                            autoComplete="off" 
                                            id="avg" 
                                            name="avg" 
                                            type="int" 
                                            className="w-full h-10 text-green-600 placeholder-transparent border-b-2 border-green-600 peer focus:outline-none focus:borer-rose-600" placeholder="min" />

                                            <label htmlFor="min" className="absolute left-0 -top-3.5 text-green-600 text-sm 
                                                    peer-placeholder-shown:text-base peer-placeholder-shown:text-green-600 peer-placeholder-shown:top-0 transition-all peer-focus:-top-5.5 peer-focus:text-green-600 peer-focus:text-sm">Averge Cookies per Sale:</label>
                                                
                                        
                                    </section>
                                    

                                    <section className="relative">
                                        <button className="px-2 py-1 text-white rounded-md bg-green-600 hover:bg-green-600"> create </button>
                                    </section>
                                </form>
                            </section>
                        </section>
                    </section>
                </section>
            </section>

            {/* result section */}
            <section className="w-full pt-10 text-center shadow-lg shadow-black-50">
                
                <div className="m-5 grid grid-cols-3 grid-flow-row gap-4"  >
                    { result.map(item=>{
                    return( 
                    <div class="max-w-sm rounded overflow-hidden shadow-lg border-[#270D0B] border-2 ">
                        

                    <div class="px-6 py-4">
                        
                            <p class="text-gray-700 text-base">
                                            <p>Location: {item.location}</p>
                                            <p> Minumim Customer per Hour: {item.minumimCookie}</p> 
                            
                                            <p>Maxumim Customer per Hour: {item.maxumimCookie}</p> 
                                            <p>Average Cookies per Sale:{item.avgCookie}</p>

                            </p>
                        </div>
                    
                    </div>) 

                    })}
                    
                </div> 
                <h3>Report Table Coming Soon ....</h3>
            </section>
        </>
    )
}