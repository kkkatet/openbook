/**
 * Функция нечеткого поиска с использованием алгоритма Левенштейна
 * @param {string} source - Исходная строка, в которой ищем
 * @param {string} query - Строка поиска
 * @param {number} maxDistance - Допустимая цена поиска (максимальное расстояние Левенштейна)
 * @returns {boolean} - true, если query найдена в source с учетом maxDistance, иначе false
 */
export function fuzzySearch(source, query, maxDistance) {
  if (maxDistance < 0) return false

  if (query.length === 0) return true

  if (source.length < query.length) {
    return query.length - source.length <= maxDistance
  }

  const matrix = []

  for (let i = 0; i <= query.length; i++) {
    matrix[i] = [i]
  }

  for (let j = 0; j <= source.length; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= query.length; i++) {
    for (let j = 1; j <= source.length; j++) {
      const cost = query[i - 1] === source[j - 1] ? 0 : 1

      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      )

      if (i === query.length && matrix[i][j] <= maxDistance) {
        return true
      }
    }
  }

  return matrix[query.length][source.length] <= maxDistance
}
