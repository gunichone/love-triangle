/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;                                 // задаем переменную count, чтобы считать спичи, которые участвуют в треугольниках
  for (let i = 0; i < preferences.length; i++) { // перебираем все элементы в массиве
      let Spich = preferences[i] - 1;            // создаем переменную спич и присваиваем значение индекса элемента минус один
        if (Spich == i)                          // делаем проверку спич равен ли индексу
          continue;                              // если значение спичона равно позиции двигаемся дальше
      let Spich2 = preferences[Spich] - 1;       // создаем перем. спич2 и добавляем значение индекса первого спича минус 1
        if (Spich2 == Spich) 
            continue;
      let Spich3 = preferences[Spich2] - 1;
        if (Spich3 == Spich2) 
          continue;
      if (Spich3 == i) {                          // если проверка прошла, добавляем спич в каунт
          count++;
      }
   }
   return count / 3;                              // узнаем количество треугольников из трех спичонов
}
