import Test from "../componets/Test";


export default function HomeScreen2(){


    // get slection from device dropdown 
    const device_router = 'Routers'
    const device_modem = 'Modems'
    const device_laptop = 'Laptops'
    const device_webcam = 'Webcams'


        if(device_router ==='Routers'){

            return (

                <Test></Test>
                
            )
        }

        if(device_modem ==='Modems'){

            return (

            
                <div>
                    modems
                </div>
            )
        }

        if(device_laptop ==='Laptops'){

            return (

            
                <div>
                    laptops
                </div>
            )
        }

        if(device_webcam ==='Webcams'){

            return (

            
                <div>
                    laptops
                </div>
            )
        }
        else {

            return (
            
            <div></div>

            )
        }
}

