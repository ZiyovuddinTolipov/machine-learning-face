const SignIn = () => {

    const style = {
        container: `w-full min-h-screen bg-[#E5E7eB] flex justify-center items-center`,
        form: `max-w-[400px] bg-[#D7D7D7] w-full p-3 flex flex-col items-center rounded-md min-h-[400px] justify-center`,
        headText:`text-center font-bold text-2xl mb-3`,
        input: `outline-none w-full my-2 p-2 rounded-md max-w-[300px]`,
        button: `outline-none bg-[#FBD144] w-full max-w-[300px] rounded-md py-2 text-md font-bold`,
    }
    return (
        <div className={style.container}>
            <form className={style.form}>
                <h1 className={style.headText}>SignIn</h1>
                <input type="text" className={style.input} />
                <input type="text" className={style.input} />
                <input type="text" className={style.input} />
                <button className={style.button}>Submit</button>
            </form>
        </div>
    )
}

export default SignIn