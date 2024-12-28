// Bài tập 4: Giao Tiếp Giữa Các Component
// Tạo một component cha ParentComponent.
// Trong ParentComponent, chứa một component con ChildComponent.
// Component con nhận một hàm từ component cha thông qua props và gọi hàm đó khi nhấn nút.
function ChildComponent(props){
    return (
        <div>
            <button onClick = {props.onClick}>Click me!</button>
        </div>
    )
}
function ParentComponent(){
    const handleChildClick = () => {
        alert("Button on Child Component has been clicked!");
    }
    return (
        <div>
            <ChildComponent onClick = {handleChildClick} />
        </div>
    )
}

export default ParentComponent;