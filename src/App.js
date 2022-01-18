import './App.css';
import React, {useState} from 'react';
import {Form, Button, Input, Switch, Layout, Row} from 'antd'
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import './index.css';

const { Header, Content } = Layout;


const onFinish = (values) => {
  console.log("Success:", values);
};


function App() {

  const [disabled, setDisabled] = useState(false);

  function toggleDisable (){
    setDisabled(!disabled);
  }
   return (
    <div className="App">
      <Layout>
          <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" className="demo-loadmore-list">
            <Layout>
              <Header style={{ marginBottom: '2%' }}>
                <Row>
                  <p style={{ color: 'white', marginLeft: '32%'}}>Nome da tarefa</p>
                  <p style={{ color: 'white', marginLeft: '8%'}}>Remover</p>
                </Row>
              </Header>
              <Content>
              <Form.List name="tasks" align="center" style={{ display: "flex", marginBottom: 8 }}>
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({  key, name, ...restField }) => (
                      <Form.Item
                        key={key}
                      >
                          <Content>
                            <Row align="center">
                              <Form.Item {...restField} name={[name, "nameTask"]} style={{marginRight: '2%'}}>
                                <Input placeholder="Nome da tarefa" disabled={disabled}>
                                </Input>
                              </Form.Item>
                              <MinusCircleOutlined onClick={() => remove(name)} style={{marginRight: '2%', marginTop: '0.8%'}} />
                              <Form.Item label="Tarefa Completa:" style={{marginLeft: '2%'}}/>
                              <Form.Item {...restField} name={[name, "completeTask"]} onClick={() => remove(name)} valuePropName="checked" initialValue={false}>
                                <Switch />
                              </Form.Item>
                            </Row>
                          </Content>
                      </Form.Item>
                    ))}
                    <Content>
                      <Row align="center">
                      <Form.Item>
                          <Button
                            style={{ margin: '0 10px' }}
                            size="medium"
                            type="dashed"
                            onClick={toggleDisable}>
                              {!disabled ? 'Desabilitar Edição' : 'Editar Itens'}
                          </Button>
                        </Form.Item>
                        <Form.Item>
                          <Button
                            style={{ margin: '0 10px' }}
                            size="medium"
                            type="dashed"
                            onClick={() => add()}
                            icon={<PlusOutlined />}>
                            Adicionar novo item
                          </Button>

                        </Form.Item>

                      </Row>
                    </Content>
                  </>
                )}
              </Form.List>
              </Content>
            </Layout>
          </Form>
      </Layout>
    </div>
  );
}

export default App;
