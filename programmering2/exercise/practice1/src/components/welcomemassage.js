export default function WelcomeMassage(props) {
    return (
        <>
            <h1>välkommen Samantha</h1>
            <h2>'{props.name}'kommer som props</h2>
            <h3>{hello (name,'lars')}</h3>
        </>
    )
}
function hello(name){
    return 'Hello ${name}'
}
