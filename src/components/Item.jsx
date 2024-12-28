function ItemList(props){
    return (
        <div>
            <h1>Danh mục sản phẩm</h1>
            <ul>
                {props.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default ItemList;