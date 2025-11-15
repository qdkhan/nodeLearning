export const runtime = () => {
    const x = 10
    return (
        <>
            if(x === 10) {
                console.log(`value is ${x}`)
            } else {
                console.log(`value is not 10`)
            }
        </>
    )
}