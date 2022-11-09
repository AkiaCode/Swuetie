import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const List = [{
    'id': 'base2000',
    'title': '암호화된 문자를 복구화하시요.',
    'body': 'asdasdas'
  }, {
    'id': 'forbase2000',
    'title': '한결쿤 die스키',
    'body': 'asdasd112as'
  }, {
    'id': 'base2000',
    'title': 'test1000',
    'body': 'asdasdas'
  }];

  return (
    <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
      {/** 게시판 형태로 해서 routes마다 이동해서 찾도록 만들기 */}
      <h1 style={{  'textAlign': 'center' }}>게시판</h1>
      <div style={{
        'display': 'flex',
        'flexDirection': 'column'
      }}>
      {List.map(e=> {
        return <a style={{
          'textDecoration': 'none',
          'color': 'black',
          'border-radius': '1px',
          'border-bottom': '1px solid #a0a0a0',
          'fontSize': '24.80px',
          'margin-top': '10px',
        }} href={'flag/'+e.id}>{e.title}</a>
      })}
      </div>
    </div>
  );
});

