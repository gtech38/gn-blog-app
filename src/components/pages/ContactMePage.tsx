import React from "react";

const ContactMePage: React.FC = () => {
    
        return (
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <br />
            <label>
              Message:
              <textarea name="message" />
            </label>
            <br />
            <button type="submit">Send</button>
          </form>
        );
}

export default ContactMePage;

