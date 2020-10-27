import React ,{useEffect} from 'react';
import Search from "../search";
import ListGuides from "../ListGuides";


const Guieds = (props) => {
    useEffect(() => {
        console.log("a" ,props.location.state) 
        console.log("b" ,props.history.location.state) 
    }, [])
    
    return (
        <>
            <Search list={props.location.state}/>
            <ListGuides/>
        </>
    )
}

export default Guieds;