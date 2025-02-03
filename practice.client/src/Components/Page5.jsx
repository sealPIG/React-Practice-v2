// jotai
/**
 * React 狀態管理套件比較與原理實現 - https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/a-comparison-of-react-state-management-libraries-ba61db07332b
 * jotai github - https://github.com/pmndrs/jotai
 */
import { atom, useAtom } from 'jotai';
import { Outter } from './Tools';

const countAtom = atom(0);

export function Page5() {
  console.log('[Page 5] Render');

  const [count, setCount] = useAtom(countAtom);

  return (
    <Outter title='Page 5' subTitle='jotai'>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '30vw', paddingRight: '30vw' }}>
        <button style={{ margin: '10px' }} onClick={() => setCount(count + 1)}>function Click</button>
        <p style={{ margin: '10px' }}>jotai Counter : {count}</p>
      </div>
    </Outter>
  )
}