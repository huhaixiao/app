import { Form } from 'antd';

export default () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} initialValues={{ name: 'test' }}>
      <Form.Item name="name" label="name">
        <input type="text" />
      </Form.Item>
      <Form.List name="names">
        {(fields, { add, remove }, { errors }) => {
          return (
            <>
              {fields.map((field, index) => {
                return (
                  <Form.Item key={field.key}>
                    <Form.Item {...field}>
                      <input type="text" />
                    </Form.Item>
                    <button
                      type="button"
                      onClick={() => {
                        remove(field.name);
                      }}>
                      -
                    </button>
                  </Form.Item>
                );
              })}
              <Form.Item>
                <button type="button" onClick={() => add('added')}>
                  +
                </button>
              </Form.Item>
            </>
          );
        }}
      </Form.List>
    </Form>
  );
};
