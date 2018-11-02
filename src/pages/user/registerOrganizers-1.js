
import { Form, Input, Card, Select, Row, Col, Checkbox, Button, AutoComplete,Radio } from 'antd';

// const FormItem = Form.Item;
// const Option = Select.Option;
// const AutoCompleteOption = AutoComplete.Option;


const RadioGroup = Radio.Group;
class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    genderValue: 1,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleCheck = (rule, value, callback)=> {console.log(value,typeof value)
      if(!value){console.log(1)
        callback('请同意本站协议');
      }else{
        callback()
      }
     
   
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  onRadioChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      genderValue: e.target.value,
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      
      labelCol: {
        xs: { span: 16 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 10 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));


    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="主办方名称"
        >
          {getFieldDecorator('organizerName', {
            rules: [{ required: true, message: '请输入您的主办方名称!' }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="主办方地址"
        >
          {getFieldDecorator('address', {
            rules: [{ required: true, message: '请输入主办方地址!' }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="负责人姓名"
        >
          {getFieldDecorator('realName', {
            rules: [{ required: true, message: '请输入负责人姓名!' }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="性别"
        >
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: '请选择负责人性别!' }],
          })(
          <RadioGroup onChange={this.onRadioChange} value={this.state.value}>
            <Radio value={1}>先生</Radio>
            <Radio value={2}>女士</Radio>
          </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="联系电话"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入您的手机号!' }],
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="邮箱"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '您输入的不符合邮箱格式!',
            },{ required: true, message: '请输入负责人邮箱!' }],
          })(
            <Input  style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="密码"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入密码',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="请输入密码"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请再次确认密码',
            },{
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        
        <FormItem
          {...formItemLayout}
          label="验证码"
          extra="我们要确保你不是机器人."
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: '请输入您的验证码!' }],
              })(
                <Input />
              )}
            </Col>
            <Col span={12}>
              <Button>获取验证</Button>
            </Col>
          </Row>
        </FormItem>
        {/* <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
            initialValue: false,
            rules:[
             { validator: this.handleCheck},
            ]
          })(
            <Checkbox>我同意该网站 <a href="">协议</a></Checkbox>
          )}
        </FormItem> */}
        <FormItem style={{margin:"0 auto", width:'50%'}}>
          <Button  style={{marginLeft:"35%"}} type="primary" htmlType="submit">下一步</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

// export default function() {
//   return (
//     <div>
//       <WrappedRegistrationForm />
//     </div>
//   );
// }
import { Component } from "react";

import styles from './login.less';
import { Link } from "dva/router";
const FormItem = Form.Item;
const headStyle = {
  backgroundColor: '#f5f5f5',
  border: '1px solid #ddd',
  fontSize: '16px',
  color: 'rgba(0, 0, 0, 0.85)',
}



export default class Register extends Component{
    render(){
        return(
          <div style={{margin:'0 auto',width:'500px'}}>
            <Card  
            bordered={true} 
            style={{ width: '100%' }}
            headStyle={headStyle}
            bodyStyle={{border: '1px solid #ddd'}}
            title='注册'
            type='inner'
            >
                <WrappedRegistrationForm/>
            </Card>
               
          </div >  
        
        )
    }
}