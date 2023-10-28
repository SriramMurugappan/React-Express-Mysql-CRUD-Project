function ContactUs(props){
    return(<div>
        <form>
            First Name<input type="text" /><br/>
            Last Name<input type="text" /><br/>
            Address <textarea rows="10" cols="50" />
            <input type="Submit" value="Submit" />
        </form>
    </div>)
}
export default ContactUs;