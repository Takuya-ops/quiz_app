import React, { Fragment, useEffect, useState } from "react";
import "./HelloWorld.css";
import Input from "./Input";


// 関数コンポーネントでの書き方
function HelloWorld(props) {
  const [isTrue, setIsTrue] = useState(true)
  const [crowd, setCrowd] = useState([])
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [date, setDate] = useState("")

  
  const toggleTrue = () => {
    if (isTrue) {
      setIsTrue(false)
      return
    } else {
    setIsTrue(true)
    }
  }


  useEffect(() => {
    // console.log("Hello useEffect!")

    let people = [
      {
        id: 1,
        firstName: "Takuya",
        lastName: "Hotta",
        date: "1997-05-02",
      },
      {
        id: 1,
        firstName: "Maki",
        lastName: "Kurosaki",
        date: "1999-08-04"
      },
    ]
    setCrowd(people)
  }, [])

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
      {isTrue ? <p>解答を見ますか？</p> : <p> 休止状態が有効になっている EC2 インスタンスでアプリケーションを実行する。会社が 2 週間の一時休業に入る前に、インスタンスを休止状態にする。</p>}
      <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>解答</a>
      <hr/>
      <h3>達成者</h3>
      <ul className="list-group">
        {crowd.map((n) => (
          <li key={n.id} className="list-group-item">{n.firstName} {n.lastName} completed these question!</li>
        ))}
      </ul>
      <hr/>
        <form autoComplete="off">
          <div className="mb-3">
            <label className="form-label" htmlFor="first-name">名前</label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="first-name-new"
              className="form-control"
              onChange={(event) => setFirstName(event.target.value)}
            ></input>
          </div>
        </form>

        {/* <form autoComplete="off">
          <div className="mb-3">
            <label className="form-label" htmlFor="last-name">名字</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="last-name-new"
              className="form-control"
              onChange={(event) => setLastName(event.target.value)}
            ></input>
          </div>
        </form> */}
        
        {/* 上のコメントアウトのコードの同じ処理 */}
        <Input
          type="text"
          name="last-name"
          title="名字"
          autoComplete="last-name-new"
          className="form-control"
          onChange={(event) => setLastName(event.target.value)}
        />

        {/* <form autoComplete="off">
          <div className="mb-3">
            <label className="form-label" htmlFor="date">日付</label>
            <input
              type="date"
              name="date"
              id="date"
              autoComplete="date-new"
              className="form-control"
              onChange={(event) => setDate(event.target.value)}
            ></input>
          </div>
        </form> */}

        <Input
          type="date"
          name="date"
          title="日付"
          autoComplete="date-new"
          className="form-control"
          onChange={(event) => setDate(event.target.value)}
        />

        <div>
          First Name: {firstName}<br/>
          Last Name: {lastName}<br/>
          Date: {date}<br/>
        </div>

        <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
   
    </Fragment>
  )
}

export default HelloWorld;
