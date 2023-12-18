const totalLikes = (array) => {
    const sum = array.reduce((total, { likes }) => total + likes, 0)
    return sum
}

module.exports = {
    totalLikes
  }