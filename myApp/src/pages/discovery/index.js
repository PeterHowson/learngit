import Taro, { Component } from '@tarojs/taro'
import { AtNoticebar, AtButton } from 'taro-ui'

class Index extends Component {

  backBtnHandler = () => {
    console.log('back');

    Taro.navigateBack();
  }

  render() {
    return (
      <View>
        <AtNoticebar>这是 NoticeBar 通告栏</AtNoticebar>
        <AtButton onClick={this.backBtnHandler}>返回</AtButton>
      </View>
    );
  }
}

export default Index;
