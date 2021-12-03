
import React, {useEffect, useState} from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function FeaturesDropdown() {


    const [newData, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`/api/featuresFilter`);
          const newData = await response.json();
          setData(newData);
        };
        fetchData();
      }, []);

      console.log(newData);


    return (

        <div className="row top">

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Please select feature options
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>
                    
                    {
                        newData.map((item)=>{

                            return(
                                
                                <Dropdown.Item eventKey = {item._id}>{item.features}</Dropdown.Item>
                            );
                        })
                    }
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}