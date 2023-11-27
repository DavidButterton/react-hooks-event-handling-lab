// Code Keypad Component Here

function Keypad (){
    function handleChange(event) {
        console.log('Entering password...')
    }
    return (
        <div>
            <form>
                <input type='password' onChange={handleChange} autoComplete=" new password" />
            </form>
        </div>
    )
}

export default Keypad;