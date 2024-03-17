import axios from "axios";
// import { Qiita } from './qiita';

export function main() {
  axios
    .get("https://zipcloud.ibsnet.co.jp/api/search?zipcode=1610032")
    .then((res) => {console.log(res.data);})
    .catch((err) => {console.error(err);})
}

if (require.main === module) {
  main();
}
