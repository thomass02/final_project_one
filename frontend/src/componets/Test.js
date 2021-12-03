
import React from "react";

export default function Test(){
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [value, setValue] = React.useState("Device Selection");



    React.useEffect(() => {
        let unmounted = false;

        async function fetchData() {
          const response = await fetch("/api/deviceType");
          
          const data = await response.json();
          if(!unmounted){


            setData(

                data.map(({ name }) => ({label:name, value: name}))
            );

            setLoading(false);

          }
        };
        fetchData();
        return () => {

            unmounted = true;
        };
      }, []);


    return(
    <div className="row top">
        <select
            disabled={loading}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
        >

            {data.map(({ label, value }) => (
                <option key={value} value={value}>
                {label}
                </option>
            ))}
        </select>
    </div>
    );
}