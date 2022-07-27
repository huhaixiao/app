/**
 * @see https://ant.design/components/form-cn/
 * @see https://ant.design/components/form-cn/#components-form-demo-dynamic-form-item
 * @see https://ant.design/components/form-cn/#components-form-demo-dynamic-form-items
 *
 * @todo dynamic-form-items-complex
 * @see https://ant.design/components/form-cn/#components-form-demo-dynamic-form-items-complex
 *
 * Pick<FormProps, 'labelCol' | 'wrapperCol'>
 * const [form] = Form.useForm()
 * <Form form={form}>
 *
 * const usernameValue = Form.useWatch('username', form)
 *
 * <Form.Item
 *  label=""
 *  name=""
 *  rules={[{required: true}]}
 *  valuePropName="checked"
 *  noStyle
 * >
 *
 * <Form.List
 *  name="names"
 * >
 *  {(fields, { add , remove }, { error }) => {
 *    return <>
 *      {fields.map(({ key, name, ...rest }, index) => {
 *        // index === 0 ? '' : ''
 *      })}
 *      <Form.Item {...layout}>
 *        <Button></Button>.
 *      </Form.Item>
 *    </>
 *  }}
 * </Form.List>
 *
 */
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Form, Input, Checkbox, Button, Select, Space, Typography } from 'antd';
import type { FormProps } from 'antd';

type IFormLayout = Pick<FormProps, 'labelCol' | 'wrapperCol'>;
type IFormValues = {
  remember: boolean;
  note: string;
  gender: string;
  passengers: string[];
  peoples: {
    name: string;
    age: number;
  }[];
};

enum enumGender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

const { Option } = Select;

const layout: IFormLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
};

const taillayout: IFormLayout = {
  wrapperCol: {
    offset: 4,
    span: 16
  }
};

export default () => {
  const [form] = Form.useForm<IFormValues>();
  const nameValue = Form.useWatch('username', form);

  const onGenderChange = (value: enumGender) => {
    switch (value) {
      case enumGender.Male:
        form.setFieldsValue({
          note: 'Hi, man!'
        });
        break;
      case enumGender.Female:
        form.setFieldsValue({
          note: 'Hi, lady!'
        });
        break;
      default:
        form.setFieldsValue({
          note: 'Hi, there!'
        });
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'default message',
      gender: enumGender.Male,
      passengers: ['One', 'Two']
    });
  };

  const onFinish = (values: IFormValues) => {
    console.log({ values });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log({ errorInfo });
  };

  return (
    <>
      <Form<IFormValues>
        {...layout}
        layout="horizontal"
        name="basic"
        initialValues={{
          remember: true
        }}
        autoComplete="off"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        disabled={false}>
        <Form.Item {...taillayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select<enumGender>
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}>
            <Option value={enumGender.Male}>male</Option>
            <Option value={enumGender.Female}>female</Option>
            <Option value={enumGender.Other}>other</Option>
          </Select>
        </Form.Item>
        <Form.Item<IFormValues>
          noStyle
          shouldUpdate={(prevValues, currentValues) => {
            return prevValues.gender !== currentValues.gender;
          }}>
          {({ getFieldValue }) => {
            return getFieldValue('gender') === enumGender.Other ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            ) : null;
          }}
        </Form.Item>
        <Form.List
          name="passengers"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error('At least two passengers!'));
                }
              }
            }
          ]}>
          {(fields, { add, remove }, { errors }) => {
            return (
              <>
                {fields.map((field, index) => {
                  return (
                    <Form.Item
                      {...(index === 0 ? layout : taillayout)}
                      label={index === 0 ? 'Passengers' : ''}
                      required={false}
                      key={field.key}>
                      <Form.Item
                        {...field}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message:
                              "Pleast input passenger's name or delete this field"
                          }
                        ]}
                        noStyle>
                        <Input
                          placeholder="passenger name"
                          style={{ width: '60%' }}
                        />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  );
                })}
                <Form.Item {...taillayout}>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}>
                    Add field
                  </Button>
                </Form.Item>
                <Form.Item {...taillayout}>
                  <Button
                    type="dashed"
                    onClick={() => add('The head item', 0)}
                    icon={<PlusOutlined />}>
                    Add field at head
                  </Button>
                </Form.Item>
                <Form.Item {...taillayout}>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            );
          }}
        </Form.List>
        <Form.List name="peoples">
          {(fields, { add, remove }, { errors }) => {
            return (
              <>
                {fields.map(({ key, name, ...rest }, index) => {
                  return (
                    <Form.Item
                      {...(index === 0 ? layout : taillayout)}
                      label={index === 0 ? 'People' : ''}
                      key={key}>
                      <Space>
                        <Form.Item
                          {...rest}
                          name={[name, 'name']}
                          rules={[{ required: true, message: 'Missing name' }]}>
                          <Input />
                        </Form.Item>
                        <Form.Item
                          {...rest}
                          name={[name, 'age']}
                          rules={[{ required: true, message: 'Missing age' }]}>
                          <Input type="number" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    </Form.Item>
                  );
                })}
                <Form.Item {...taillayout}>
                  <Button type="ghost" onClick={() => add()}>
                    Add People
                  </Button>
                </Form.Item>
              </>
            );
          }}
        </Form.List>
        <Form.Item {...taillayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="primary" htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Space>
        </Form.Item>
      </Form>

      <Typography>{nameValue}</Typography>
    </>
  );
};
