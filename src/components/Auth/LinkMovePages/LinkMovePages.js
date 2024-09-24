import React from 'react'
import { Link } from 'react-router-dom'

const LinkMovePages = ({text,link , textLink}) => {
  return (
    <div class="col-12">
    <p class="mb-0">
        {text}
      {/* لديك حساب من قبل اضفط */}
      <Link to={link} className="mx-2 moveLink">
        {/* تسجيل الدخول */}
        {textLink}
      </Link>
    </p>
  </div>
  )
}

export default LinkMovePages
