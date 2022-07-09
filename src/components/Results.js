import {Link} from 'react-router-dom'


function Results(props) {
const showData = props.results.map((item, idx) =>{
    return(
        <>
        <p>{item.Title}</p>
        </>
    )
})
  return (
    <div>
        {showData}
    </div>
  )
}

export default Results