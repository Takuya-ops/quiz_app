import React from 'react';
import ReactDOM from 'react-dom/client';
import AppClass from './AppClass';
import HelloWorld from './HelloWorld';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <AppClass msg="問１：ある企業は、複数のアベイラビリティーゾーンにまたがる VPC 内で、パブリック側の 3 層ウェブアプリケーションを実行しています。プライベートサブネットで実行されているアプリケーション層の Amazon EC2 インスタンスでは、インターネットからソフトウェアパッチをダウンロードする必要があります。ただし、EC2 インスタンスにインターネットから直接アクセスすることはできません。  EC2 インスタンスが必要なパッチをダウンロードできるようにするために実行すべきアクションはどれですか。 "/>
          <HelloWorld msg="問２：あるソリューションアーキテクトは、会社が 2 週間一時休業する間に実行する必要のない Amazon EC2 インスタンスのコストを節約するため、ソリューションを設計したいと考えています。EC2 インスタンスで実行されているアプリケーションは、インスタンスが動作を再開するときに必要なデータをインスタンスメモリに格納します。  EC2 インスタンスをシャットダウンして再開するために、ソリューションアーキテクトが推奨すべきアプローチはどれですか。 "/>
        </div>
      </div>
    </div>
  </React.StrictMode>
);
