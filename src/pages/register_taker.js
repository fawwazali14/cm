

export default function Register_care_taker()  {



    return(
        <div class="parent">
            <div class="child">
                <div class="col1">
                    <input class="f1" type="text" name="firstname" placeholder="First name" fdprocessedid="pt80xo"/>
                    <input class="f1" type="text" name="Lastname" placeholder="Last name" fdprocessedid="pt80xo"/>
                </div>
                <div class="col2">
                    <input class="f1" type="text" name="contact_no" placeholder="Phone Number" fdprocessedid="pt80xo"/>
                    <input class="f1" type="text" name="subject" placeholder="Subject" fdprocessedid="pt80xo"/>

                </div>
                <div class="col21">
                    <input class="f3" type="text" name="email" placeholder="Email address" fdprocessedid="pt80xo"/>


                </div>
                <div class="col21">

                    <textarea class="f3" name="message" rows="5" placeholder="Leave your message"
                        spellcheck="false"></textarea>


                </div>
                <div class="col21">
                     <button class="b1" value="send">Submit</button>
                </div>
            </div>
        </div>
   
    )
  };
  