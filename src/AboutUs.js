function AboutUs(props){
    return (<center><div><b>Contact Us at</b><br/>
        {props.companyName}<br/>
        {props.address}
        <a href="mailto:aboutUs@gmail.com?subject=About us">About Us</a>
    </div></center>)
}
export default AboutUs;
