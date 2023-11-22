import React, {Component} from "react";
import "./AppClass.css";

// クラスコンポーネントでの書き方
export default class AppClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTrue: true
    }
  }

  toggleTrue = () => {
    if (this.state.isTrue) {
      this.setState({
        isTrue: false
      })
      return
    } else {(
      this.setState(
        {isTrue: true}
      ))
    }

  }
  render() {
    return (
      <>
      <hr/>
      <h1 className="h1-red">{this.props.msg}</h1>
      <hr/>

      {this.state.isTrue ? <p>解答を見ますか？</p> : <p>パブリックサブネットで NAT ゲートウェイを構成する。インターネットトラフィック用の NAT ゲートウェイへのルートがあるカスタムルートテーブルを定義し、アプリケーション層のプライベートサブネットに関連付ける。 </p>}
      <a href="#!" className="btn btn-outline-secondary" onClick={this.toggleTrue}>登録</a>
    </>
    )
  }
}