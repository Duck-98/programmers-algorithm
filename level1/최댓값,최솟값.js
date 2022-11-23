function solution(s) {
  const data = s.split(" ");
  const tmp = [];
  var answer = [];
  for (let i = 0; i < data.length; i++) {
    tmp.push(parseInt(data[i]));
  }
  answer.push(Math.min(...tmp));
  answer.push(Math.max(...tmp));
  str = answer.join(" ");

  return str;
}
