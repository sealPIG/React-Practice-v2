// props 傳遞
import './components.scss';

function Outter(props) {
  // const outterHeight = '80vh' - '4rem'

  return (
    <div className='outter'>
      <div className='outter-title'>
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
      </div>
      {props.children}
    </div>
  )
}

export { Outter }