
function UserInfo(props) {
    return (
        <div>
            <h1>Tên: {props.name}</h1>
            <p>Tuổi: {props.age}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}
export default UserInfo