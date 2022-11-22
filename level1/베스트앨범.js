/*
1. 같은 장르끼리 묶기
2. 재생 순으로 정렬
3. 최대 2개까지 자르는 작업
*/

function solution(genres, plays) {
  const getGenres = new Map();
  const setGenres = genres.map((genre, index) => [genre, plays[index]]); // 각 장르값, 재생수를 묶어서 배열로 만들어주기
  setGenres.forEach(([genre, play], index) => {
    const data = getGenres.get(genre) || { total: 0, songs: [] };
    getGenres.set(genre, {
      total: data.total + play,
      songs: [...data.songs, { play, index }]
        .sort((a, b) => b.play - a.play)
        .slice(0, 2),
    });
  });
  console.log(
    [...getGenres.entries()]
      .sort((a, b) => b[1].total - a[1].total)
      .flatMap((item) => item[1].songs),
  );
  console.log(
    [...getGenres.entries()]
      .sort((a, b) => b[1].total - a[1].total)
      .flatMap((item) => item[1].songs)
      .map((song) => song.index),
  );
  return [...getGenres.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);
}
