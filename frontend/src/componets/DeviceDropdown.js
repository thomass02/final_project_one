import React, {useEffect, useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function DeviceDropdown() {


    const [newData, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/deviceType`);
            const newData = await response.json();
            setData(newData);
        };
        fetchData();
        }, []);

        console.log(newData);


    return (

        <div className="row top">
                        {/* <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css"></link> */}

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Please select feature options
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>
                    
                    {
                        newData.map((item)=>{

                            return(
                                
                                <Dropdown.Item eventKey = {item._id}>{item.name}</Dropdown.Item>
                            );
                        })
                    }
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}