const SignIn = () => {

    const style = {
        
    }
    return (
        <div className="w-full min-h-screen bg-[#E5E7eB] flex justify-center items-center">
             <form className="max-w-[500px] bg-[D7D7D7] w-full p-3 flex flex-col items-center">
                <input type="text"  className="outline-none w-full my-3 p-2 rounded-md max-w-[300px]"/>
                <input type="text"  className="outline-none w-full my-3"/>
                <input type="text"  className="outline-none w-full my-3"/>
             </form>
        </div>
    )
}

export default SignIn