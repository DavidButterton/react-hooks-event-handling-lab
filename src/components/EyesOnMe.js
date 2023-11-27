// Code EyesOnMe Component Here
function EyesOnMe() {
    const handleFocus = () => (
        console.log('Good!')
    )

    const handleBlur = () => (
        console.log('Hey, Eyes on me!')
    )

    return (
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on Me</button>
    )

}

export default EyesOnMe