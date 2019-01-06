function buildVerifyCode({ id, width, height }) {
  var canvas = document.getElementById(id);
  var context = canvas.getContext("2d");
  //定义画布宽度与高度
  canvas.width = width;
  canvas.height = height;
  // context.strokeRect(0, 0, width, height);
  context.clearRect(0, 0, 80, 39)
  var vcodes = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,0,1,2,3,4,5,6,7,8,9".split(",");
  var length =vcodes.length
  var code = ''
  for (var i = 0; i < 4; i++) {
    const index = Math.round(Math.random() * length); //随机产生元素索引
    const value = vcodes[index];
    code += value;
    var deg = Math.random() * 90 * Math.PI / 180;//随机弧度
    let x = 80 / 5 * (i + 1);
    let y = 39 / 2;
    context.translate(x, y); // 设置绘制元素的偏移量
    context.fillStyle = "#666";
    context.font = "bold 20px 微软雅黑"; //设置绘制元素的字体样式
    context.rotate(deg); // 设置元素旋转度数
    context.fillText(value, 0, 0);
    //恢复坐标原点和旋转角度
    context.rotate(-deg);
    context.translate(-x, -y);
  }
  return code;
}

export default buildVerifyCode;