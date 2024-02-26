function getRecommendationMessage (data) {
    let recommendationMessage = '';
  
      data.forEach(anime => {
        if (anime.score >= 1 && anime.score <= 4) {
          recommendationMessage = 'I do not recommend it.';
        } else if (anime.score >= 5 && anime.score <= 7) {
          recommendationMessage = 'You may have fun.';
        } else if (anime.score > 7) {
          recommendationMessage = 'Great, this is one of the best anime.';
        }
        anime.recommendationMessage = recommendationMessage;
      });
}

module.exports = {getRecommendationMessage};