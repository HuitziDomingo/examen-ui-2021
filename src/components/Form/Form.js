import React from 'react'

const Form = () => {
    return (
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div>
            </div>
           
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
    )
}

export default Form
