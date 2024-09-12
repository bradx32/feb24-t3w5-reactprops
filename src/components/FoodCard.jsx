
export default function FoodCard(props){
    const {foodName} = props
    return(
        <div>
            <h3>{foodName}</h3>
            <p>description of the food</p>
        </div>
    )
}