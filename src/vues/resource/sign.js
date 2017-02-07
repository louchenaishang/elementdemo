import uuid from 'uuid'
import md5 from 'md5'

const appId = 'community-management-rest'
const appSecret = 'tuJM@)DirR9%1)ie$dIS-oR3YV1tti8[K.AQ=rp9J[5uBWdFx(3hr.%HPZeknjp#'


export default function (request) {

  var appNonceStr = uuid.v1().replace(new RegExp('-', "gm"), '');
  var appSign = md5(appId + appSecret + appNonceStr);

  request.params.appId = appId;
  request.params.appNonceStr = appNonceStr;
  request.params.appSign = appSign;

}
