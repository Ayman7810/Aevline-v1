import React from 'react'

const InputForm = ({name,idInput,typeInput,placeholderinput}) => {
  return (
    <div className="col-12">
    <label for={idInput} className="form-label">
      {name}
    </label>
    <div className="ms-auto position-relative">
      <div className="position-absolute top-50 translate-middle-y search-icon px-3">
        {/* <i className="bi bi-envelope-fill"></i>    هنا اطرح ايقونه يوزر*/}
      </div>
      <input
        type={typeInput}
        className="form-control radius-30 ps-5"
        id={idInput}
        dir="rtl"
        placeholder={placeholderinput}
      />
    </div>
  </div>
  )
}

export default InputForm
