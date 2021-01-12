import React from 'react';

const ContactPage = () => {
    return (
        <div className="container">
            <div className=" row">
                <div className="col  col-xl-6 col-xs-12 mt-3">
                    <h1>Contact info</h1>
                    <h6>+57 3116676790</h6>
                    <h6>diegojuan2104@gmail.com</h6>
                    <h6>Medellín, Colombia.</h6>
                </div>
                <form className="col col-sm-12 col-lg-6" action="">
                    <h4>Let´s keep in touch</h4>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="te" class="form-control" id="exampleInputEmail1"></input>
                    </div>

                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a Message here" id="floatingTextarea"></textarea>
                    </div>
                    <button type="submit" class="mt-3 btn btn-dark">Send</button>
                </form>
            </div>

        </div>

    );
}

export default ContactPage;