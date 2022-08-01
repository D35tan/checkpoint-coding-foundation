function filterApiData(apiData, mandatoryKeys) {
  const results = apiData.filter(function (keyFilter) {
    return Object.keys(keyFilter).includes(...mandatoryKeys);
  });
  return results;
}
