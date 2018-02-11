import { connect } from 'dva';
import { message, Button } from 'antd';
import './IndexPage.less'

function IndexPage({ loading, index }) {

  const info = () => {
    message.info('This is a normal message');
  };
  
  return (
    <div>
      <p>Hello Dva.</p>
      <Button type="primary" onClick={info}>点击</Button>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.loading.global,
    index: state.index || {},
  };
}

export default connect(mapStateToProps)(IndexPage);