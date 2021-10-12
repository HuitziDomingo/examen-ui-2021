import React from 'react'
import './Form.scss'

const Form = () => {
    return (
        <form method="post" enctype="multipart/form-data">
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">NOMBRE</label>
                    <input type="email" class="form-control in-design" id="inputEmail4" />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">CUMPLEAÑOS</label>
                    <input type="password" class="form-control in-design" id="inputPassword4" />
                </div>
            </div>

            <div class="row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">COLOR DE OJOS</label>
                    <input type="email" class="form-control in-design" id="inputEmail4" />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">COLOR DE PELO</label>
                    <input type="password" class="form-control in-design" id="inputPassword4" />
                </div>
            </div>

            {/* Radio Buttons */}
            <div className="container">
                <div className="row">
                    <div className="d-flex">
                        <p className="mt-2 col-md-6">GENERO</p>
                        <p className="mt-2 col-md-6">POSICION</p>
                    </div>
                    <div class="form-check col-md-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Mujer
                        </label>
                    </div>
                    <div class="form-check col-md-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Hombre
                        </label>
                    </div>
                    
                    <div class="form-check col-md-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Estudiante
                        </label>
                    </div>
                    <div class="form-check col-md-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Staff
                        </label>
                    </div>
                </div>
                <div class="mb-3 mt-3">
                    <label for="formFile" class="form-label">Fotografia</label>
                    <input class="form-control" type="file" id="formFile" />
                </div>
            </div>

            <div className="__center">
                <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
        </form>
    )
}

export default Form
