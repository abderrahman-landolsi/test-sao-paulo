import React from 'react';
import iphone from './../../assets/iphone.png';
import Rating from '@material-ui/lab/Rating';
import ads from './../../assets/ads.jpg';
import facebook from './../../assets/facebook.png';
import instagram from './../../assets/instagram.png';
import './style.css';
import Switch from "@material-ui/core/Switch";
import FormControlLabel from '@material-ui/core/FormControlLabel';


const Body = () => {
    const [value, setValue] = React.useState(2);
    const [estimation, setEstimation] = React.useState(true);
    const [shippingInfos, setShippingInfos] = React.useState(true);
    const [orderList, setOrderList] = React.useState(true);
    const [advertising, setAdvertising] = React.useState(true); 
    return (
    <>
        <div className='Container'>
        
            {estimation?
            <div className='Div'>
                <div className='HeaderOfDiv'>
                    Estimated Delivery
                </div>
                <div className="BodyOfDiv">
                    <p className="DayStyle">Monday</p>
                    <p className="MonthStyle">October</p>
                    <p className="DayNumericStyle">18</p>
                    <p className="OutForDeliveryStyle">Out for delivery</p>
                    <hr />
                    <p className="ShippingStatusStyle">Oct 17   Arrival Scan</p>
                    <p className="ShippingStatusStyle">Oct 17   San Francisco, CA</p>
                    <hr />
                    <p className="ShippingStatusStyle">Oct 16   Departure Scan</p>
                    <p className="ShippingStatusStyle">Oct 16   Sacramento, CA</p>
                    <hr />
                    <p className="ShippingStatusStyle">Oct 15   Arrival Scan</p>
                    <p className="ShippingStatusStyle">Oct 15   Sacramento, CA</p>
                </div>
            </div>
            :
            <></>
            }

            {shippingInfos?
            <div className='Div'>
                <div className="HeaderOfDiv">
                    Shipping Information
                </div>
                <div className="BodyOfDiv">
                    <p className="ShippedWithStyle">
                        Shipped with UPS,Del ....... via UP Post Office.
                    </p>
                    <p className="TrackingNumberStyle">lsslkjfmls34lFDé3DS324234dfsmssm12fkd</p>
                    <input className="MobileNumber"></input>
                    <button className="TextMeButton">Text Me</button>
                    <div className='HeaderOfDiv'>
                        <p className="StyleHeaderOfDiv">Estimated Delivery</p>
                    </div>
                <div className="BodyOfDiv">
                    <p className="ShippedWithStyle">Rate Your Delivery Experience</p>
                    
                        <div style={{textAlign:'center', zIndex: '20'}}>
                            <Rating
                                style={{textAlign:'center', zIndex: '20'}}
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                    console.log(newValue);
                                }}
                            />
                        </div>
                   
                </div>
                </div>
            </div>
            :
            <></>
            }
            {orderList?
            <div className="DivOfOrders">
                <div className='HeaderOfDiv'>
                    Order
                </div>
                <div>
                    <table >
                        
                        <tr>
                            <th>Product</th>
                            <th>Label</th>
                            <th>Quantity</th>
                            
                            </tr>
                            <tr>
                                <td><img src={iphone} width="40" height="40"/></td>
                                <td className="ItemOfOrders">Iphone 11 Pro Max 512 Go, Black </td>
                                <td >2</td>
                            </tr>
                            <tr>
                                <td><img src={iphone} width="40" height="40"/></td>
                                <td className="ItemOfOrders">Iphone 11 Pro Max 512 Go, Black</td>
                                <td >2</td>
                            </tr>
                            <tr>
                                <td><img src={iphone} width="40" height="40"/></td>
                                <td className="ItemOfOrders">Iphone 11 Pro Max 512 Go, Black</td>
                                <td >2</td>
                            </tr>
                        
                    </table>
                </div>
            </div>
            :<></>    
            }   
        </div >
        
        
        {advertising?
            <img src={ads} style={{width:'70%', marginLeft: 'auto', marginRight: 'auto', display: 'block'}}/>
            :
            <></>
        }

        <div className="containerFooter">
            <div className="footer">
                <div className="footerParts">
                    <ul>
                        <li>Store nearby</li>
                        <li>Newsletter</li>
                        <li>Become a member</li>
                        <li>Gift cards</li>
                    </ul>
                </div>
                <div className="footerParts">
                    <ul>
                        <p>Help !</p>
                        <li>Expedition and delivery</li>
                        <li>Payment methods</li>
                        <li>Paybacks</li>
                        <li>recycling information</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="footerParts">
                    <ul>
                        <p>About Us</p>
                        <li>Who we are</li>
                        <li>Career</li>
                        <li>Invertors</li>
                    </ul>
                </div>
                <div className="footerParts">
                    <ul>
                        <p>Social Media</p>
                        <li>
                            <img src={facebook} height="30" style ={{backgroundColor:'white', borderRadius:'20px', marginRight:'5px'}}/>
                            <img src={instagram} height="30" style ={{backgroundColor:'white', borderRadius:'10px', marginRight:'5px'}}/>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <hr style={{borderTop:'1px solid #e3e3e3', marginBottom:"10px"}}/>
            <p id="copyRight">© 2020 AWAY, inc. All right reserved. </p>
            <p id="guides">Guide - General conditions - Legal Notices - Privacy policy</p>
        </div>

        <div className="switches">
            <a href="#"> 
              <FormControlLabel
                value="start"
                control={<Switch color="primary" />}
                label="Delivery Estimation"
                labelPlacement="start"
                onClick={() => setEstimation(!estimation)}
                checked={estimation}
                className="switchLabel"
              />
            </a>
            <a href="#"> 
              <FormControlLabel
                value="start"
                control={<Switch color="primary" />}
                label="Shipping Informations"
                labelPlacement="start"
                onClick={() => setShippingInfos(!shippingInfos)}
                checked={shippingInfos}
                className="switchLabel"
              />
            </a>
            <a href="#"> 
              <FormControlLabel
                value="start"
                control={<Switch color="primary" />}
                label="Order List"
                labelPlacement="start"
                onClick={() => setOrderList(!orderList)}
                checked={orderList}
                className="switchLabel"
              />
            </a>
            <a href="#"> 
              <FormControlLabel
                value="start"
                control={<Switch color="primary" />}
                label="Advertising"
                labelPlacement="start"
                onClick={() => setAdvertising(!advertising)}
                checked={advertising}
                className="switchLabel"
              />
            </a>
        </div>
      
    </>
  )
}

export default Body
