import React, { Fragment, useState } from "react";
import "./HelloWorld.css";

function HelloWorld(props) {
  const [isTrue, setIsTrue] = useState(true)
  
const toggleTrue = () => {
  if (isTrue) {
    setIsTrue(false)
    return
  } else {
  return
  }
}

  return (
    <Fragment>
      <hr/>
      <h1 className="h1-green">{props.msg}</h1>
      <hr/>

      {/* {isTrue &&
        <Fragment>
          <p>登録しますか？</p>
          <hr/>
        </Fragment>
      }
      {!isTrue &&
        <Fragment>
          <p>登録しました。</p>
          <hr/>
        </Fragment>
      } */}

      {/* 上のコメントアウトのコードを１行で書くと以下のようになる。 */}
      {isTrue ? <p>登録しますか？</p> : <p>登録しました。</p>}
      <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>登録</a>
    </Fragment>
  )
}

export default HelloWorld;
