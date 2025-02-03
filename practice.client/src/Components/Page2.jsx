// hook
import { Select, Space } from 'antd';
import { Outter } from './Tools';
import { useCustomer } from '../hook.jsx';

export function Page2() {
  console.log('[Page 2] Render');

  const {
    name, setName,
    value, setValue
  } = useCustomer();

  const handleNameChange = (name) => {
    setName(name);
  }

  const handleValueChange = (value) => {
    setValue(value);
  }

  return (
    <Outter title='Page 2' subTitle='hook'>
      <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '35vw' }}>
        <Space wrap style={{ paddingRight: '5vw' }}>
          <Select
            onChange={handleNameChange}
            defaultValue={name}
            style={{ width: 120 }}
            options={[
              { value: 'Name1', label: 'Name1', },
              { value: 'Name2', label: 'Name2', },
              { value: 'Name3', label: 'Name3', },
              { value: 'Name4', label: 'Name4', },
              { value: 'Name5', label: 'Name5', },
            ]}
          />
        </Space>
        <p>Name = {name}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '35vw' }}>
        <Space wrap style={{ paddingRight: '5vw' }}>
          <Select
            onChange={handleValueChange}
            defaultValue={value}
            style={{ width: 120 }}
            options={[
              { value: '0', label: '0', },
              { value: '1', label: '1', },
              { value: '2', label: '2', },
              { value: '3', label: '3', },
              { value: '4', label: '4', },
              { value: '5', label: '5', },
            ]}
          />
        </Space>
        <p>Value = {value}</p>
      </div>
    </Outter>
  );
}