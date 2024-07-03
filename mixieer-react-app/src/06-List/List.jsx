import ProtoTypes from 'prop-types'
function List(prop) {

    const itemList = prop.items;
    const category = prop.category
    // fruits.sort((a,b)=> b.name.localeCompare(a.name)) //REVERSE 
    // fruits.sort((a,b) => a.calories-b.calories )
    // const lowCalFruit = fruits.filter(fruit => fruit.calories<80)

    const listItems = itemList.map(fruit => <li key={fruit.id}>{fruit.name}: <b>{fruit.calories}</b> </li>);

    return(<>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>)

}
List.protoTypes= {
    category: ProtoTypes.string,
    items: ProtoTypes.arrayOf(ProtoTypes.shape({
        id:ProtoTypes.number,
        name:ProtoTypes.string,
        calories:ProtoTypes.number}))
}
List.defaultProps= {
    category : "Category"  ,
    items:[]
}

export default List 