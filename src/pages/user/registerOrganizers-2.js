
import { Form, Input, Card, Select, Row, Col, Checkbox, Button, AutoComplete,Radio } from 'antd';
import { Component } from "react";
import styles from './login.less';
import { Link } from "dva/router";


const headStyle = {
  backgroundColor: '#f5f5f5',
  border: '1px solid #ddd',
  fontSize: '16px',
  color: 'rgba(0, 0, 0, 0.85)',
}

class OrganizisionPic extends Component{
   
   
}



export default class Register extends Component{
    render(){
        return(
          <div style={{margin:'0 auto',width:'500px',backgroundColor:'red'}}>
            <Card  
            bordered={true} 
            style={{ width: '100%' }}
            headStyle={headStyle}
            bodyStyle={{border: '1px solid #ddd'}}
            title='注册'
            type='inner'
            >
                <OrganizisionPic/>
            </Card>
               
          </div >  
        
        )
    }
}