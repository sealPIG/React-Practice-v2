// usestate, useffect, useRef, 生命週期
import { useState, useEffect, useRef } from 'react';
import { Outter } from './Tools';

export function Page1() {
  console.log('[Page 1] Render');

  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  useEffect(() => {
    setStateCount(0);
    console.log(`[Page 1] Mounting state Counter ${stateCount}`);
  }, []);

  useEffect(() => {
    console.log(`[Page 1] Updating state Counter ${stateCount}`);

    return () => {
      console.log(`[Page 1] Unmounting state Counter ${stateCount}`);
    }
  }, [stateCount]);

  function stateHandleClick() {
    setStateCount(stateCount + 1)
  }

  const refHandleClick = () => {
    refCount.current++;
    console.log(`[Page 1] ref Counter : ${refCount.current}`);
  }

  return (
    <Outter title='Page 1' subTitle='usestate, useEffect and useRef'>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '30vw', paddingRight: '30vw' }}>
        <div style={{ width: 'auto', display: 'inline-grid' }}>
          <button style={{ margin: '10px' }} onClick={stateHandleClick}>function Click</button>
          <button style={{ margin: '10px' }} onClick={() => setStateCount(stateCount + 1)}>useState Click me</button>
          <button style={{ margin: '10px' }} onClick={refHandleClick}>useRef Click</button>
        </div>
        <div style={{ width: 'auto', display: 'inline-grid' }}>
          <p style={{ margin: '10px' }}>state Counter : {stateCount}</p>
          <p style={{ margin: '10px' }}>ref Counter : {refCount.current}</p>
        </div>
      </div>
    </Outter>
  );
}