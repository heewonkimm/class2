import { useState } from "react"

export default function SignupStatePage() {

  const [email, setEmail] = useState('');
  const [password, setPassword]  = useState('');
  const [emailError, setEmailError] = useState('')

  function onClickSignup() {
    if(!email.includes('@')) {
      // alert('@를 포함한 이메일을 입력해주세요!')
      setEmailError('@를 포함한 이메일을 입력해주세요!')
      
    } else {
      alert('회원가입을 축하합니다!')
    }
  }
  function onChangeEmail(e) {
    setEmail(e.target.value)
  }
  function onChangePassword(e) {
    setPassword(e.target.value)
  }

  return(
    <>
      이메일: <input is="qqq" type="text" onChange={onChangeEmail}/>
      <div id="myerror">{emailError}</div>
      비밀번호: <input type="password"onChange={onChangePassword}/>
      <button onClick={onClickSignup}>회원가입</button>
    </>
  )
}